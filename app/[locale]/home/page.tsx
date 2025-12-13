import { Header } from "@/components/custom/homepage/header";
import { Hero } from "@/components/custom/homepage/hero";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <Header
        navItems={[
          { id: "home", label: t("home") },
          { id: "services", label: t("services") },
          { id: "insights", label: t("insights") },
          { id: "community", label: t("community") },
          { id: "about", label: t("about") },
          { id: "contact", label: t("contact") },
        ]}
        searchPlaceholderValue={t("search")}
      />

      <Hero
        tagline={{
          message: t("tagline.message"),
          description: t("tagline.description"),
          hook: t("tagline.hook"),
        }}
      />
    </>
  );
}
