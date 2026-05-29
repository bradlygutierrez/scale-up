'use client';

import { useEffect, useState } from "react";
import FirstView from "../../components/FirstView";
import MainNavbar from "../../components/MainNavbar";
import ServicesSection from "../../components/ServicesSection";
import GenerativeAISection from "../../components/GenerativeAISection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import type { Language } from "../../components/types";

export default function MainPage() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("lang", language);
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.add("js");

    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);

  return (
    <main className="page-enter flex min-h-screen w-full flex-col bg-[var(--color-surface)] text-[var(--color-ink)]">
      <MainNavbar language={language} setLanguage={setLanguage} />

      <FirstView language={language} />
      <ServicesSection language={language} />
      <GenerativeAISection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </main>
  );
}
