import type { Language } from "./types";

interface ServicesSectionProps {
  language: Language;
}

const services = [
  {
    titleEn: "Conversion websites",
    titleEs: "Sitios de conversión",
    descEn:
      "Landing pages and corporate sites with a clear offer, sharp copy, fast loading, and analytics from day one.",
    descEs:
      "Landing pages y sitios corporativos con oferta clara, copy preciso, carga rápida y analítica desde el primer día.",
    tagsEn: ["UX", "SEO", "Analytics"],
    tagsEs: ["UX", "SEO", "Analítica"],
  },
  {
    titleEn: "SME operating systems",
    titleEs: "Sistemas para PYMEs",
    descEn:
      "Lean internal tools for follow-up, quoting, reporting, and repetitive workflows your team should not do by hand.",
    descEs:
      "Herramientas internas ligeras para seguimiento, cotizaciones, reportes y tareas repetitivas que tu equipo no debería hacer a mano.",
    tagsEn: ["CRM", "Dashboards", "Automations"],
    tagsEs: ["CRM", "Dashboards", "Automatizaciones"],
  },
  {
    titleEn: "Sales funnels",
    titleEs: "Funnels de venta",
    descEn:
      "Lead capture, nurture flows, and sales handoff systems that keep prospects moving without losing context.",
    descEs:
      "Captura de leads, secuencias de nutrición y handoff comercial para mover prospectos sin perder contexto.",
    tagsEn: ["Lead gen", "Email", "Retargeting"],
    tagsEs: ["Lead gen", "Email", "Retargeting"],
  },
  {
    titleEn: "AI-powered outreach",
    titleEs: "Prospección con IA",
    descEn:
      "Personalized B2B campaigns with better targeting, stronger messages, and cleaner follow-up loops.",
    descEs:
      "Campañas B2B personalizadas con mejor segmentación, mensajes más fuertes y seguimiento ordenado.",
    tagsEn: ["LinkedIn", "Cold email", "WhatsApp"],
    tagsEs: ["LinkedIn", "Cold email", "WhatsApp"],
  },
];

export default function ServicesSection({ language }: ServicesSectionProps) {
  const isSpanish = language === "es";

  return (
    <section
      id="servicios"
      className="scroll-reveal w-full scroll-mt-24 bg-[var(--color-surface)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="max-w-xl">
          <p className="section-kicker">
            {isSpanish ? "Servicios" : "Services"}
          </p>
          <h2 id="services-heading" className="section-title">
            {isSpanish
              ? "Lo que necesita tu crecimiento para dejar de improvisar."
              : "What your growth needs to stop improvising."}
          </h2>
          <p className="section-lead mt-5">
            {isSpanish
              ? "Unimos producto, marketing y automatización en sistemas que se pueden medir. Menos piezas sueltas, más movimiento comercial."
              : "We connect product, marketing, and automation into systems you can measure. Fewer loose pieces, more commercial movement."}
          </p>
          <a href="#contacto" className="btn-dark mt-8">
            {isSpanish ? "Diseñar mi sistema" : "Design my system"}
          </a>
        </div>

        <div className="service-lanes">
          {services.map((service, index) => (
            <article key={service.titleEn} className="service-lane">
              <div className="service-number">0{index + 1}</div>
              <div>
                <h3 className="text-2xl font-black text-[var(--color-ink)]">
                  {isSpanish ? service.titleEs : service.titleEn}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                  {isSpanish ? service.descEs : service.descEn}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(isSpanish ? service.tagsEs : service.tagsEn).map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#contacto"
                className="self-start rounded-lg border border-[var(--color-line)] px-4 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
              >
                {isSpanish ? "Activar" : "Activate"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
