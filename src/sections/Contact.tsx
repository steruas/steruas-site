import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useI18n } from "@/lib/i18n";
import { FadeIn } from "@/components/FadeIn";
import { submitContact } from "@/utils/contact.functions";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});
type FormData = z.infer<typeof schema>;

export function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      await submitContact({ data });
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-dark py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <span className="eyebrow">{t.contact.eyebrow}</span>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl tracking-tight text-[#F5F5F0]">
              {t.contact.headline}
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-[#F5F5F0]/70">{t.contact.intro}</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-14 text-left space-y-6">
              <Field label={t.contact.name} error={errors.name?.message}>
                <input
                  {...register("name")}
                  className="w-full bg-transparent border-b border-[#2A2A2A] focus:border-[#B8862B] text-[#F5F5F0] py-3 outline-none transition-colors"
                  autoComplete="name"
                />
              </Field>
              <Field label={t.contact.email} error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full bg-transparent border-b border-[#2A2A2A] focus:border-[#B8862B] text-[#F5F5F0] py-3 outline-none transition-colors"
                  autoComplete="email"
                />
              </Field>
              <Field label={t.contact.message} error={errors.message?.message}>
                <textarea
                  rows={5}
                  {...register("message")}
                  className="w-full bg-transparent border-b border-[#2A2A2A] focus:border-[#B8862B] text-[#F5F5F0] py-3 outline-none resize-none transition-colors"
                />
              </Field>

              <div className="pt-4 flex items-center gap-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center bg-[#B8862B] text-white px-8 h-12 rounded-md text-sm font-medium hover:bg-[#a3771f] transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? t.contact.sending : t.contact.submit}
                </button>
                {status === "ok" && (
                  <span className="text-sm text-[#B8862B]">{t.contact.success}</span>
                )}
                {status === "error" && (
                  <span className="text-sm text-red-400">{t.contact.error}</span>
                )}
              </div>
            </form>

            <div className="mt-14 flex items-center justify-center gap-6 text-sm text-[#F5F5F0]/60">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#B8862B] transition-colors">LinkedIn</a>
              <span aria-hidden className="text-[#2A2A2A]">/</span>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#B8862B] transition-colors">{t.contact.whatsapp}</a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow !text-[#F5F5F0]/50">{label}</span>
      <div className="mt-1">{children}</div>
      {error && <span className="block mt-1 text-xs text-red-400">{error}</span>}
    </label>
  );
}
