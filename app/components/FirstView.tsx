import type { Language } from "./types";

interface FirstViewProps {
  language: Language;
}

const copy = {
  en: {
    badge: "AI growth studio for serious SMEs",
    eyebrow: "Build, automate, convert",
    title: "A sharper operating system for your next stage of growth.",
    lead:
      "Scale Up AI designs high-performance websites, sales funnels, and AI automations that turn scattered marketing into a repeatable revenue engine.",
    primary: "Book a strategy call",
    secondary: "See the system",
    proofLabel: "Built for teams that need traction, not theatre",
    proof: [
      ["50+", "active clients supported"],
      ["200%", "average campaign lift"],
      ["24/7", "automation coverage"],
    ],
    panelTitle: "Live Growth Console",
    panelSubtitle: "Qualified lead flow",
    panelStatus: "Pipeline healthy",
    workflow: ["Traffic captured", "AI sequence drafted", "CRM updated"],
    insightTitle: "Next best move",
    insight:
      "Shift budget toward high-intent search terms and trigger a same-day WhatsApp follow-up for warm leads.",
    chart: ["SEO", "Ads", "Email", "CRM"],
  },
  es: {
    badge: "Estudio de crecimiento con IA para PYMEs serias",
    eyebrow: "Construye, automatiza, convierte",
    title: "Un sistema más preciso para la próxima etapa de tu negocio.",
    lead:
      "Scale Up AI diseña sitios de alto rendimiento, funnels de venta y automatizaciones con IA que convierten marketing disperso en una máquina repetible de ingresos.",
    primary: "Agendar llamada estratégica",
    secondary: "Ver el sistema",
    proofLabel: "Hecho para equipos que necesitan tracción, no teatro",
    proof: [
      ["50+", "clientes activos apoyados"],
      ["200%", "mejora promedio en campañas"],
      ["24/7", "cobertura automatizada"],
    ],
    panelTitle: "Consola de Crecimiento",
    panelSubtitle: "Flujo de leads calificados",
    panelStatus: "Pipeline saludable",
    workflow: ["Tráfico capturado", "Secuencia IA redactada", "CRM actualizado"],
    insightTitle: "Siguiente mejor acción",
    insight:
      "Mover presupuesto hacia búsquedas de alta intención y activar seguimiento por WhatsApp el mismo día.",
    chart: ["SEO", "Ads", "Email", "CRM"],
  },
};

export default function FirstView({ language }: FirstViewProps) {
  const content = copy[language];

  return (
    <section
      id="inicio"
      className="hero-stage relative isolate flex min-h-[calc(100svh-76px)] w-full scroll-mt-24 overflow-hidden px-4 py-16 text-[var(--color-on-dark)] sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="hero-mesh" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-lg border border-[var(--color-cyan-muted)] bg-[color:var(--color-ink-soft)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-cyan)] shadow-[0_0_40px_rgba(58,204,229,0.14)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-lime)] shadow-[0_0_18px_var(--color-lime)]" />
            {content.badge}
          </p>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-lime)]">
            {content.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="max-w-4xl text-[clamp(2.25rem,9vw,3.45rem)] font-black leading-[0.94] text-[var(--color-paper)] lg:text-[clamp(4.5rem,6.9vw,6.7rem)] lg:leading-[0.92]"
          >
            {content.title}
          </h1>

          <p className="mt-7 max-w-[62ch] text-lg leading-8 text-[var(--color-muted-on-dark)] md:text-xl">
            {content.lead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#contacto">
              {content.primary}
            </a>
            <a className="btn-secondary" href="#servicios">
              {content.secondary}
            </a>
          </div>

          <div className="mt-12 border-t border-[var(--color-line-on-dark)] pt-6">
            <p className="mb-5 text-sm text-[var(--color-muted-on-dark)]">
              {content.proofLabel}
            </p>
            <dl className="grid gap-4 sm:grid-cols-3">
              {content.proof.map(([value, label]) => (
                <div key={label} className="proof-cell">
                  <dt className="text-2xl font-black text-[var(--color-paper)]">
                    {value}
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-[var(--color-muted-on-dark)]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="relative z-10">
          <div className="console-shell" aria-label={content.panelTitle}>
            <div className="flex items-start justify-between gap-4 border-b border-[var(--color-line-on-dark)] p-4 sm:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-cyan)]">
                  {content.panelTitle}
                </p>
                <h2 className="mt-2 text-2xl font-black text-[var(--color-paper)]">
                  {content.panelSubtitle}
                </h2>
              </div>
              <span className="rounded-lg bg-[var(--color-lime-soft)] px-3 py-2 text-xs font-bold text-[var(--color-lime)]">
                {content.panelStatus}
              </span>
            </div>

            <div className="grid gap-5 p-4 sm:p-5">
              <div className="pipeline-grid">
                {content.workflow.map((item, index) => (
                  <div key={item} className="pipeline-step">
                    <span className="text-xs font-black text-[var(--color-cyan)]">
                      0{index + 1}
                    </span>
                    <p className="mt-3 text-sm font-semibold text-[var(--color-paper)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="growth-visual" aria-hidden="true">
                {content.chart.map((label, index) => (
                  <div key={label} className="growth-bar">
                    <span
                      style={{ height: `${42 + index * 14}%` }}
                      className="growth-fill"
                    />
                    <span className="mt-3 text-xs font-semibold text-[var(--color-muted-on-dark)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="insight-panel">
                <div className="h-10 w-10 shrink-0 rounded-lg border border-[var(--color-cyan-muted)] bg-[var(--color-ink)]" />
                <div>
                  <p className="text-sm font-bold text-[var(--color-paper)]">
                    {content.insightTitle}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--color-muted-on-dark)]">
                    {content.insight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
