import { languages } from "@/types/languages";
import { defineRouting } from "next-intl/routing";

// Extract only the language codes
const availableLanguages = languages.map((l) => l.code);

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: availableLanguages,

  // Used when no locale matches
  defaultLocale: "en",
});
