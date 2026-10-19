import { useLang } from "../../i18n/LanguageContext";
import "./Method.css";

/*
 * Merged section: the four-step method + two Before/After examples.
 * The examples are ILLUSTRATIVE — not a real profile and not verified results.
 */

const COPY = {
  en: {
    eyebrow: "THE METHOD",
    title: "A clearer way to approach your IT career.",
    lead: "A practical framework to communicate your IT expertise and take consistent action.",
    steps: [
      { name: "OPTIMIZE", title: "Build a stronger LinkedIn profile.", text: "Improve your headline, About section, experience, and skills." },
      { name: "POSITION", title: "Communicate your IT expertise clearly.", text: "Use relevant keywords that reflect your experience and target roles." },
      { name: "CONNECT", title: "Approach recruiters with purpose.", text: "Use outreach templates instead of generic messages." },
      { name: "FOLLOW UP", title: "Turn your plan into action.", text: "Follow a practical 30-day plan and checklist." },
    ],
    compareTitle: "Make your skills, experience, and goals easier to understand.",
    before: "BEFORE",
    after: "AFTER",
    note: "Illustrative examples, not a real profile. Adapt them to your own experience and only describe what you can substantiate.",
    compares: [
      {
        label: "LinkedIn headline",
        before: { text: "IT Professional | Networking | Troubleshooting | Technical Support" },
        after: { text: "Network Engineer | Enterprise Networking | Firewall Operations | Network Troubleshooting" },
      },
      {
        label: "Experience description",
        before: { bullets: ["Responsible for network support.", "Troubleshoot network issues.", "Work with different teams."] },
        after: {
          bullets: [
            "Troubleshoot network connectivity and infrastructure incidents.",
            "Investigate service issues and coordinate resolution with relevant teams.",
            "Document technical findings and contribute to consistent troubleshooting practices.",
          ],
        },
      },
    ],
  },
  es: {
    eyebrow: "EL MÉTODO",
    title: "Una forma más clara de abordar tu carrera en TI.",
    lead: "Un marco práctico para comunicar tu experiencia en TI y actuar con constancia.",
    steps: [
      { name: "OPTIMIZA", title: "Construye un perfil de LinkedIn más sólido.", text: "Mejora tu titular, tu sección Acerca de, tu experiencia y tus habilidades." },
      { name: "POSICIÓNATE", title: "Comunica tu experiencia en TI con claridad.", text: "Usa palabras clave relevantes que reflejen tu experiencia y tus roles objetivo." },
      { name: "CONECTA", title: "Acércate a los reclutadores con propósito.", text: "Usa plantillas de contacto en lugar de mensajes genéricos." },
      { name: "DA SEGUIMIENTO", title: "Convierte tu plan en acción.", text: "Sigue un plan práctico de 30 días y un checklist." },
    ],
    compareTitle: "Haz que tus habilidades, experiencia y metas sean más fáciles de entender.",
    before: "ANTES",
    after: "DESPUÉS",
    note: "Ejemplos ilustrativos, no un perfil real. Adáptalos a tu propia experiencia y describe solo lo que puedas respaldar.",
    compares: [
      {
        label: "Titular de LinkedIn",
        before: { text: "Profesional de TI | Redes | Resolución de problemas | Soporte técnico" },
        after: { text: "Ingeniero de Redes | Redes empresariales | Operación de firewalls | Diagnóstico de redes" },
      },
      {
        label: "Descripción de experiencia",
        before: { bullets: ["Responsable del soporte de red.", "Resolución de problemas de red.", "Trabajo con distintos equipos."] },
        after: {
          bullets: [
            "Diagnóstico de incidentes de conectividad e infraestructura de red.",
            "Investigación de problemas de servicio y coordinación de su resolución con los equipos pertinentes.",
            "Documentación de hallazgos técnicos y contribución a prácticas consistentes de diagnóstico.",
          ],
        },
      },
    ],
  },
};

type Side = { text?: string; bullets?: string[] };

function Body({ c }: { c: Side }) {
  return c.text ? (
    <p className="method__ba-text">{c.text.replace(/ \| /g, "\u00A0| ")}</p>
  ) : (
    <ul className="method__ba-list">
      {c.bullets?.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  );
}

export default function Method() {
  const t = COPY[useLang().lang];
  return (
    <section className="method" aria-labelledby="method-title">
      <div className="method__container">
        <header className="method__header">
          <p className="method__eyebrow">{t.eyebrow}</p>
          <h2 id="method-title" className="method__title">{t.title}</h2>
          <p className="method__lead">{t.lead}</p>
        </header>

        <div className="method__ba">
          <h3 className="method__ba-title">{t.compareTitle}</h3>
          {t.compares.map((g) => (
            <div className="method__ba-group" key={g.label}>
              <p className="method__ba-label">{g.label}</p>
              <div className="method__ba-pair">
                <div className="method__ba-card method__ba-card--before">
                  <p className="method__badge">{t.before}</p>
                  <Body c={g.before} />
                </div>
                <div className="method__ba-card method__ba-card--after">
                  <p className="method__badge">{t.after}</p>
                  <Body c={g.after} />
                </div>
              </div>
            </div>
          ))}
          <p className="method__note">{t.note}</p>
        </div>

        <ol className="method__steps">
          {t.steps.map((s, i) => (
            <li className="method__step" key={s.name}>
              <div className="method__marker">
                <span className="method__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="method__name">{s.name}</span>
              </div>
              <h3 className="method__step-title">{s.title}</h3>
              <p className="method__step-text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
