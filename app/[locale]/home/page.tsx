import { Header } from "@/components/custom/homepage/header";
import { Hero } from "@/components/custom/homepage/hero";
import { Services } from "@/components/custom/homepage/services";
import { servicesKeys } from "@/data/homepage/servicesKeys";
import { Service } from "@/types/homepage";
import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations("HomePage");

  const servicesData = servicesKeys.map(s => ({
    iconKey: s.iconKey,
    title: t(s.titleKey),
    description: t(s.descriptionKey),
  }));

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

      <Services heading={t('allServices_heading')} description={t('allServices_description')} services={servicesData}/>
    </>
  );
}
