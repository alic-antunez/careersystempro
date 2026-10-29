import { getConsent } from "../consent/consent";

/*
 * LinkedIn Insight Tag. The Partner ID is public by design.
 *
 * - Loads only on the production hostnames below, so local dev, `vite preview` and Vercel
 *   preview/*.vercel.app deployments never send hits.
 * - Loads and sends NOTHING until the visitor grants ADVERTISING consent (src/consent). It is
 *   denied by default and forced off when the browser sends Global Privacy Control.
 * - Loads once per page session. The tag has no consent or disable API, so a script already
 *   loaded CANNOT be stopped from here; only a page reload drops it, and what it does in the
 *   meantime is outside our control. Withdrawing consent only prevents it from loading again.
 * - The <noscript> image fallback from LinkedIn's snippet is intentionally omitted: it would
 *   fire without consent, and the site needs JavaScript to run at all.
 * - No conversion events are sent. Purchases happen on Hotmart, outside this site, and no
 *   verified purchase signal exists yet, so a visit or a checkout click is never reported as one.
 */
const LINKEDIN_PARTNER_ID = "10316132";
const LINKEDIN_HOSTNAMES = ["careersystempro.com", "www.careersystempro.com"];
const LINKEDIN_SCRIPT_SRC = "https://snap.licdn.com/li.li.analytics/insight.min.js";
// Best-effort cleanup of a first-party click-id cookie LinkedIn may set. Deleting it does NOT
// disable the tag, and the cookies on linkedin.com are out of reach of this site.
const LINKEDIN_COOKIES = ["li_fat_id"];

type Lintrk = ((action: string, data?: unknown) => void) & { q: unknown[][] };
declare global {
  interface Window {
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
    lintrk?: Lintrk;
  }
}

function isEnabled(): boolean {
  return import.meta.env.PROD && LINKEDIN_HOSTNAMES.includes(window.location.hostname);
}

let loaded = false;

/** Loads the Insight Tag if the environment is right and advertising was granted. Idempotent. */
export function loadLinkedIn(): void {
  if (loaded || !isEnabled() || !getConsent().advertising) return;
  loaded = true;

  // Equivalent of LinkedIn's stock snippet, typed
  window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids ?? [];
  window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);

  if (!window.lintrk) {
    const lintrk = ((a: string, b?: unknown) => {
      lintrk.q.push([a, b]);
    }) as Lintrk;
    lintrk.q = [];
    window.lintrk = lintrk;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = LINKEDIN_SCRIPT_SRC;
  document.head.appendChild(script);
}

function clearLinkedInCookies(): void {
  const parts = window.location.hostname.split(".");
  // Try the host and every parent domain down to the registrable domain (e.g. .example.com)
  const domains = ["", ...parts.slice(0, -1).map((_, i) => `; domain=${parts.slice(i).join(".")}`)];
  for (const name of LINKEDIN_COOKIES) {
    for (const d of domains) document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
  }
}

/**
 * Called whenever advertising is not granted (undecided, rejected, withdrawn, or GPC). Cookie
 * cleanup only: it cannot stop a tag that is already loaded (see the header note).
 */
export function cleanupLinkedIn(): void {
  if (!isEnabled()) return;
  clearLinkedInCookies();
}
