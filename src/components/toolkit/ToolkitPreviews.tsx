/**
 * TEMPORARY PLACEHOLDERS — replace with authentic product previews.
 *
 * No real product files existed in the repository when this was written, so every
 * preview below is an illustrative CSS mockup, NOT a screenshot of the actual files.
 * To swap one for a real asset, edit only the matching entry's `preview` in
 * Toolkit.tsx (e.g. `<img src={...} alt="..." width={..} height={..} />` inside
 * a `.tk__preview` wrapper) and delete the component here.
 */

export type PreviewLabels = {
  guide: string;
  coverTitle: [string, string];
  more: string;
  fields: [string, string, string];
  weeks: [string, string, string, string];
  example: string;
  msg: string;
};

export function GuidePreview({ l }: { l: PreviewLabels }) {
  return (
    <div className="tkp tkp--guide" aria-hidden="true">
      <div className="tkp__cover">
        <b className="tkp__tag">{l.guide}</b>
        <strong className="tkp__cover-title">{l.coverTitle[0]}<br />{l.coverTitle[1]}</strong>
        <i className="tkp__rule" />
      </div>
      <div className="tkp__page">
        <i className="tkp__bar tkp__bar--dark tkp__bar--w60" />
        <i className="tkp__bar" /><i className="tkp__bar tkp__bar--w80" /><i className="tkp__bar" />
        <i className="tkp__bar tkp__bar--w50" />
      </div>
    </div>
  );
}

export function KeywordsPreview({ l }: { l: PreviewLabels }) {
  const terms = ["Networking", "Cloud Computing", "Cybersecurity", "Cisco", "Azure", "Network Security"];
  return (
    <div className="tkp tkp--keywords" aria-hidden="true">
      <div className="tkp__chips">
        {terms.map((term) => (
          <span className="tkp__chip" key={term}>{term}</span>
        ))}
        <span className="tkp__chip tkp__chip--more">{l.more}</span>
      </div>
    </div>
  );
}

export function TemplatesPreview({ l }: { l: PreviewLabels }) {
  return (
    <div className="tkp tkp--templates" aria-hidden="true">
      {l.fields.map((f) => (
        <div className="tkp__field" key={f}>
          <b className="tkp__label">{f}</b>
          <i className="tkp__input" />
        </div>
      ))}
    </div>
  );
}

export function ChecklistPreview() {
  const rows = [
    { done: true, w: "w80" },
    { done: true, w: "w60" },
    { done: false, w: "w80" },
    { done: false, w: "w50" },
  ];
  return (
    <div className="tkp tkp--checklist" aria-hidden="true">
      {rows.map((r, i) => (
        <div className="tkp__row" key={i}>
          <b className={`tkp__box${r.done ? " is-done" : ""}`} />
          <i className={`tkp__bar tkp__bar--${r.w}`} />
        </div>
      ))}
    </div>
  );
}

export function PlanPreview({ l }: { l: PreviewLabels }) {
  return (
    <div className="tkp tkp--plan" aria-hidden="true">
      {l.weeks.map((w, i) => (
        <div className="tkp__week" key={w}>
          <b className="tkp__label">{w}</b>
          <i className={`tkp__bar${i === 0 ? " tkp__bar--accent" : ""}`} />
          <i className="tkp__bar tkp__bar--w60" />
        </div>
      ))}
    </div>
  );
}

export function ScriptPreview({ l }: { l: PreviewLabels }) {
  return (
    <div className="tkp tkp--script" aria-hidden="true">
      <div className="tkp__msg">
        <b className="tkp__label tkp__label--dark">{l.example}</b>
        <p>{l.msg}</p>
      </div>
    </div>
  );
}
