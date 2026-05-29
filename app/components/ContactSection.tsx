import type { Language } from "./types";

interface ContactSectionProps {
  language: Language;
}

const email = "Scaleup-AI@outlook.com";
const phone = "+505 8487 6604";

export default function ContactSection({ language }: ContactSectionProps) {
  const isSpanish = language === "es";
  const subject = encodeURIComponent(
    isSpanish
      ? "Quiero escalar mi negocio con Scale Up AI"
      : "I want to scale my business with Scale Up AI",
  );

  return (
    <section
      id="contacto"
      className="scroll-reveal w-full scroll-mt-24 bg-[var(--color-surface)] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="contact-band mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-kicker-dark">
            {isSpanish ? "Próximo paso" : "Next move"}
          </p>
          <h2
            id="contact-heading"
            className="mt-4 text-[clamp(2.4rem,6vw,5.8rem)] font-black leading-[0.95] text-[var(--color-paper)]"
          >
            {isSpanish
              ? "Hagamos que tu operación se vea más grande de lo que se siente hoy."
              : "Let us make your operation look bigger than it feels today."}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted-on-dark)]">
            {isSpanish
              ? "En una llamada corta revisamos tu sitio, oferta, embudo y oportunidades de automatización. Sales con un plan claro."
              : "In one short call we review your site, offer, funnel, and automation opportunities. You leave with a clear plan."}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
          <a className="btn-primary" href={`mailto:${email}?subject=${subject}`}>
            {isSpanish ? "Agendar por email" : "Book by email"}
          </a>
          <a
            className="btn-secondary-on-dark"
            href="https://wa.me/50584876604"
            target="_blank"
            rel="noreferrer"
          >
            {isSpanish ? "Escribir por WhatsApp" : "Message on WhatsApp"}
          </a>
        </div>

        <div className="mt-10 grid gap-3 border-t border-[var(--color-line-on-dark)] pt-6 text-sm text-[var(--color-muted-on-dark)] sm:grid-cols-2">
          <a href={`mailto:${email}`} className="contact-link">
            {email}
          </a>
          <a href="tel:+50584876604" className="contact-link">
            {phone} · Nicaragua
          </a>
        </div>
      </div>
    </section>
  );
}
