import { NextRequest, NextResponse } from "next/server";
import { verifyResponseHash } from "@/lib/payu";

export async function POST(req: NextRequest) {
  try {
    // PayU sends webhook as application/x-www-form-urlencoded
    const formData = await req.formData();

    const txnid      = formData.get("txnid")?.toString() || "";
    const amount     = formData.get("amount")?.toString() || "";
    const productinfo = formData.get("productinfo")?.toString() || "";
    const firstname  = formData.get("firstname")?.toString() || "";
    const email      = formData.get("email")?.toString() || "";
    const status     = formData.get("status")?.toString() || "";
    const hash       = formData.get("hash")?.toString() || "";
    const mihpayid   = formData.get("mihpayid")?.toString() || "";

    // ✅ Verify hash — IMPORTANT security check
    const isValid = verifyResponseHash({
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      status,
      hash,
    });

    if (!isValid) {
      console.error("❌ PayU webhook hash mismatch! Possible fraud attempt.");
      return NextResponse.json({ error: "Invalid hash" }, { status: 400 });
    }

    if (status === "success") {
      // ✅ Payment successful — log it (add your DB save logic here)
      console.log("✅ Payment Success:", {
        txnid,
        amount,
        productinfo,
        email,
        mihpayid,
      });

      // TODO: Save to database
      // await db.orders.create({ txnid, amount, productinfo, email, mihpayid });

      // TODO: Send confirmation email to buyer
    } else {
      console.log("❌ Payment Failed:", { txnid, status, email });
    }

    // PayU expects a 200 OK response
    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
