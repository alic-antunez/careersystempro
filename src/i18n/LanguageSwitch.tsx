import { useLang } from "./LanguageContext";
import "./LanguageSwitch.css";

export default function LanguageSwitch() {
  const { lang, setLang } = useLang();
  const next = lang === "en" ? "es" : "en";

  return (
    <button
      type="button"
      className="ls"
      role="switch"
      aria-checked={lang === "es"}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      onClick={() => setLang(next)}
    >
      <span className={`ls__opt${lang === "en" ? " is-on" : ""}`}>EN</span>
      <span className={`ls__opt${lang === "es" ? " is-on" : ""}`}>ES</span>
    </button>
  );
}
