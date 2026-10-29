import { getConsent } from "../consent/consent";

/*
 * Meta Pixel. The Pixel ID is public by design.
 *
 * - Loads only on the production hostnames below, so local dev, `vite preview` and Vercel
 *   preview/*.vercel.app deployments never send events.
 * - Loads and sends NOTHING until the visitor grants ADVERTISING consent (src/consent). It is
 *   denied by default and forced off when the browser sends Global Privacy Control. Every
 *   public function here re-checks it.
 * - Initialises once; page views are sent manually because the app is a single-page app with
 *   its own pathname router (so the stock snippet's single PageView is not enough).
 * - The <noscript> image fallback from Meta's snippet is intentionally omitted: it would fire
 *   without consent, and the site needs JavaScript to run at all.
 * - No purchase events are sent: checkout happens on Hotmart, outside this site.
 */
const META_PIXEL_ID = "2078623099485729";
const META_HOSTNAMES = ["careersystempro.com", "www.careersystempro.com"];
// First-party cookies the Pixel sets: browser id and click id
const META_COOKIES = ["_fbp", "_fbc"];

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
  push: (...args: unknown[]) => void;
};
declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

function isEnabled(): boolean {
  return import.meta.env.PROD && META_HOSTNAMES.includes(window.location.hostname);
}

/** Right environment AND the visitor has granted advertising. */
function advertisingAllowed(): boolean {
  return isEnabled() && getConsent().advertising;
}

let initialized = false;
// True after a withdrawal in this page session, so a later grant can resume tracking
let revoked = false;

function init(): void {
  if (initialized) return;
  initialized = true;

  // Equivalent of Meta's stock loader snippet, typed
  const fbq: Fbq = Object.assign(
    (...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    },
    { queue: [] as unknown[][], loaded: true, version: "2.0", push: (() => {}) as Fbq["push"] },
  );
  fbq.push = fbq;
  window.fbq = fbq;
  window._fbq = fbq;

  fbq("init", META_PIXEL_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
}

export function trackMetaPageView(): void {
  if (!advertisingAllowed()) return;
  if (revoked) {
    // Re-granted after a withdrawal in this same page session
    revoked = false;
    window.fbq?.("consent", "grant");
  }
  init();
  window.fbq!("track", "PageView");
}

function clearMetaCookies(): void {
  const parts = window.location.hostname.split(".");
  // Try the host and every parent domain down to the registrable domain (e.g. .example.com)
  const domains = ["", ...parts.slice(0, -1).map((_, i) => `; domain=${parts.slice(i).join(".")}`)];
  for (const name of META_COOKIES) {
    for (const d of domains) document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
  }
}

/**
 * Called whenever advertising is not granted (undecided, rejected, withdrawn, or GPC). Stops
 * further Pixel events from this page and removes its cookies. A script already loaded in this
 * page cannot be unloaded, so it is revoked instead; a reload drops it entirely.
 */
export function disableMeta(): void {
  if (!isEnabled()) return;
  if (initialized && !revoked) {
    revoked = true;
    window.fbq?.("consent", "revoke");
  }
  clearMetaCookies();
}

/**
 * Records a click on a purchase CTA as a custom event. Like the GA4 equivalent it measures
 * purchase INTENT only, never a confirmed sale. Never throws and never touches navigation.
 */
export function trackMetaPurchaseCtaClick(ctaLocation: string, language: "en" | "es"): void {
  try {
    if (!advertisingAllowed() || !window.fbq) return;
    window.fbq("trackCustom", "PurchaseCtaClick", { cta_location: ctaLocation, language });
  } catch {
    /* advertising tools must never break the purchase flow */
  }
}
