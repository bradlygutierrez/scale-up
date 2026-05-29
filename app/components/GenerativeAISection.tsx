import type { Language } from "./types";

interface GenerativeAISectionProps {
  language: Language;
}

const stages = {
  en: [
    ["01", "Signal", "Campaign, search, and CRM data are cleaned into one growth view."],
    ["02", "Decision", "AI spots intent, drafts next actions, and routes each lead."],
    ["03", "Execution", "Messages, landing variants, and reports move automatically."],
  ],
  es: [
    ["01", "Señal", "Datos de campañas, búsquedas y CRM se ordenan en una vista de crecimiento."],
    ["02", "Decisión", "La IA detecta intención, redacta acciones y enruta cada lead."],
    ["03", "Ejecución", "Mensajes, variantes de landing y reportes avanzan automáticamente."],
  ],
};

export default function GenerativeAISection({
  language,
}: GenerativeAISectionProps) {
  const isSpanish = language === "es";

  return (
    <section
      id="ia-generativa"
      className="scroll-reveal relative isolate w-full scroll-mt-24 overflow-hidden bg-[var(--color-night)] px-4 py-20 text-[var(--color-paper)] sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="ai-heading"
    >
      <div className="section-orbit" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <p className="section-kicker-dark">
            {isSpanish ? "Motor de IA generativa" : "Generative AI engine"}
          </p>
          <h2
            id="ai-heading"
            className="max-w-3xl text-[clamp(2.2rem,5vw,5rem)] font-black leading-[0.98] text-[var(--color-paper)]"
          >
            {isSpanish
              ? "Automatización que se siente como tener otro equipo."
              : "Automation that feels like another team on payroll."}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted-on-dark)]">
            {isSpanish
              ? "No vendemos IA como truco. La instalamos donde hace dinero: captación, seguimiento, contenido, reportes y decisiones comerciales."
              : "We do not sell AI as a trick. We install it where it makes money: acquisition, follow-up, content, reporting, and commercial decisions."}
          </p>
          <a href="#contacto" className="btn-primary mt-8">
            {isSpanish ? "Implementar IA" : "Implement AI"}
          </a>
        </div>

        <div className="ai-system">
          <div className="ai-system-header">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-lime)]">
                {isSpanish ? "Sistema activo" : "System online"}
              </p>
              <h3 className="mt-2 text-2xl font-black">
                {isSpanish ? "Growth loop" : "Growth loop"}
              </h3>
            </div>
            <div className="signal-stack" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {stages[language].map(([number, title, description]) => (
              <div key={number} className="ai-stage">
                <span className="text-sm font-black text-[var(--color-cyan)]">
                  {number}
                </span>
                <div>
                  <p className="text-lg font-black text-[var(--color-paper)]">
                    {title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--color-muted-on-dark)]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              isSpanish ? "Copy listo" : "Copy ready",
              isSpanish ? "Lead puntuado" : "Lead scored",
              isSpanish ? "Reporte enviado" : "Report sent",
            ].map((item) => (
              <div key={item} className="status-tile">
                <span className="h-2 w-2 rounded-full bg-[var(--color-lime)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
