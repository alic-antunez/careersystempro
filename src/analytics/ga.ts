import { getConsent } from "../consent/consent";
import { trackMetaPurchaseCtaClick } from "./meta";

/*
 * Google Analytics 4 (gtag.js). The Measurement ID is public by design.
 *
 * - Loads only on the production hostnames below, so local dev, `vite preview` and Vercel
 *   preview/*.vercel.app deployments never send hits.
 * - Loads and sends NOTHING until the visitor grants analytics consent (src/consent). Consent
 *   is denied by default; every public function here re-checks it.
 * - Initialises once; page views are sent manually because the app is a single-page app with
 *   its own pathname router.
 * - Advertising features of Google are kept denied (Consent Mode ad_* signals): no Google Ads
 *   or ad-personalization integration exists.
 * - No purchase/checkout events are sent: checkout happens on Hotmart, outside this site.
 */
const GA_MEASUREMENT_ID = "G-7VWGSBZ6FD";
const GA_HOSTNAMES = ["careersystempro.com", "www.careersystempro.com"];
const GA_DISABLE_FLAG = `ga-disable-${GA_MEASUREMENT_ID}`;
// First-party cookies GA4 sets for this property
const GA_COOKIES = ["_ga", `_ga_${GA_MEASUREMENT_ID.replace("G-", "")}`];

type GtagArgs = unknown[];
declare global {
  interface Window {
    dataLayer?: GtagArgs[];
    gtag?: (...args: GtagArgs) => void;
  }
}

function isEnabled(): boolean {
  return import.meta.env.PROD && GA_HOSTNAMES.includes(window.location.hostname);
}

/** Right environment AND the visitor has granted analytics. */
function analyticsAllowed(): boolean {
  return isEnabled() && getConsent().analytics;
}

let initialized = false;
// True after a withdrawal in this page session, so a later grant can restore storage
let silenced = false;

function init(): void {
  if (initialized) return;
  initialized = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: GtagArgs) {
    // gtag.js expects the real `arguments` object, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown as GtagArgs);
  };
  // Consent Mode defaults must come before config: analytics granted (init only runs after
  // consent), all advertising signals denied.
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  // send_page_view is off: page views are sent per route by trackPageView()
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView(): void {
  if (!analyticsAllowed()) return;
  if (silenced) {
    // Re-granted after a withdrawal in this same page session
    silenced = false;
    (window as unknown as Record<string, boolean>)[GA_DISABLE_FLAG] = false;
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
  }
  init();
  window.gtag!("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

function clearGaCookies(): void {
  const parts = window.location.hostname.split(".");
  // Try the host and every parent domain down to the registrable domain (e.g. .example.com)
  const domains = ["", ...parts.slice(0, -1).map((_, i) => `; domain=${parts.slice(i).join(".")}`)];
  for (const name of GA_COOKIES) {
    for (const d of domains) document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
  }
}

/**
 * Called whenever analytics is not granted (undecided, rejected, or withdrawn). Stops any
 * further GA4 hits from this page and removes GA4's cookies. A script already loaded in this
 * page cannot be unloaded, so it is silenced instead; a reload drops it entirely.
 */
export function disableAnalytics(): void {
  if (!isEnabled()) return;
  (window as unknown as Record<string, boolean>)[GA_DISABLE_FLAG] = true;
  if (initialized && !silenced) {
    silenced = true;
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
  }
  clearGaCookies();
}

export type PurchaseCtaLocation = "hero" | "offer_card" | "final_cta";

// Stable identifiers for the two Hotmart products (English and Spanish checkouts differ).
const PRODUCT_NAMES = { en: "career_toolkit_en", es: "career_toolkit_es" } as const;
const PRODUCT_PRICE_USD = 19;

/**
 * Records a click on a purchase CTA. This measures purchase INTENT only: checkout happens on
 * Hotmart, so no `begin_checkout`/`purchase` event is sent and a click is never a confirmed sale.
 * Sent only with analytics consent. Never throws and never touches navigation; if GA4 is off,
 * blocked or not consented, the click works as usual.
 */
export function trackPurchaseCtaClick(ctaLocation: PurchaseCtaLocation, language: "en" | "es"): void {
  trackMetaPurchaseCtaClick(ctaLocation, language); // its own advertising-consent check
  try {
    if (!analyticsAllowed() || !window.gtag) return;
    window.gtag("event", "purchase_cta_click", {
      cta_location: ctaLocation,
      language,
      currency: "USD",
      value: PRODUCT_PRICE_USD,
      product_name: PRODUCT_NAMES[language],
      transport_type: "beacon", // delivered even though the checkout opens in a new tab
    });
  } catch {
    /* analytics must never break the purchase flow */
  }
}
