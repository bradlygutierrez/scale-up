import type { Language } from "./types";

interface FooterProps {
  language: Language;
}

const footerServices = [
  { labelEn: "Conversion websites", labelEs: "Sitios de conversión" },
  { labelEn: "SME systems", labelEs: "Sistemas para PYMEs" },
  { labelEn: "Sales funnels", labelEs: "Funnels de venta" },
  { labelEn: "AI outreach", labelEs: "Prospección con IA" },
];

export default function Footer({ language }: FooterProps) {
  const isSpanish = language === "es";

  return (
    <footer className="w-full bg-[var(--color-night)] px-4 py-12 text-[var(--color-muted-on-dark)] sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-[var(--color-line-on-dark)] pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-black text-[var(--color-paper)]">
            Scale Up <span className="text-[var(--color-cyan)]">AI</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-6">
            {isSpanish
              ? "Sistemas web, marketing y automatización para PYMEs que quieren crecer con más precisión."
              : "Web systems, marketing, and automation for SMEs that want to grow with more precision."}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-paper)]">
            {isSpanish ? "Servicios" : "Services"}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerServices.map((service) => (
              <li key={service.labelEn}>
                <a
                  href="#servicios"
                  className="inline-flex rounded-sm transition hover:text-[var(--color-paper)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cyan)]"
                >
                  {isSpanish ? service.labelEs : service.labelEn}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-paper)]">
            {isSpanish ? "Contacto" : "Contact"}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                className="hover:text-[var(--color-paper)]"
                href="mailto:Scaleup-AI@outlook.com"
              >
                Scaleup-AI@outlook.com
              </a>
            </li>
            <li>Masaya, Nicaragua</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 text-xs text-[var(--color-muted-on-dark)] md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} Scale Up AI.{" "}
          {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
        </span>
        <span>
          {isSpanish
            ? "Hecho para empresas que quieren moverse más rápido."
            : "Built for companies that want to move faster."}
        </span>
      </div>
    </footer>
  );
}
