'use client';

import { useState } from "react";

type Language = "en" | "es";

interface MainNavbarProps {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export default function MainNavbar({ language, setLanguage }: MainNavbarProps) {
  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const closeMenu = () => setOpen(false);

  const navItems = [
    { href: "#servicios", labelEn: "Services", labelEs: "Servicios" },
    { href: "#ia-generativa", labelEn: "Gen AI", labelEs: "IA Generativa" },
    { href: "#contacto", labelEn: "Contact", labelEs: "Contacto" },
  ];

  return (
    <nav className="w-full bg-[#020617] text-white sticky top-0 z-40 backdrop-blur-sm bg-opacity-90">
      <div className="max-w-6xl mx-auto px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center h-[4rem] p-5">
            <div className="rotate-90">
              <img
                src="/LogoClaro.png"
                className="w-[8rem] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden md:flex gap-4 items-center text-sm md:text-base font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="px-3 py-2 rounded-full hover:bg-slate-800 transition"
                >
                  {language === "en" ? item.labelEn : item.labelEs}
                </a>
              </li>
            ))}
          </ul>

          <button className="hidden sm:inline-flex bg-[#1D4ED8] hover:bg-blue-500 text-sm md:text-base font-semibold px-4 py-2 rounded-full transition">
            {language === "en" ? "Book a call" : "Agenda una llamada"}
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs md:text-sm">
            <span
              className={language === "es" ? "text-blue-500" : "text-gray-400"}
            >
              ES
            </span>
            <button
              onClick={toggleLanguage}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300
              ${language === "en" ? "bg-[#1D4ED8]" : "bg-gray-500"}`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md
                transition-transform duration-300
                ${language === "en" ? "translate-x-5" : ""}`}
              />
            </button>
            <span
              className={language === "en" ? "text-blue-500" : "text-gray-400"}
            >
              EN
            </span>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-700 hover:bg-slate-800 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <span className="block w-4 h-[2px] bg-white rounded-full relative">
              <span
                className={`block w-4 h-[2px] bg-white rounded-full absolute -top-1.5 transition-transform ${open ? "translate-y-1.5 rotate-45" : ""
                  }`}
              />
              <span
                className={`block w-4 h-[2px] bg-white rounded-full absolute top-1.5 transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-[#020617] bg-opacity-95 animate-fade-in-down">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-2 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition"
                  >
                    {language === "en" ? item.labelEn : item.labelEs}
                  </a>
                </li>
              ))}
            </ul>

            <button className="w-full inline-flex justify-center bg-[#1D4ED8] hover:bg-blue-500 text-sm font-semibold px-4 py-2 rounded-full transition">
              {language === "en" ? "Book a call" : "Agenda una llamada"}
            </button>

            <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800 mt-2">
              <div className="flex items-center gap-2">
                <span
                  className={
                    language === "es" ? "text-blue-500" : "text-gray-400"
                  }
                >
                  ES
                </span>
                <button
                  onClick={toggleLanguage}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300
                  ${language === "en" ? "bg-[#1D4ED8]" : "bg-gray-500"}`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md
                    transition-transform duration-300
                    ${language === "en" ? "translate-x-5" : ""}`}
                  />
                </button>
                <span
                  className={
                    language === "en" ? "text-blue-500" : "text-gray-400"
                  }
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}