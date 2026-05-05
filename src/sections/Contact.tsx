import { useI18n } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section-dark py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl tracking-tight text-[#F5F5F0]">
              {t.contact.headline}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-[#F5F5F0]/70">
              {t.contact.intro}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-14 flex flex-col gap-4 max-w-md mx-auto">
              <ContactButton
                href="https://www.linkedin.com/in/stephanie-nakamura-ruas/"
                label={t.contact.linkedin.label}
                hint={t.contact.linkedin.hint}
                primary
              />
              <ContactButton
                href="https://wa.me/55SEUNUMERO"
                label={t.contact.whatsapp.label}
                hint={t.contact.whatsapp.hint}
              />
              <ContactButton
                href="mailto:oi@steruas.com"
                label={t.contact.email.label}
                hint={t.contact.email.hint}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContactButton({
  href,
  label,
  hint,
  primary = false,
}: {
  href: string;
  label: string;
  hint: string;
  primary?: boolean;
}) {
  const isExternal = href.startsWith("http");
  return (
    
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={
        primary
          ? "group flex items-center justify-between bg-[#B8862B] hover:bg-[#a3771f] text-white px-6 py-5 rounded-md transition-colors"
          : "group flex items-center justify-between bg-transparent border border-[#2A2A2A] hover:border-[#B8862B] text-[#F5F5F0] px-6 py-5 rounded-md transition-colors"
      }
    >
      <div className="text-left">
        <div className="text-base font-medium">{label}</div>
        <div
          className={
            primary
              ? "text-xs text-white/70 mt-0.5"
              : "text-xs text-[#F5F5F0]/50 mt-0.5"
          }
        >
          {hint}
        </div>
      </div>
      <span
        aria-hidden
        className={
          primary
            ? "text-white/70 group-hover:translate-x-1 transition-transform"
            : "text-[#F5F5F0]/40 group-hover:text-[#B8862B] group-hover:translate-x-1 transition-transform"
        }
      >
        →
      </span>
    </a>
  );
}
