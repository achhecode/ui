import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { useTranslations } from "next-intl";
import { servicesKeys } from "@/data/homepage/servicesKeys";
import { ServicesGrid } from "@/components/custom/services/services-grid";

export default function ServicesPage() {
  const t = useTranslations("HomePage");
  const t2 = useTranslations("ServicesPage");

  const services = servicesKeys.map((service) => ({
    iconKey: service.iconKey,
    title: t(service.titleKey),
    description: t(service.descriptionKey),
  }));

  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t2("heading")}
            </h1>
            <p className="text-lg text-gray-600">
              {t2('description')}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid services={services} />

        {/* CTA */}
        <section className="py-20 bg-cyan-600 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t2('cta_heading')}
          </h2>
          <p className="text-lg opacity-90 mb-8">
            {t2('cta_description')}
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-xl bg-white text-cyan-600 font-semibold hover:bg-gray-100 transition"
          >
            {t2('cta_hook')}
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
