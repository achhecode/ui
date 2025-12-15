"use client";

import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CareerPage() {
  const t = useTranslations("CareersPage");

  const openings = [
    {
      title: t("open_positions.titles.1"),
      location: t("open_positions.locations.1"),
      type: t("open_positions.types.1"),
    },
    {
      title: t("open_positions.titles.2"),
      location: t("open_positions.locations.1"),
      type: t("open_positions.types.1"),
    },
    {
      title: t("open_positions.titles.3"),
      location: t("open_positions.locations.2"),
      type: t("open_positions.types.1"),
    },
    {
      title: t("open_positions.titles.4"),
      location: t("open_positions.locations.2"),
      type: t("open_positions.types.1"),
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t("heading")}
            </h1>
            <p className="mt-6 text-lg text-gray-600">{t("description")}</p>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t("why.title")}</h2>
                <p className="text-gray-600 mb-6">{t("why.description")}</p>

                <ul className="space-y-4 text-gray-700">
                  <li>✔ {t("why.highlights.1")}</li>
                  <li>✔ {t("why.highlights.2")}</li>
                  <li>✔ {t("why.highlights.3")}</li>
                  <li>✔ {t("why.highlights.4")}</li>
                  <li>✔ {t("why.highlights.5")}</li>
                </ul>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/team-work.jpg"
                  alt="Life at Achhe Code"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CULTURE & VALUES */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t("culture_and_values.heading")}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-14">
              {t("culture_and_values.description")}
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-xl mb-3">
                  {t("culture_and_values.1.title")}
                </h3>
                <p className="text-gray-600">
                  {t("culture_and_values.1.description")}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-xl mb-3">
                  {t("culture_and_values.2.title")}
                </h3>
                <p className="text-gray-600">
                  {t("culture_and_values.2.description")}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-xl mb-3">
                  {t("culture_and_values.3.title")}
                </h3>
                <p className="text-gray-600">
                  {t("culture_and_values.3.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold">
                {t("open_positions.title")}
              </h2>
              <p className="mt-4 text-gray-600">
                {t("open_positions.description")}
              </p>
            </div>

            <div className="space-y-6">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-6 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {job.location} • {job.type}
                    </p>
                  </div>

                  <Link href="/careers/apply">
                    <Button>{t("open_positions.apply_now")}</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cyan-600 py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
            <p className="mb-6">{t("cta.description")}</p>

            <Link href="/contact">
              <Button variant="secondary">{t("cta.hook")}</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
