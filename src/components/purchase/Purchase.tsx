import type { ReactNode } from "react";
import { CHECKOUT_URLS } from "../../config/checkout";
import { useLang } from "../../i18n/LanguageContext";
import "./Purchase.css";

/*
 * Purchase journey: offer card -> short FAQ -> final CTA. Anchors #offer and #faq are kept
 * for the footer. Owner follow-ups (nothing below could be verified from the repository):
 * - Delivery and refund answers use neutral fallback wording; no terms are invented.
 *   OWNER TO RESOLVE BEFORE LAUNCH: real delivery method and published refund policy.
 * - One-time payment / no subscription follows the offer copy; NOT checked against Hotmart.
 * - No support contact or legal/policy URLs exist, so none are shown.
 */

type Faq = { q: string; a: ReactNode };

const COPY: Record<
  "en" | "es",
  {
    eyebrow: string;
    title: string;
    included: string[];
    price: string;
    terms: string;
    cta: string;
    expect: string;
    aside: string;
    faqTitle: string;
    faqs: Faq[];
    closeTitle: string;
  }
> = {
  en: {
    eyebrow: "THE COMPLETE OFFER",
    title: "Your IT Career Toolkit. All in one place.",
    included: [
      "LinkedIn Optimization Guide (24 pages)",
      "250+ IT Keywords",
      "LinkedIn Profile Templates",
      "47-Point Profile Checklist",
      "30-Day Action Plan",
      "Recruiter Outreach Scripts",
    ],
    price: "$19 USD",
    terms: "One-time payment · No subscription",
    cta: "GET THE COMPLETE TOOLKIT — $19",
    expect: "Self-guided digital toolkit. No personalized coaching or job-placement services. Employment outcomes are not guaranteed.",
    aside: "Purchase the toolkit",
    faqTitle: "Common questions",
    faqs: [
      {
        q: "What is included?",
        a: (
          <>
            <p>The toolkit includes six resources:</p>
            <ul>
              <li>LinkedIn Optimization Guide (24 pages)</li>
              <li>250+ IT Keywords</li>
              <li>LinkedIn Profile Templates</li>
              <li>47-Point Profile Checklist</li>
              <li>30-Day Action Plan</li>
              <li>Recruiter Outreach Scripts</li>
            </ul>
          </>
        ),
      },
      { q: "How do I receive the toolkit?", a: <p>The toolkit is a digital product. Please review the purchase information at checkout for the applicable delivery details.</p> },
      { q: "Is this a one-time payment?", a: <p>Yes. The toolkit is offered as a single payment of <strong>$19 USD, with no subscription</strong>.</p> },
      { q: "Does it guarantee interviews or a job?", a: <p>No. Interviews and employment are not guaranteed. The toolkit helps you improve your professional presentation and organize your job search, but it cannot guarantee recruiter responses, interviews, job offers, or salary increases.</p> },
      { q: "What is the refund policy?", a: <p>Please review the applicable refund terms presented at checkout before purchasing. We do not want to provide inaccurate information about refund eligibility.</p> },
      { q: "Is CareerProSystem affiliated with LinkedIn?", a: <p>No. CareerProSystem provides independent resources and is not sponsored, endorsed, or officially partnered with LinkedIn.</p> },
    ],
    closeTitle: "Ready to put your IT career toolkit to work?",
  },
  es: {
    eyebrow: "LA OFERTA COMPLETA",
    title: "Tu Kit de Carrera IT. Todo en un solo lugar.",
    included: [
      "Guía de Optimización de LinkedIn (24 páginas)",
      "Más de 250 palabras clave de TI",
      "Plantillas de perfil de LinkedIn",
      "Checklist de perfil de 47 puntos",
      "Plan de acción de 30 días",
      "Guiones de contacto con reclutadores",
    ],
    price: "$19 USD",
    terms: "Pago único · Sin suscripción",
    cta: "OBTÉN EL KIT COMPLETO — $19",
    expect: "Kit digital autoguiado. Sin coaching personalizado ni servicios de colocación laboral. No se garantizan resultados de empleo.",
    aside: "Comprar el kit",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Qué incluye?",
        a: (
          <>
            <p>El kit incluye seis recursos:</p>
            <ul>
              <li>Guía de Optimización de LinkedIn (24 páginas)</li>
              <li>Más de 250 palabras clave de TI</li>
              <li>Plantillas de perfil de LinkedIn</li>
              <li>Checklist de perfil de 47 puntos</li>
              <li>Plan de acción de 30 días</li>
              <li>Guiones de contacto con reclutadores</li>
            </ul>
          </>
        ),
      },
      { q: "¿Cómo recibo el kit?", a: <p>El kit es un producto digital. Consulta la información de compra en el checkout para conocer los detalles de entrega aplicables.</p> },
      { q: "¿Es un pago único?", a: <p>Sí. El kit se ofrece con un único pago de <strong>$19 USD, sin suscripción</strong>.</p> },
      { q: "¿Garantiza entrevistas o un empleo?", a: <p>No. No se garantizan entrevistas ni empleo. El kit te ayuda a mejorar tu presentación profesional y a organizar tu búsqueda, pero no puede garantizar respuestas de reclutadores, entrevistas, ofertas de trabajo ni aumentos salariales.</p> },
      { q: "¿Cuál es la política de reembolso?", a: <p>Revisa los términos de reembolso aplicables que se muestran en el checkout antes de comprar. No queremos dar información inexacta sobre la elegibilidad para reembolsos.</p> },
      { q: "¿CareerProSystem está afiliado a LinkedIn?", a: <p>No. CareerProSystem ofrece recursos independientes y no está patrocinado, respaldado ni asociado oficialmente con LinkedIn.</p> },
    ],
    closeTitle: "¿Listo para poner en práctica tu kit de carrera IT?",
  },
};

export default function Purchase() {
  const { lang } = useLang();
  const t = COPY[lang];
  const href = CHECKOUT_URLS[lang];

  return (
    <section className="buy" id="offer" aria-labelledby="buy-title">
      <div className="buy__container">
        <header className="buy__header">
          <p className="buy__eyebrow">{t.eyebrow}</p>
          <h2 id="buy-title" className="buy__title">{t.title}</h2>
        </header>

        <aside className="buy__card" aria-label={t.aside}>
          <ul className="buy__list">
            {t.included.map((item) => (
              <li key={item}>
                <span className="buy__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" width="14" height="14" focusable="false">
                    <path d="M4.5 10.4l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="buy__pricing">
            <p className="buy__price">{t.price}</p>
            <p className="buy__terms">{t.terms}</p>
          </div>
          <a className="buy__cta" href={href} target="_blank" rel="noopener noreferrer">
            {t.cta}
          </a>
          <p className="buy__expect">{t.expect}</p>
        </aside>

        <div className="buy__faq" id="faq">
          <h3 className="buy__faq-title">{t.faqTitle}</h3>
          {/* Native <details> keeps the FAQ keyboard-accessible and readable without JavaScript. */}
          <div className="buy__faq-list">
            {t.faqs.map((item) => (
              <details className="buy__faq-item" key={item.q}>
                <summary className="buy__faq-q">
                  <span>{item.q}</span>
                  <span className="buy__chevron" aria-hidden="true" />
                </summary>
                <div className="buy__faq-a">{item.a}</div>
              </details>
            ))}
          </div>
        </div>

        <div className="buy__close">
          <p className="buy__close-title">{t.closeTitle}</p>
          <a className="buy__cta buy__cta--inline" href={href} target="_blank" rel="noopener noreferrer">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
