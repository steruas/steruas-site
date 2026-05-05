import { createContext, useContext, type ReactNode } from "react";
import { content, type Locale } from "@/content/site";

type Dict = (typeof content)["pt"];
type Ctx = { locale: Locale; t: Dict; other: Locale };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value: Ctx = {
    locale,
    t: content[locale] as unknown as Dict,
    other: locale === "pt" ? "en" : "pt",
  };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
