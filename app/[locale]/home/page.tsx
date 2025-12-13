import { Careers } from "@/components/custom/homepage/careers";
import { Clients } from "@/components/custom/homepage/clients";
import { Header } from "@/components/custom/homepage/header";
import { Hero } from "@/components/custom/homepage/hero";
import { Partners } from "@/components/custom/homepage/partners";
import { Services } from "@/components/custom/homepage/services";
import { Vision } from "@/components/custom/homepage/vision";
import { Footer } from "@/components/custom/layout/footer";
import { clientsData } from "@/data/homepage/clientsData";
import { partnersData } from "@/data/homepage/partnersData";
import { servicesKeys } from "@/data/homepage/servicesKeys";
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


      <Clients heading={t('clients_heading')} clients={clientsData} />

      <Partners heading={t('partners_heading')} partners={partnersData} />

      <Vision
        title={t('vision_title')}
        heading={t('vision_heading')}
        description={t('vision_description')}
        image="/jhon-jim-5BIbTwXbTWk-unsplash.jpg"
      />

      <Careers
        title={t('careers_title')}
        description={t('careers_description')}
        cta={t('careers_cta')}
      />
      <Footer />

    </>
  );
}
