"use client";

import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
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
            Thank You for Applying!
          </h1>

          {/* Message */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Your application has been successfully submitted to{" "}
            <span className="font-semibold text-gray-900">
              Achhe Code
            </span>
            . Our team will review your profile and reach out if your
            experience matches our requirements.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/career">
              <Button variant="outline">
                View More Opportunities
              </Button>
            </Link>

            <Link href="/">
              <Button>
                Go to Home
              </Button>
            </Link>
          </div>

          {/* Extra note */}
          <p className="mt-12 text-sm text-gray-500">
            Didn’t receive a confirmation email?  
            Please check your spam folder or contact us at{" "}
            <a
              href="mailto:careers@achhecode.com"
              className="text-cyan-600 underline"
            >
              careers@achhecode.com
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
