import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { acceptAll, closePreferences, openPreferences, rejectNonEssential, savePreferences, useConsent } from "../../consent/consent";
import { useLang } from "../../i18n/LanguageContext";
import { Link } from "../../router";
import "./Consent.css";

const COPY = {
  en: {
    bannerLabel: "Privacy choices",
    title: "Your privacy choices",
    text: "We use optional analytics to understand how this site is used, including clicks on purchase buttons. We don't currently use advertising tools. Essential features always work, and you can change your choice at any time.",
    notice: "Privacy Notice",
    acceptAll: "Accept All",
    reject: "Reject Non-Essential",
    customize: "Customize Preferences",
    dialogTitle: "Privacy preferences",
    dialogIntro: "Choose which optional technologies we may use. Your choice is saved in this browser.",
    essential: "Essential",
    essentialText: "Needed for the site to work, such as remembering your language and this choice. Always on.",
    analytics: "Analytics",
    analyticsText: "Google Analytics 4 and Vercel Analytics show us which pages and buttons are used. Google Analytics sets cookies in your browser.",
    advertising: "Advertising",
    advertisingText: "We don't currently use advertising or retargeting tools. This choice will apply to any we add in the future.",
    gpc: "Your browser is sending a Global Privacy Control signal, so advertising stays off.",
    save: "Save preferences",
    close: "Close",
    on: "On",
    off: "Off",
    alwaysOn: "Always on",
  },
  es: {
    bannerLabel: "Opciones de privacidad",
    title: "Tus opciones de privacidad",
    text: "Usamos analítica opcional para entender cómo se usa este sitio, incluidos los clics en los botones de compra. Actualmente no usamos herramientas de publicidad. Las funciones esenciales siempre funcionan y puedes cambiar tu elección en cualquier momento.",
    notice: "Aviso de privacidad",
    acceptAll: "Aceptar todo",
    reject: "Rechazar no esenciales",
    customize: "Personalizar preferencias",
    dialogTitle: "Preferencias de privacidad",
    dialogIntro: "Elige qué tecnologías opcionales podemos usar. Tu elección se guarda en este navegador.",
    essential: "Esenciales",
    essentialText: "Necesarias para que el sitio funcione, como recordar tu idioma y esta elección. Siempre activas.",
    analytics: "Analítica",
    analyticsText: "Google Analytics 4 y Vercel Analytics nos muestran qué páginas y botones se usan. Google Analytics guarda cookies en tu navegador.",
    advertising: "Publicidad",
    advertisingText: "Actualmente no usamos herramientas de publicidad ni de remarketing. Esta elección se aplicará a las que agreguemos en el futuro.",
    gpc: "Tu navegador envía la señal Global Privacy Control, por lo que la publicidad permanece desactivada.",
    save: "Guardar preferencias",
    close: "Cerrar",
    on: "Activado",
    off: "Desactivado",
    alwaysOn: "Siempre activas",
  },
};

type Strings = (typeof COPY)["en"];

function Switch({ id, label, text, checked, disabled, onChange, state }: {
  id: string; label: string; text: string; checked: boolean; disabled?: boolean; onChange?: (v: boolean) => void; state: string;
}) {
  return (
    <div className="cs__row">
      <div className="cs__row-text">
        <label htmlFor={id} className="cs__row-title">{label}</label>
        <p id={`${id}-desc`} className="cs__row-desc">{text}</p>
      </div>
      <div className="cs__switch">
        <input
          id={id}
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          aria-describedby={`${id}-desc`}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="cs__state" aria-hidden="true">{state}</span>
      </div>
    </div>
  );
}

function PreferencesDialog({ t }: { t: Strings }) {
  const consent = useConsent();
  const [analytics, setAnalytics] = useState(consent.analytics);
  const [advertising, setAdvertising] = useState(consent.advertising);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Focus the dialog on open, lock page scroll, and put focus back where it was on close
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    titleRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      if (opener && document.contains(opener)) opener.focus();
    };
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      closePreferences();
      return;
    }
    if (e.key !== "Tab") return;
    const items = dialogRef.current?.querySelectorAll<HTMLElement>('button, input:not([disabled]), a[href], [tabindex="0"]');
    if (!items || items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === titleRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="cs__overlay" onMouseDown={(e) => e.target === e.currentTarget && closePreferences()}>
      <div
        ref={dialogRef}
        className="cs__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cs-dialog-title"
        onKeyDown={onKeyDown}
      >
        <h2 id="cs-dialog-title" className="cs__dialog-title" ref={titleRef} tabIndex={-1}>{t.dialogTitle}</h2>
        <p className="cs__dialog-intro">{t.dialogIntro}</p>

        <Switch id="cs-essential" label={t.essential} text={t.essentialText} checked disabled state={t.alwaysOn} />
        <Switch
          id="cs-analytics"
          label={t.analytics}
          text={t.analyticsText}
          checked={analytics}
          onChange={setAnalytics}
          state={analytics ? t.on : t.off}
        />
        <Switch
          id="cs-advertising"
          label={t.advertising}
          text={consent.gpc ? `${t.advertisingText} ${t.gpc}` : t.advertisingText}
          checked={consent.gpc ? false : advertising}
          disabled={consent.gpc}
          onChange={setAdvertising}
          state={consent.gpc || !advertising ? t.off : t.on}
        />

        <div className="cs__actions">
          <button type="button" className="cs__btn cs__btn--primary" onClick={() => savePreferences({ analytics, advertising })}>{t.save}</button>
          <button type="button" className="cs__btn cs__btn--primary" onClick={() => acceptAll("preferences")}>{t.acceptAll}</button>
          <button type="button" className="cs__btn cs__btn--secondary" onClick={() => rejectNonEssential("preferences")}>{t.reject}</button>
        </div>
        <button type="button" className="cs__close" onClick={closePreferences}>{t.close}</button>
      </div>
    </div>
  );
}

export default function ConsentUI() {
  const t = COPY[useLang().lang];
  const { decided, prefsOpen } = useConsent();

  return (
    <>
      {!decided && !prefsOpen && (
        <section className="cs__banner" role="region" aria-label={t.bannerLabel}>
          <div className="cs__banner-inner">
            <div className="cs__banner-text">
              <h2 className="cs__banner-title">{t.title}</h2>
              <p>
                {t.text} <Link href="/privacy-policy" className="cs__link">{t.notice}</Link>
              </p>
            </div>
            <div className="cs__banner-actions">
              <button type="button" className="cs__btn cs__btn--primary" onClick={() => acceptAll("banner")}>{t.acceptAll}</button>
              <button type="button" className="cs__btn cs__btn--secondary" onClick={() => rejectNonEssential("banner")}>{t.reject}</button>
              <button type="button" className="cs__btn cs__btn--ghost" onClick={openPreferences}>{t.customize}</button>
            </div>
          </div>
        </section>
      )}
      {prefsOpen && <PreferencesDialog t={t} />}
    </>
  );
}
