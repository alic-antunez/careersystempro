import { useLang } from "../../i18n/LanguageContext";
import "./Footer.css";

/*
 * Only verified, working destinations are linked (same-page anchors).
 * Contact, Privacy Policy and Terms of Service are intentionally omitted: no verified
 * URLs or contact details exist yet. Add them here once confirmed.
 * MISSING LEGAL PAGES (to be prepared before launch): Privacy Policy, Terms of Use, Refund Policy.
 */
const COPY = {
  en: {
    desc: "Practical tools to help IT professionals strengthen their LinkedIn profiles and organize their job search.",
    nav: "Footer",
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
    rights: "Todos los derechos reservados.",
    links: [
      { label: "Inicio", href: "#top" },
      { label: "La oferta completa", href: "#offer" },
      { label: "Preguntas frecuentes", href: "#faq" },
    ],
  },
};

export default function Footer() {
  const t = COPY[useLang().lang];
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
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="ft__copy">© {new Date().getFullYear()} CareerProSystem. {t.rights}</p>
      </div>
    </footer>
  );
}
