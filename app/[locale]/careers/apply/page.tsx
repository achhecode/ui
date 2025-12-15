"use client";

import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ApplyNowPage() {
  const t = useTranslations("ApplyPage");

  const router = useRouter();

  const [fileError, setFileError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setFileError("Only PDF or DOC/DOCX files are allowed.");
      setFileName(null);
      e.target.value = "";
      return;
    }

    setFileError(null);
    setFileName(file.name);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // ✅ TODO: API call / backend integration here

    // ✅ Redirect after successful submit
    router.push("/careers/thank-you");
  }

  return (
    <>
      <Header />

      <main className="pt-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-gray-900">{t("heading")}</h1>
            <p className="mt-4 text-gray-600">{t("description")}</p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job ID */}
              <div>
                <label className="block font-medium mb-1">
                  {t("field_id.1.label_name")} *
                </label>
                <Input required placeholder={t("field_id.1.placeholder")} />
              </div>

              {/* Full Name */}
              <div>
                <label className="block font-medium mb-1">
                  {t("field_id.2.label_name")} *
                </label>
                <Input required placeholder={t("field_id.2.placeholder")} />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-1">
                  {t("field_id.3.label_name")} *
                </label>
                <Input
                  type="email"
                  required
                  placeholder={t("field_id.3.placeholder")}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-1">
                  {t("field_id.4.label_name")} *
                </label>
                <div className="flex gap-3">
                  <Input
                    className="w-24"
                    placeholder={t("field_id.4.placeholder_1")}
                    required
                  />
                  <Input placeholder={t("field_id.4.placeholder_2")} required />
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block font-medium mb-1">
                  {t("field_id.5.label_name")}
                </label>
                <Input placeholder={t("field_id.5.placeholder")} />
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium mb-1">
                  {t("field_id.6.label_name")}
                </label>
                <Textarea rows={4} placeholder={t("field_id.6.placeholder")} />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block font-medium mb-2">
                  {t("field_id.7.label_name")} *
                </label>

                <label className="flex items-center justify-center gap-3 border-2 border-dashed rounded-xl p-6 cursor-pointer hover:border-cyan-600 transition">
                  <Upload className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-gray-600">
                    {fileName ? fileName : t("field_id.7.placeholder")}
                  </span>

                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>

                {fileError && (
                  <p className="text-sm text-red-600 mt-2">{fileError}</p>
                )}
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full mt-6">
                {t("submit")}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
