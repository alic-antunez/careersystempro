/*
 * Google Analytics 4 (gtag.js). The Measurement ID is public by design.
 *
 * Loads only on the production hostnames below, so local dev, `vite preview` and Vercel
 * preview/*.vercel.app deployments never send hits. Initialises once; page views are sent
 * manually because the app is a single-page app with its own pathname router.
 *
 * No consent-management layer exists in this project, and none is simulated here.
 * No purchase/checkout events are sent: checkout happens on Hotmart, outside this site.
 */
const GA_MEASUREMENT_ID = "G-7VWGSBZ6FD";
const GA_HOSTNAMES = ["careersystempro.com", "www.careersystempro.com"];

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

let initialized = false;

function init(): void {
  if (initialized) return;
  initialized = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: GtagArgs) {
    // gtag.js expects the real `arguments` object, not an array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown as GtagArgs);
  };
  window.gtag("js", new Date());
  // send_page_view is off: page views are sent per route by trackPageView()
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView(): void {
  if (!isEnabled()) return;
  init();
  window.gtag!("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}

export type PurchaseCtaLocation = "hero" | "offer_card" | "final_cta";

// Stable identifiers for the two Hotmart products (English and Spanish checkouts differ).
const PRODUCT_NAMES = { en: "career_toolkit_en", es: "career_toolkit_es" } as const;
const PRODUCT_PRICE_USD = 19;

/**
 * Records a click on a purchase CTA. This measures purchase INTENT only: checkout happens on
 * Hotmart, so no `begin_checkout`/`purchase` event is sent and a click is never a confirmed sale.
 * Never throws and never touches navigation; if GA4 is off or blocked the click works as usual.
 */
export function trackPurchaseCtaClick(ctaLocation: PurchaseCtaLocation, language: "en" | "es"): void {
  try {
    if (!isEnabled() || !window.gtag) return;
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
