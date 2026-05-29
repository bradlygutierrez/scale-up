'use client';

import Image from "next/image";
import { useState, type Dispatch, type SetStateAction } from "react";
import type { Language } from "./types";

interface MainNavbarProps {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

const navItems = [
  { href: "#servicios", labelEn: "Services", labelEs: "Servicios" },
  { href: "#ia-generativa", labelEn: "AI Engine", labelEs: "Motor IA" },
  { href: "#contacto", labelEn: "Contact", labelEs: "Contacto" },
];

export default function MainNavbar({ language, setLanguage }: MainNavbarProps) {
  const [open, setOpen] = useState(false);

  const isSpanish = language === "es";
  const toggleLanguage = () =>
    setLanguage((previous) => (previous === "en" ? "es" : "en"));
  const closeMenu = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--color-line-on-dark)] bg-[color:var(--color-nav)]/95 text-[var(--color-paper)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          aria-label="Scale Up AI home"
          className="flex h-12 w-[154px] items-center overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cyan)]"
          onClick={closeMenu}
        >
          <Image
            src="/LogoClaro.png"
            alt="Scale Up AI"
            width={2481}
            height={3508}
            priority
            className="h-[154px] w-[154px] -translate-y-px rotate-90 object-contain"
            sizes="154px"
          />
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {isSpanish ? item.labelEs : item.labelEn}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a className="nav-cta hidden md:inline-flex" href="#contacto">
            {isSpanish ? "Agendar" : "Book call"}
          </a>

          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-muted-on-dark)] sm:flex">
            <span className={isSpanish ? "text-[var(--color-paper)]" : ""}>
              ES
            </span>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={
                isSpanish ? "Switch language to English" : "Cambiar idioma a español"
              }
              aria-pressed={language === "en"}
              className="language-toggle"
            >
              <span
                className={`language-thumb ${
                  language === "en" ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span className={!isSpanish ? "text-[var(--color-paper)]" : ""}>
              EN
            </span>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-line-on-dark)] text-[var(--color-paper)] transition hover:border-[var(--color-cyan-muted)] hover:bg-[var(--color-ink-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cyan)] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[var(--color-line-on-dark)] bg-[var(--color-nav)] px-4 py-5 shadow-2xl md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-semibold text-[var(--color-paper)] transition hover:bg-[var(--color-ink-soft)]"
              >
                {isSpanish ? item.labelEs : item.labelEn}
              </a>
            ))}

            <a className="nav-cta justify-center" href="#contacto" onClick={closeMenu}>
              {isSpanish ? "Agendar llamada" : "Book a call"}
            </a>

            <button
              type="button"
              onClick={toggleLanguage}
              className="flex h-11 items-center justify-center rounded-lg border border-[var(--color-line-on-dark)] text-sm font-bold text-[var(--color-paper)]"
            >
              {isSpanish ? "Switch to English" : "Cambiar a español"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
