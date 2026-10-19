import { useLang } from "../../i18n/LanguageContext";
import "./Problem.css";

const COPY = {
  en: {
    eyebrow: "THE CHALLENGE",
    title: "Your experience is real. Does your profile show it?",
    lead: "Years of IT experience can be overlooked when your LinkedIn profile doesn't communicate your strengths clearly.",
    generic: "Hardworking IT Professional",
    cards: [
      { title: "Your IT profile doesn't stand out.", description: "Generic headlines and vague summaries make your technical strengths harder to recognize." },
      { title: "Your technical skills are hard to find.", description: "Relevant technologies and role-specific keywords may be missing or buried in your profile." },
      { title: "You don't know where to start.", description: "Without a clear process, it's difficult to prioritize improvements and take consistent action." },
    ],
  },
  es: {
    eyebrow: "EL DESAFÍO",
    title: "Tu experiencia es real. ¿Tu perfil lo demuestra?",
    lead: "Años de experiencia en TI pueden pasar desapercibidos cuando tu perfil de LinkedIn no comunica con claridad tus fortalezas.",
    generic: "Profesional de TI trabajador",
    cards: [
      { title: "Tu perfil de TI no destaca.", description: "Los titulares genéricos y los resúmenes vagos hacen que tus fortalezas técnicas sean más difíciles de reconocer." },
      { title: "Tus habilidades técnicas son difíciles de encontrar.", description: "Las tecnologías relevantes y las palabras clave por rol pueden faltar o quedar enterradas en tu perfil." },
      { title: "No sabes por dónde empezar.", description: "Sin un proceso claro, es difícil priorizar mejoras y actuar con constancia." },
    ],
  },
};

function ProfileVisual({ label }: { label: string }) {
  return (
    <div className="pv pv--profile" aria-hidden="true">
      <div className="pv__row">
        <span className="pv__avatar" />
        <div className="pv__stack">
          <i className="pv__bar pv__bar--w60" />
          <i className="pv__bar pv__bar--w40 pv__bar--faint" />
        </div>
      </div>
      <span className="pv__chip pv__chip--muted">{label}</span>
      <div className="pv__stack">
        <i className="pv__bar" />
        <i className="pv__bar pv__bar--w80" />
        <i className="pv__bar pv__bar--w60" />
      </div>
    </div>
  );
}

function KeywordsVisual() {
  // Illustrative terms: some are present (orange), others missing or buried (dashed).
  return (
    <div className="pv pv--keywords" aria-hidden="true">
      <div className="pv__chips">
        <span className="pv__chip">Network Security</span>
        <span className="pv__chip pv__chip--missing">Cloud Infrastructure</span>
        <span className="pv__chip">Linux</span>
        <span className="pv__chip pv__chip--missing">Automation</span>
        <span className="pv__chip pv__chip--missing">DevOps</span>
      </div>
      <i className="pv__bar pv__bar--w80 pv__bar--faint" />
    </div>
  );
}

function PlanVisual() {
  return (
    <div className="pv pv--plan" aria-hidden="true">
      <div className="pv__tasks pv__tasks--messy">
        {["w80", "w60", "w80", "w40"].map((w, i) => (
          <div className="pv__task" key={i}>
            <b className="pv__box" />
            <i className={`pv__bar pv__bar--${w}`} />
          </div>
        ))}
      </div>
      <span className="pv__arrow">→</span>
      <div className="pv__tasks pv__tasks--ordered">
        {[1, 2, 3, 4].map((n) => (
          <div className="pv__task" key={n}>
            <b className="pv__num">{n}</b>
            <i className="pv__bar pv__bar--w80" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Problem() {
  const t = COPY[useLang().lang];
  const visuals = [<ProfileVisual label={t.generic} />, <KeywordsVisual />, <PlanVisual />];
  return (
    <section className="problem" aria-labelledby="problem-title">
      <div className="problem__container">
        <header className="problem__header">
          <p className="problem__eyebrow">{t.eyebrow}</p>
          <h2 id="problem-title" className="problem__title">{t.title}</h2>
          <p className="problem__lead">{t.lead}</p>
        </header>

        <ul className="problem__grid">
          {t.cards.map((card, i) => (
            <li className="problem__card" key={card.title}>
              {visuals[i]}
              <h3 className="problem__card-title">{card.title}</h3>
              <p className="problem__card-text">{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
