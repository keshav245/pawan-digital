import { NextRequest, NextResponse } from "next/server";
import {
  PAYU_KEY,
  PAYU_URL,
  TEMPLATES,
  generateHash,
  generateTxnId,
} from "@/lib/payu";

export async function POST(req: NextRequest) {
  try {
    const { templateId, buyerName, buyerEmail, buyerPhone } = await req.json();

    // Validate template exists
    const template = TEMPLATES[templateId];
    if (!template) {
      return NextResponse.json({ error: "Invalid template" }, { status: 400 });
    }

    // Validate required fields
    if (!buyerName || !buyerEmail || !buyerPhone) {
      return NextResponse.json(
        { error: "Name, email and phone are required" },
        { status: 400 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const txnid = generateTxnId();
    const amount = template.price.toFixed(2);
    const productinfo = template.name;
    const firstname = buyerName.split(" ")[0];

    // Generate PayU hash
    const hash = generateHash({
      txnid,
      amount,
      productinfo,
      firstname,
      email: buyerEmail,
    });

    // Build PayU params
    const payuParams: Record<string, string> = {
      key: PAYU_KEY,
      txnid,
      amount,
      productinfo,
      firstname,
      email: buyerEmail,
      phone: buyerPhone,
      surl: `${baseUrl}/payment/success`, // Success redirect URL
      furl: `${baseUrl}/payment/failure`, // Failure redirect URL
      hash,
      service_provider: "payu_paisa",
    };

    // Build HTML auto-submit form (PayU requires a form POST)
    const formFields = Object.entries(payuParams)
      .map(
        ([key, value]) =>
          `<input type="hidden" name="${key}" value="${value}" />`
      )
      .join("\n");

    const html = `
      <!DOCTYPE html>
      <html>
        <head><title>Redirecting to PayU...</title></head>
        <body>
          <p style="font-family:sans-serif;text-align:center;margin-top:40px;">
            Redirecting to payment gateway...
          </p>
          <form id="payuForm" action="${PAYU_URL}" method="POST">
            ${formFields}
          </form>
          <script>document.getElementById("payuForm").submit();</script>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error("PayU initiate error:", error);
    return NextResponse.json(
      { error: "Payment initiation failed" },
      { status: 500 }
    );
  }
}
