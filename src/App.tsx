import Hero from "./components/hero/Hero";
import Problem from "./components/problem/Problem";
import Method from "./components/method/Method";
import Toolkit from "./components/toolkit/Toolkit";
import Audience from "./components/audience/Audience";
import Purchase from "./components/purchase/Purchase";
import Footer from "./components/footer/Footer";
import LanguageSwitch from "./i18n/LanguageSwitch";

export default function App() {
  return (
    <>
      <LanguageSwitch />
      <main id="top">
        <Hero />
        <Problem />
        <Method />
        <Toolkit />
        <Audience />
        <Purchase />
      </main>
      <Footer />
    </>
  );
}
