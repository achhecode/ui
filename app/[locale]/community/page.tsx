import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CommunityPage() {
  const t = useTranslations("CommunityPage");

  const initiatives = [
    {
      title: t("initiatives.1.title"),
      description: t("initiatives.1.description"),
    },
    {
      title: t("initiatives.2.title"),
      description: t("initiatives.2.description"),
    },
    {
      title: t("initiatives.3.title"),
      description: t("initiatives.3.description"),
    },
  ];
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('heading')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </section>

        {/* Initiatives */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cyan-600 py-20 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="mb-6">{t('description')}</p>
          <Link href="/careers">
            <Button variant="secondary">{t('hook')}</Button>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
