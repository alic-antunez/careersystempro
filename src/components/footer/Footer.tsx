import { useLang } from "../../i18n/LanguageContext";
import { Link, usePath } from "../../router";
import "./Footer.css";

/*
 * Only verified, working destinations are linked. Contact is intentionally omitted until a
 * verified support email exists (see config/legal.ts). The legal pages are English only, so
 * their labels stay in English in both languages.
 */
const LEGAL_LINKS = [
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Notice", href: "/privacy-policy" },
];

const COPY = {
  en: {
    desc: "Practical tools to help IT professionals strengthen their LinkedIn profiles and organize their job search.",
    nav: "Footer",
    legal: "Legal",
    rights: "All rights reserved.",
    links: [
      { label: "Home", href: "#top" },
      { label: "The complete offer", href: "#offer" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  es: {
    desc: "Herramientas prácticas para ayudar a profesionales de TI a fortalecer su perfil de LinkedIn y organizar su búsqueda de empleo.",
    nav: "Pie de página",
    legal: "Legal",
    rights: "Todos los derechos reservados.",
    links: [
      { label: "Inicio", href: "#top" },
      { label: "La oferta completa", href: "#offer" },
      { label: "Preguntas frecuentes", href: "#faq" },
    ],
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = COPY[lang];
  // The in-page anchors only exist on the homepage; from a legal page they point back to it.
  const prefix = usePath() === "/" ? "" : "/";

  return (
    <footer className="ft">
      <div className="ft__container">
        <div className="ft__top">
          <div className="ft__brand">
            <p className="ft__name">CareerProSystem</p>
            <p className="ft__desc">{t.desc}</p>
          </div>

          <nav className="ft__nav" aria-label={t.nav}>
            <ul>
              {t.links.map((l) => (
                <li key={l.href}>
                  <a href={`${prefix}${l.href}`}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <nav className="ft__nav ft__legal" aria-label={t.legal}>
          <ul>
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} lang="en">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="ft__copy">© {new Date().getFullYear()} CareerProSystem. {t.rights}</p>
      </div>
    </footer>
  );
}
