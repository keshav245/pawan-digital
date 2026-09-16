import crypto from "crypto";

// ─── PayU Config ────────────────────────────────────────────────────────────
export const PAYU_KEY = process.env.PAYU_KEY!;
export const PAYU_SALT = process.env.PAYU_SALT!;
export const PAYU_URL = "https://secure.payu.in/_payment"; // Live endpoint

// ─── Product Catalog ─────────────────────────────────────────────────────────
export const TEMPLATES: Record<string, { name: string; price: number }> = {
  "business-pro-ui-kit":    { name: "Business Pro UI Kit",    price: 499 },
  "saas-landing-page":      { name: "SaaS Landing Page",       price: 399 },
  "ecommerce-dashboard":    { name: "E-Commerce Dashboard",    price: 799 },
  "portfolio-starter":      { name: "Portfolio Starter",       price: 299 },
};

// ─── Hash Generation ─────────────────────────────────────────────────────────
// PayU hash formula:
// sha512(key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||SALT)
export function generateHash(params: {
  txnid: string;
  amount: string;
  productinfo: string;
  firstname: string;
  email: string;
}): string {
  const hashString = [
    PAYU_KEY,
    params.txnid,
    params.amount,
    params.productinfo,
    params.firstname,
    params.email,
    "", // udf1
    "", // udf2
    "", // udf3
    "", // udf4
    "", // udf5
    "", "", "", "", "", // extra empty fields
    PAYU_SALT,
  ].join("|");

  return crypto.createHash("sha512").update(hashString).digest("hex");
}

// ─── Response Hash Verification ──────────────────────────────────────────────
// PayU response hash formula (reversed):
// sha512(SALT|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key)
export function verifyResponseHash(params: {
  txnid: string;
  amount: string;
  productinfo: string;
  firstname: string;
  email: string;
  status: string;
  hash: string;
}): boolean {
  const hashString = [
    PAYU_SALT,
    params.status,
    "", "", "", "", "", // udf5 to udf1 (reversed)
    params.email,
    params.firstname,
    params.productinfo,
    params.amount,
    params.txnid,
    PAYU_KEY,
  ].join("|");

  const expectedHash = crypto
    .createHash("sha512")
    .update(hashString)
    .digest("hex");

  return expectedHash === params.hash;
}

// ─── Generate Unique Transaction ID ──────────────────────────────────────────
export function generateTxnId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `PD-${timestamp}-${random}`;
}
