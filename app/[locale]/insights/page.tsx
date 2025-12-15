import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function InsightsPage() {
  const t = useTranslations("InsightsPage");

  const insights = [
    {
      title: t('insights.1.title'),
      description:
        t('insights.1.description'),
      category: t('insights.1.category'),
    },
    {
      title: t('insights.2.title'),
      description: t('insights.2.description'),
      category: t('insights.2.category'),
    },
    {
      title: t('insights.3.title'),
      description:
        t('insights.3.description'),
      category: t('insights.3.category'),
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

        {/* Insights Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {insights.map((item) => (
              <div
                key={item.title}
                className="border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <span className="text-sm text-cyan-600 font-medium">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href="#">
                  <Button variant="link" className="px-0">
                    {t('cta_hook')}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
