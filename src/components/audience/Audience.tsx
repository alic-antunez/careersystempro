import { useLang } from "../../i18n/LanguageContext";
import "./Audience.css";

/*
 * Audience fit + short purpose statement. No creator biography or approved photo exists
 * yet, so nothing personal is claimed. Add verified creator details here once supplied.
 */

const COPY = {
  en: {
    eyebrow: "IS IT FOR YOU?",
    title: "Built for IT professionals ready to take a more structured approach to their careers.",
    intro: "Improve your LinkedIn profile, communicate your technical strengths, and organize your next career steps with one practical toolkit.",
    items: [
      "You work in IT and want to present your experience more clearly.",
      "You're preparing for a new role or career move.",
      "You want help translating technical skills into a stronger LinkedIn profile.",
      "You prefer a practical, self-guided process over scattered advice.",
    ],
    note: "Self-guided digital resources. No coaching, certification, or job-placement services.",
  },
  es: {
    eyebrow: "¿ES PARA TI?",
    title: "Hecho para profesionales de TI listos para abordar su carrera de forma más estructurada.",
    intro: "Mejora tu perfil de LinkedIn, comunica tus fortalezas técnicas y organiza tus próximos pasos profesionales con un solo kit práctico.",
    items: [
      "Trabajas en TI y quieres presentar tu experiencia con más claridad.",
      "Te estás preparando para un nuevo puesto o cambio profesional.",
      "Quieres ayuda para traducir tus habilidades técnicas en un perfil de LinkedIn más sólido.",
      "Prefieres un proceso práctico y autoguiado en lugar de consejos dispersos.",
    ],
    note: "Recursos digitales autoguiados. Sin coaching, certificación ni servicios de colocación laboral.",
  },
};

export default function Audience() {
  const t = COPY[useLang().lang];
  return (
    <section className="aud" aria-labelledby="aud-title">
      <div className="aud__container">
        <div className="aud__intro">
          <p className="aud__eyebrow">{t.eyebrow}</p>
          <h2 id="aud-title" className="aud__title">{t.title}</h2>
          <p className="aud__lead">{t.intro}</p>
        </div>

        <div className="aud__body">
          <ul className="aud__list">
            {t.items.map((item) => (
              <li key={item}>
                <span className="aud__icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" width="14" height="14" focusable="false">
                    <path d="M4.5 10.4l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="aud__note">{t.note}</p>
        </div>
      </div>
    </section>
  );
}
