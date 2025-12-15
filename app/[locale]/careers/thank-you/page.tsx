"use client";

import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ThankYouPage() {
  const t = useTranslations("ThankYouPage");

  return (
    <>
      <Header />

      <main className="pt-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-28 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-cyan-600" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("heading")}
          </h1>

          {/* Message */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            {t("description.1")}{" "}
            <span className="font-semibold text-gray-900">Achhe Code</span>
            {t("description.2")}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/career">
              <Button variant="outline">{t("actions.button_1")}</Button>
            </Link>

            <Link href="/">
              <Button>{t("actions.button_2")}</Button>
            </Link>
          </div>

          {/* Extra note */}
          <p className="mt-12 text-sm text-gray-500">
            {t("extra_note.1")}{" "}
            <a
              href="mailto:careers@achhecode.com"
              className="text-cyan-600 underline"
            >
              {t("extra_note.2")}
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
