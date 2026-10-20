import { PLACEHOLDER_TESTIMONIALS, VERIFIED_TESTIMONIALS, type Testimonial } from "../../config/testimonials";
import { useLang } from "../../i18n/LanguageContext";
import "./Testimonials.css";

const COPY = {
  en: {
    eyebrow: "TESTIMONIALS",
    title: "What IT Professionals Are Saying",
    preview: "Development preview: placeholder content, not real customer feedback. Hidden in production.",
    badge: "Placeholder",
  },
  es: {
    eyebrow: "TESTIMONIOS",
    title: "Lo que dicen los profesionales de TI",
    preview: "Vista previa de desarrollo: contenido de ejemplo, no son opiniones reales. Oculto en producción.",
    badge: "Ejemplo",
  },
};

function QuoteIcon() {
  return (
    <svg className="tst__icon" viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M13 6C7.5 8 4 12.6 4 19v7h9v-9H8.6c.3-3 2.2-5.3 5.4-6.6zm15 0c-5.5 2-9 6.6-9 13v7h9v-9h-4.4c.3-3 2.2-5.3 5.4-6.6z"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true" focusable="false">
      <circle cx="12" cy="8.5" r="4" fill="currentColor" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z" fill="currentColor" />
    </svg>
  );
}

export function TestimonialCard({
  item,
  index,
  placeholder,
  badge,
}: {
  item: Testimonial;
  index: number;
  placeholder?: boolean;
  badge?: string;
}) {
  // Verified entries without an authorized photo show no image. Only the dev preview gets a
  // neutral silhouette so the layout can be reviewed.
  const showAvatar = item.avatar || placeholder;

  return (
    <figure className={`tst__card${placeholder ? " tst__card--placeholder" : ""}`}>
      <span className="tst__num" aria-hidden="true">{index + 1}</span>
      {placeholder && <span className="tst__badge">{badge}</span>}

      <div className="tst__bubble">
        <QuoteIcon />
        <blockquote className="tst__quote">
          <p>{item.quote}</p>
        </blockquote>
      </div>

      {showAvatar && (
        <div className="tst__ring">
          <div className="tst__dash">
            {item.avatar ? (
              <img className="tst__avatar" src={item.avatar.src} alt={item.avatar.alt} width="96" height="96" loading="lazy" />
            ) : (
              <span className="tst__avatar tst__avatar--empty"><PersonIcon /></span>
            )}
          </div>
        </div>
      )}

      <figcaption className="tst__who">
        {item.name && <span className="tst__name">{item.name}</span>}
        <span className="tst__role">{item.role}</span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const t = COPY[useLang().lang];

  // Production: verified testimonials only. Development: placeholders are appended as a labeled preview.
  const items: { item: Testimonial; placeholder: boolean }[] = [
    ...VERIFIED_TESTIMONIALS.map((item) => ({ item, placeholder: false })),
    ...PLACEHOLDER_TESTIMONIALS.map((item) => ({ item, placeholder: true })),
  ].slice(0, 3);
  if (items.length === 0) return null;

  const hasPlaceholders = items.some((i) => i.placeholder);

  return (
    <section className="tst" aria-labelledby="tst-title">
      <div className="tst__container">
        <header className="tst__header">
          <p className="tst__eyebrow">{t.eyebrow}</p>
          <h2 id="tst-title" className="tst__title">{t.title}</h2>
          {hasPlaceholders && <p className="tst__preview" role="note">{t.preview}</p>}
        </header>

        <ul className="tst__grid" style={{ ["--tst-cols" as string]: items.length }}>
          {items.map(({ item, placeholder }, i) => (
            <li key={item.id}>
              <TestimonialCard item={item} index={i} placeholder={placeholder} badge={t.badge} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
