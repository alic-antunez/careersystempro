import { useLang } from "../../i18n/LanguageContext";
import {
  ChecklistPreview,
  GuidePreview,
  KeywordsPreview,
  PlanPreview,
  ScriptPreview,
  TemplatesPreview,
  type PreviewLabels,
} from "./ToolkitPreviews";
import "./Toolkit.css";

const COPY = {
  en: {
    eyebrow: "INSIDE THE TOOLKIT",
    title: "Six resources. One organized toolkit.",
    lead: "Practical resources to strengthen your LinkedIn profile and organize your next career moves.",
    note: "Previews are illustrative and not screenshots of the actual files.",
    preview: {
      guide: "GUIDE",
      coverTitle: ["LinkedIn", "Optimization"],
      more: "+ more",
      fields: ["Headline", "About", "Experience"],
      weeks: ["Week 1", "Week 2", "Week 3", "Week 4"],
      example: "Example message",
      msg: "Hi [Name], I'm an IT professional focused on [specialty]. I'd be glad to connect and learn more about opportunities related to [role].",
    } as PreviewLabels,
    items: [
      { title: "LinkedIn Optimization Guide", description: "A section-by-section guide to improving your headline, About section, experience, and skills.", format: "PDF guide · 24 pages" },
      { title: "250+ IT Keywords", description: "Explore technical skills and role-specific terms to tailor your profile to the positions you want.", format: "Keyword reference" },
      { title: "LinkedIn Profile Templates", description: "Ready-to-adapt structures for writing your headline, About section, and experience descriptions.", format: "Reusable templates" },
      { title: "47-Point Profile Checklist", description: "Audit your profile section by section and track which improvements still need attention.", format: "47-point checklist" },
      { title: "30-Day Action Plan", description: "A structured 30-day roadmap to organize profile improvements and consistent job-search activities.", format: "30-day plan" },
      { title: "Recruiter Outreach Scripts", description: "Adaptable message templates for introducing yourself to recruiters and starting relevant professional conversations.", format: "Message templates" },
    ],
  },
  es: {
    eyebrow: "DENTRO DEL KIT",
    title: "Seis recursos. Un kit organizado.",
    lead: "Recursos prácticos para fortalecer tu perfil de LinkedIn y organizar tus próximos pasos profesionales.",
    note: "Las vistas previas son ilustrativas, no capturas de los archivos reales.",
    preview: {
      guide: "GUÍA",
      coverTitle: ["Optimización", "de LinkedIn"],
      more: "+ más",
      fields: ["Titular", "Acerca de", "Experiencia"],
      weeks: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      example: "Mensaje de ejemplo",
      msg: "Hola [Nombre], soy profesional de TI especializado en [especialidad]. Me encantaría conectar y conocer más sobre oportunidades relacionadas con [puesto].",
    } as PreviewLabels,
    items: [
      { title: "Guía de Optimización de LinkedIn", description: "Una guía sección por sección para mejorar tu titular, tu sección Acerca de, tu experiencia y tus habilidades.", format: "Guía en PDF · 24 páginas" },
      { title: "Más de 250 palabras clave de TI", description: "Explora habilidades técnicas y términos específicos por rol para adaptar tu perfil a los puestos que quieres.", format: "Referencia de palabras clave" },
      { title: "Plantillas de perfil de LinkedIn", description: "Estructuras listas para adaptar y escribir tu titular, tu sección Acerca de y las descripciones de tu experiencia.", format: "Plantillas reutilizables" },
      { title: "Checklist de perfil de 47 puntos", description: "Audita tu perfil sección por sección y controla qué mejoras aún necesitan atención.", format: "Checklist de 47 puntos" },
      { title: "Plan de acción de 30 días", description: "Una hoja de ruta estructurada de 30 días para organizar las mejoras de tu perfil y tus actividades constantes de búsqueda de empleo.", format: "Plan de 30 días" },
      { title: "Guiones de contacto con reclutadores", description: "Plantillas de mensajes adaptables para presentarte a reclutadores e iniciar conversaciones profesionales relevantes.", format: "Plantillas de mensajes" },
    ],
  },
};

export default function Toolkit() {
  const t = COPY[useLang().lang];
  // Each preview is a TEMPORARY PLACEHOLDER (see ToolkitPreviews.tsx).
  // Replace the entry's preview with an authentic asset when available.
  const previews = [
    <GuidePreview l={t.preview} />,
    <KeywordsPreview l={t.preview} />,
    <TemplatesPreview l={t.preview} />,
    <ChecklistPreview />,
    <PlanPreview l={t.preview} />,
    <ScriptPreview l={t.preview} />,
  ];
  return (
    <section className="tk" aria-labelledby="toolkit-title">
      <div className="tk__container">
        <header className="tk__header">
          <p className="tk__eyebrow">{t.eyebrow}</p>
          <h2 id="toolkit-title" className="tk__title">{t.title}</h2>
          <p className="tk__lead">{t.lead}</p>
        </header>

        <ul className="tk__grid">
          {t.items.map((item, i) => (
            <li className="tk__card" key={item.title}>
              <div className="tk__preview">{previews[i]}</div>
              <p className="tk__format">{item.format}</p>
              <h3 className="tk__card-title">{item.title}</h3>
              <p className="tk__card-text">{item.description}</p>
            </li>
          ))}
        </ul>
        <p className="tk__note">{t.note}</p>
      </div>
    </section>
  );
}
