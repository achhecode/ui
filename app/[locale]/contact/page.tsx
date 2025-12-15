"use client";

import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <Header />

      <main className="pt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t("heading")}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{t("description")}</p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-14">
            {/* LEFT — Office Image + Contact Info */}
            <div className="space-y-8">
              {/* Office Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/office-india.jpg" // place image in /public
                  alt="Achhe Code Office India"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                  <h2 className="text-white text-xl font-semibold">
                    {t("offices.title")}
                  </h2>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">
                  {t("contact_info_card.location_title")}
                </h3>

                <div className="space-y-5 text-gray-700">
                  <div className="flex gap-4">
                    <MapPin className="text-cyan-600 shrink-0" />
                    <p>
                      {t("contact_info_card.1.name")}
                      <br />
                      {t("contact_info_card.1.address")}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="text-cyan-600 shrink-0" />
                    <a
                      href="mailto:contact@achhecode.com"
                      className="hover:underline"
                    >
                      {t("contact_info_card.1.mail")}
                    </a>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-cyan-600 shrink-0" />
                    <a href="tel:+919999999999" className="hover:underline">
                      {t("contact_info_card.1.phone")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block font-medium mb-1">
                    {t("form.name_label")} *
                  </label>
                  <Input required placeholder="Your full name" />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    {t("form.email_label")} *
                  </label>
                  <Input type="email" required placeholder="you@email.com" />
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    {t("form.phone_label")} *
                  </label>
                  <div className="flex gap-3">
                    <Input className="w-24" placeholder="+91" required />
                    <Input placeholder="Phone number" required />
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    {t("form.message_label")}
                  </label>
                  <Textarea rows={4} placeholder="Tell us how we can help" />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 text-sm text-gray-600">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" required />
                    <span>
                      {t("form.agree")}{" "}
                      <button
                        type="button"
                        className="text-cyan-600 underline"
                        onClick={() => setShowTerms(true)}
                      >
                        {t("form.term")}
                      </button>
                    </span>
                  </label>

                  <label className="flex items-start gap-2">
                    <input type="checkbox" />
                    <span>{t("form.agree_2")}</span>
                  </label>
                </div>

                <Button className="w-full mt-4">{t("form.submit")}</Button>
              </form>
            </div>
          </div>

          {/* Services CTA */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-semibold mb-3">
              {t("services.title")}
            </h3>
            <p className="text-gray-600 mb-6">{t("services.description")}</p>

            <Link href="/services">
              <Button variant="outline" className="gap-2">
                {t("services.cta")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              {t("term_modal.title")}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              {t("term_modal.description")}
            </p>
            <Button onClick={() => setShowTerms(false)}>
              {t("term_modal.close")}
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
