import { useEffect, type ComponentType } from "react";
import Hero from "./components/hero/Hero";
import Problem from "./components/problem/Problem";
import Method from "./components/method/Method";
import Toolkit from "./components/toolkit/Toolkit";
import Audience from "./components/audience/Audience";
import Testimonials from "./components/testimonials/Testimonials";
import Purchase from "./components/purchase/Purchase";
import Footer from "./components/footer/Footer";
import LanguageSwitch from "./i18n/LanguageSwitch";
import { useLang } from "./i18n/LanguageContext";
import { usePath } from "./router";
import { disableAnalytics, trackPageView } from "./analytics/ga";
import { disableMeta, trackMetaPageView } from "./analytics/meta";
import { cleanupLinkedIn, loadLinkedIn } from "./analytics/linkedin";
import { getConsent, useConsent } from "./consent/consent";
import ConsentUI from "./components/consent/ConsentUI";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Analytics } from "@vercel/analytics/react";

const LEGAL_ROUTES: Record<string, ComponentType> = {
  "/refund-policy": RefundPolicy,
  "/terms-and-conditions": TermsAndConditions,
  "/privacy-policy": PrivacyPolicy,
};

const HOME_TITLE = {
  en: "The IT Career Toolkit | CareerPro System",
  es: "El Kit de Carrera IT | CareerPro System",
};

function HomePage() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = HOME_TITLE[lang];
  }, [lang]);

  return (
    <>
      <LanguageSwitch />
      <main id="top">
        <Hero />
        <Problem />
        <Method />
        <Toolkit />
        <Audience />
        <Testimonials />
        <Purchase />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const path = usePath();
  const Page = LEGAL_ROUTES[path] ?? HomePage;
  const { analytics, advertising } = useConsent();

  // Runs after the page's own effects, so document.title is already set. Hash anchors
  // (#offer, #faq) do not change `path`, so they do not count as extra page views.
  // Re-runs when analytics consent flips: a grant sends one page_view for the current page;
  // trackPageView() is a no-op while consent is denied.
  useEffect(() => {
    trackPageView();
  }, [path, analytics]);

  // Not granted (undecided, rejected or withdrawn): silence GA4 and clear its cookies.
  useEffect(() => {
    if (!analytics) disableAnalytics();
  }, [analytics]);

  // Same pattern for the Meta Pixel, gated by the separate advertising consent.
  useEffect(() => {
    trackMetaPageView();
  }, [path, advertising]);

  useEffect(() => {
    if (!advertising) disableMeta();
  }, [advertising]);

  // LinkedIn Insight Tag: advertising consent too. It has no page-view call to repeat per route.
  useEffect(() => {
    if (advertising) loadLinkedIn();
    else cleanupLinkedIn();
  }, [advertising]);

  return (
    <>
      <Page />
      <ConsentUI />
      {/* Vercel Web Analytics: cookieless, active only on Vercel deployments, and only mounted
          with analytics consent. beforeSend also drops events if consent is withdrawn later. */}
      {analytics && <Analytics beforeSend={(event) => (getConsent().analytics ? event : null)} />}
    </>
  );
}
