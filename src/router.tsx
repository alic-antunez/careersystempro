import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from "react";

/*
 * Minimal pathname router. The project has no router dependency, so this keeps the
 * single-page setup and avoids adding one for three static pages. Direct URLs and
 * refresh work because the host rewrites unknown paths to index.html (see vercel.json
 * and Vite's default SPA fallback in dev/preview).
 */

const NAV_EVENT = "cps:navigate";

export function normalizePath(path: string): string {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function usePath(): string {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const sync = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", sync);
    window.addEventListener(NAV_EVENT, sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener(NAV_EVENT, sync);
    };
  }, []);

  return path;
}

/** Internal link: client-side navigation, but still a real <a href> (new tab, copy link, no-JS). */
export function Link({ href, onClick, target, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || target === "_blank") return;
    e.preventDefault();
    window.history.pushState(null, "", href);
    window.dispatchEvent(new Event(NAV_EVENT));
    window.scrollTo(0, 0);
  };
  return <a href={href} target={target} onClick={handleClick} {...rest} />;
}
