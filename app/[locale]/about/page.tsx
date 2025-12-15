"use client";

import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const teamMembers = [
    {
      name: t("team_members.1.name"),
      image: "/team/1.jpg",
      role: t("team_members.1.role"),
    },
    {
      name: t("team_members.2.name"),
      image: "/team/2.jpg",
      role: t("team_members.2.role"),
    },
    {
      name: t("team_members.3.name"),
      image: "/team/3.jpg",
      role: t("team_members.3.role"),
    },
    {
      name: t("team_members.4.name"),
      image: "/new.png",
      role: t("team_members.4.role"),
    },
    {
      name: t("team_members.5.name"),
      image: "/team/5.jpg",
      role: t("team_members.5.role"),
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

        {/* VISION & MISSION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            {/* Vision */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">{t("vision.title")}</h2>
                <p className="text-gray-600 text-lg">
                  {t("vision.description")}
                </p>
              </div>

              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/vision.jpg"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Mission */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden order-last md:order-first">
                <Image
                  src="/mission.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {t("mission.title")}
                </h2>
                <p className="text-gray-600 text-lg">
                  {t("mission.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        {/* <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                A diverse group of engineers, designers, and strategists driven
                by passion and innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden mb-3">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-medium">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* SERVICES CTA */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4">{t("services.title")}</h2>
            <p className="text-gray-600 mb-6">{t("services.description")}</p>
            <Link href="/services">
              <Button variant="outline">{t("services.hook")}</Button>
            </Link>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              {t("values.title")}
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Integrity */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="relative h-32 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/integrity.jpg"
                    alt="Integrity"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">
                  {t("values.integrity.title")}
                </h3>
                <p className="text-gray-600">
                  {t("values.integrity.description")}
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="relative h-32 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/innovation.jpg"
                    alt="Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">
                  {t("values.innovation.title")}
                </h3>
                <p className="text-gray-600">
                  {t("values.innovation.description")}
                </p>
              </div>

              {/* Excellence */}
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="relative h-32 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src="/excellence.jpg"
                    alt="Excellence"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">
                  {t("values.excellence.title")}
                </h3>
                <p className="text-gray-600">
                  {t("values.excellence.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">
                {t("leadership.title")}
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                {t("leadership.description")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
              {teamMembers.slice(0, 3).map((leader) => (
                <div key={leader.name} className="text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold">{leader.name}</p>
                  <p className="text-sm text-gray-500">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ACHHE CODE */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">{t("why.title")}</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              {t("why.description")}
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t("why.1.title")}
                </h3>
                <p className="text-gray-600">{t("why.1.description")}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t("why.2.title")}
                </h3>
                <p className="text-gray-600">{t("why.2.description")}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t("why.3.title")}
                </h3>
                <p className="text-gray-600">{t("why.3.description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CAREERS CTA */}
        <section className="bg-cyan-600 py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">
              {t("careers.cta.title")}
            </h2>
            <p className="mb-6">{t("careers.cta.description")}</p>
            <Link href="/careers">
              <Button variant="secondary">{t("careers.cta.hook")}</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
