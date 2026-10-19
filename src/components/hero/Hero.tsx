import { CHECKOUT_URLS } from "../../config/checkout";
import { useLang } from "../../i18n/LanguageContext";
import HeroBundlePlaceholder from "./HeroBundlePlaceholder";
import "./Hero.css";

const COPY = {
  en: {
    eyebrow: "THE IT CAREER TOOLKIT",
    title: "Your IT experience deserves to be seen.",
    lead: "Build a stronger LinkedIn profile, highlight your IT expertise, and take control of your job search with a practical 30-day plan.",
    benefits: [
      "LinkedIn Optimization Guide",
      "250+ IT Keywords",
      "LinkedIn Profile Templates",
      "47-Point Profile Checklist",
      "30-Day Action Plan",
      "Recruiter Outreach Scripts",
    ],
    price: "$19 USD",
    reassurance: "One-time payment · No subscription",
    cta: "GET THE COMPLETE TOOLKIT — $19",
    micro: "Practical tools for your career. No guaranteed job offers or employment outcomes.",
  },
  es: {
    eyebrow: "EL KIT DE CARRERA IT",
    title: "Tu experiencia en TI merece ser vista.",
    lead: "Construye un perfil de LinkedIn más sólido, destaca tu experiencia en TI y toma el control de tu búsqueda de empleo con un plan práctico de 30 días.",
    benefits: [
      "Guía de Optimización de LinkedIn",
      "Más de 250 palabras clave de TI",
      "Plantillas de perfil de LinkedIn",
      "Checklist de perfil de 47 puntos",
      "Plan de acción de 30 días",
      "Guiones de contacto con reclutadores",
    ],
    price: "$19 USD",
    reassurance: "Pago único · Sin suscripción",
    cta: "OBTÉN EL KIT COMPLETO — $19",
    micro: "Herramientas prácticas para tu carrera. No se garantizan ofertas de trabajo ni resultados laborales.",
  },
};

function CheckIcon() {
  return (
    <svg className="hero__check" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.16" />
      <path d="M5.5 10.4l3 3 6-6.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const t = COPY[lang];
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">{t.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">{t.title}</h1>
          <p className="hero__lead">{t.lead}</p>

          <ul className="hero__benefits">
            {t.benefits.map((b) => (
              <li key={b}>
                <CheckIcon />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="hero__offer">
            <p className="hero__price">{t.price}</p>
            <p className="hero__reassurance">{t.reassurance}</p>
          </div>

          <a className="hero__cta" href={CHECKOUT_URLS[lang]} target="_blank" rel="noopener noreferrer">
            {t.cta}
          </a>

          <p className="hero__microcopy">{t.micro}</p>
        </div>

        <div className="hero__visual">
          <HeroBundlePlaceholder />
        </div>
      </div>
    </section>
  );
}
