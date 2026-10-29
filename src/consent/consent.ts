import { useSyncExternalStore } from "react";

/*
 * Consent state for non-essential tools. Plain module (no React context) so non-React code
 * such as src/analytics/ga.ts can read it, and React reads it through useConsent().
 *
 * - Default is DENIED: until the visitor chooses, analytics and advertising are off.
 * - `analytics`: GA4 and Vercel Analytics.
 * - `advertising`: the Meta Pixel (src/analytics/meta.ts). Any other advertising tool must
 *   also check `getConsent().advertising` before loading anything.
 * - Global Privacy Control (GPC): when the browser sends it, advertising is forced off and
 *   cannot be switched on here.
 * - Essential functionality (language preference, checkout links) never depends on consent.
 */

const STORAGE_KEY = "cps-consent";

export type ConsentChoice = { analytics: boolean; advertising: boolean };

type Stored = ConsentChoice & { v: 1; updatedAt: string; source: "banner" | "preferences" };

export type ConsentSnapshot = ConsentChoice & {
  /** True once the visitor has chosen (a stored choice exists). */
  decided: boolean;
  /** True when the browser sends Global Privacy Control. */
  gpc: boolean;
  /** Whether the preferences dialog is open. */
  prefsOpen: boolean;
};

const gpc: boolean =
  typeof navigator !== "undefined" && (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;

function read(): Stored | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as Partial<Stored>;
    if (v.v !== 1 || typeof v.analytics !== "boolean" || typeof v.advertising !== "boolean") return null;
    return v as Stored;
  } catch {
    return null; // storage unavailable or corrupt: behave as "undecided"
  }
}

let stored: Stored | null = read();
let prefsOpen = false;
const listeners = new Set<() => void>();

function compute(): ConsentSnapshot {
  return {
    decided: stored !== null,
    analytics: stored?.analytics ?? false,
    advertising: (stored?.advertising ?? false) && !gpc,
    gpc,
    prefsOpen,
  };
}

let snapshot = compute();

function emit() {
  snapshot = compute();
  listeners.forEach((l) => l());
}

function persist(choice: ConsentChoice, source: Stored["source"]) {
  stored = {
    v: 1,
    analytics: choice.analytics,
    advertising: choice.advertising && !gpc,
    updatedAt: new Date().toISOString(),
    source,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    /* storage unavailable: the choice lasts for this page session only */
  }
  prefsOpen = false;
  emit();
}

export const getConsent = (): ConsentSnapshot => snapshot;

export const acceptAll = (source: Stored["source"] = "banner") => persist({ analytics: true, advertising: true }, source);
export const rejectNonEssential = (source: Stored["source"] = "banner") => persist({ analytics: false, advertising: false }, source);
export const savePreferences = (choice: ConsentChoice) => persist(choice, "preferences");

export function openPreferences() {
  prefsOpen = true;
  emit();
}
export function closePreferences() {
  prefsOpen = false;
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useConsent(): ConsentSnapshot {
  return useSyncExternalStore(subscribe, getConsent, getConsent);
}
