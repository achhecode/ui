"use client";

import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { useState } from "react";

export default function ApplyNowPage() {
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

  return (
    <>
      <Header />

      <main className="pt-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-gray-900">Apply Now</h1>
            <p className="mt-4 text-gray-600">
              Submit your application and take the next step in your career
              with Achhe Code.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form className="space-y-6">
              {/* Job ID */}
              <div>
                <label className="block font-medium mb-1">
                  Job ID / Position *
                </label>
                <Input
                  required
                  placeholder="e.g. Frontend Developer"
                />
              </div>

              {/* Full Name */}
              <div>
                <label className="block font-medium mb-1">
                  Full Name *
                </label>
                <Input required placeholder="Your full name" />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium mb-1">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  placeholder="you@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-1">
                  Phone Number *
                </label>
                <div className="flex gap-3">
                  <Input className="w-24" placeholder="+91" required />
                  <Input placeholder="Phone number" required />
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block font-medium mb-1">
                  Years of Experience
                </label>
                <Input placeholder="e.g. 3 years" />
              </div>

              {/* Message */}
              <div>
                <label className="block font-medium mb-1">
                  Cover Message
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us why you'd be a great fit"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block font-medium mb-2">
                  Upload Resume *
                </label>

                <label className="flex items-center justify-center gap-3 border-2 border-dashed rounded-xl p-6 cursor-pointer hover:border-cyan-600 transition">
                  <Upload className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm text-gray-600">
                    {fileName
                      ? fileName
                      : "Click to upload (PDF, DOC, DOCX)"}
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
              <Button className="w-full mt-6">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
