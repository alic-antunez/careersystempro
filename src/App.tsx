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
import { trackPageView } from "./analytics/ga";
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

  // Runs after the page's own effects, so document.title is already set. Hash anchors
  // (#offer, #faq) do not change `path`, so they do not count as extra page views.
  useEffect(() => {
    trackPageView();
  }, [path]);

  return (
    <>
      <Page />
      {/* Vercel Web Analytics: cookieless page-view counting, active only on Vercel deployments. */}
      <Analytics />
    </>
  );
}
