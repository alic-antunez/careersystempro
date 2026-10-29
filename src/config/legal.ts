/*
 * Seller details for the legal pages. DO NOT invent values.
 * Leave a field as "" until the seller supplies the real information: the legal pages then
 * show a highlighted [INSERT ...] placeholder. Fill the values in here (one place) and the
 * Refund Policy, Terms and Privacy Notice update together.
 *
 * Check what is still missing with:  node scripts/check-placeholders.mjs
 * Fail a build while anything is missing:  node scripts/check-placeholders.mjs --strict
 */
export const LEGAL_LAST_UPDATED = "October 19, 2026";
// The Privacy Notice was revised for the consent banner (analytics/advertising choices, GPC),
// then for the Meta Pixel and the LinkedIn Insight Tag.
export const PRIVACY_NOTICE_UPDATED = "October 29, 2026";

export const LEGAL_INFO: Record<"legalName" | "supportEmail" | "privacyEmail" | "address", string> = {
  legalName: "Alic Miguel Antunez Cruz",
  supportEmail: "support@careersystempro.com",
  privacyEmail: "support@careersystempro.com",
  address: "Lago Cahapala 47, Miguel Hidalgo, 11320, CDMX, Mexico",
};
