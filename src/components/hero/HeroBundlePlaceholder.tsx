import { useLang } from "../../i18n/LanguageContext";

/**
 * TEMPORARY PLACEHOLDER — not a screenshot of the real product files.
 *
 * Replace this component with the final bundle mockup image:
 *   1. Put the file in src/assets/ (e.g. hero-bundle.webp).
 *   2. In Hero.tsx, swap <HeroBundlePlaceholder /> for
 *      <img src={heroBundle} alt="..." width={W} height={H} /> inside
 *      .hero__visual, keeping the same aspect ratio (5 / 4) to avoid layout shift.
 *   3. Delete this file and its .bundle-* rules in Hero.css.
 */
const COPY = {
  en: {
    aria: "Illustration of the digital toolkit: career guide, templates, checklist and 30-day planner (temporary placeholder)",
    templates: "TEMPLATES",
    guide: "GUIDE",
    title: ["IT Career", "Toolkit"],
    sub: "LinkedIn Optimization",
    checklist: "CHECKLIST",
    plan: "30-DAY PLAN",
  },
  es: {
    aria: "Ilustración del kit digital: guía de carrera, plantillas, checklist y planificador de 30 días (marcador temporal)",
    templates: "PLANTILLAS",
    guide: "GUÍA",
    title: ["Kit de Carrera", "IT"],
    sub: "Optimización de LinkedIn",
    checklist: "CHECKLIST",
    plan: "PLAN DE 30 DÍAS",
  },
};

export default function HeroBundlePlaceholder() {
  const t = COPY[useLang().lang];
  return (
    <div className="bundle" role="img" aria-label={t.aria}>
      <div className="bundle__card bundle__card--templates" aria-hidden="true">
        <span className="bundle__tag">{t.templates}</span>
        <i className="bundle__line" /><i className="bundle__line bundle__line--short" />
        <i className="bundle__line" /><i className="bundle__line bundle__line--short" />
      </div>

      <div className="bundle__card bundle__card--guide" aria-hidden="true">
        <span className="bundle__tag">{t.guide}</span>
        <strong className="bundle__guide-title">{t.title[0]}<br />{t.title[1]}</strong>
        <i className="bundle__rule" />
        <span className="bundle__guide-sub">{t.sub}</span>
      </div>

      <div className="bundle__card bundle__card--checklist" aria-hidden="true">
        <span className="bundle__tag">{t.checklist}</span>
        {[0, 1, 2, 3].map((i) => (
          <div className="bundle__check-row" key={i}>
            <b className="bundle__box" /><i className="bundle__line" />
          </div>
        ))}
      </div>

      <div className="bundle__card bundle__card--planner" aria-hidden="true">
        <span className="bundle__tag">{t.plan}</span>
        <div className="bundle__grid">
          {Array.from({ length: 15 }, (_, i) => (
            <b key={i} className={i < 5 ? "is-done" : undefined} />
          ))}
        </div>
      </div>
    </div>
  );
}
