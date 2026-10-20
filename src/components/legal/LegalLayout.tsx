import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { LEGAL_INFO, LEGAL_LAST_UPDATED } from "../../config/legal";
import { Link } from "../../router";
import Footer from "../footer/Footer";
import "./Legal.css";

type Props = { title: string; description: string; updated?: string; children: ReactNode };

/** Sets title, description and language for a page, restoring the previous values on leave. */
function usePageMeta(title: string, description: string) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prev = { title: document.title, lang: root.lang, description: meta?.content };

    document.title = title;
    root.lang = "en"; // legal content is English only
    if (meta) meta.content = description;

    return () => {
      document.title = prev.title;
      root.lang = prev.lang;
      if (meta && prev.description !== undefined) meta.content = prev.description;
    };
  }, [title, description]);
}

export default function LegalLayout({ title, description, updated = LEGAL_LAST_UPDATED, children }: Props) {
  usePageMeta(`${title} | CareerSystemPro`, description);

  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <>
      <main className="legal" id="main">
        <div className="legal__container">
          <Link href="/" className="legal__back">
            <span aria-hidden="true">←</span> Back to homepage
          </Link>
          <article className="legal__doc">
            <h1 ref={headingRef} tabIndex={-1} className="legal__title">{title}</h1>
            <p className="legal__updated">Last updated: {updated}</p>
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

/**
 * A seller detail that comes from config/legal.ts. While empty it renders a clearly marked
 * placeholder (never invented data); once filled it renders the real value.
 */
export function Field({ name, placeholder }: { name: keyof typeof LEGAL_INFO; placeholder: string }) {
  const value = LEGAL_INFO[name].trim();
  if (!value) {
    return <mark className="legal__ph" data-placeholder="true">{placeholder}</mark>;
  }
  return name.endsWith("Email") ? <a href={`mailto:${value}`}>{value}</a> : <>{value}</>;
}
