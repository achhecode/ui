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

export default function ContactPage() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <Header />

      <main className="pt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Let’s talk about how Achhe Code can help transform your ideas into
              scalable technology solutions.
            </p>
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
                    Our Office – India
                  </h2>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold mb-6">Office Location</h3>

                <div className="space-y-5 text-gray-700">
                  <div className="flex gap-4">
                    <MapPin className="text-cyan-600 shrink-0" />
                    <p>
                      Achhe Code Pvt Ltd
                      <br />
                      Bengaluru, Karnataka, India
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="text-cyan-600 shrink-0" />
                    <a
                      href="mailto:contact@achhecode.com"
                      className="hover:underline"
                    >
                      contact@achhecode.com
                    </a>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="text-cyan-600 shrink-0" />
                    <a href="tel:+919999999999" className="hover:underline">
                      +91 99999 99999
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block font-medium mb-1">Full Name *</label>
                  <Input required placeholder="Your full name" />
                </div>

                <div>
                  <label className="block font-medium mb-1">Email *</label>
                  <Input type="email" required placeholder="you@email.com" />
                </div>

                <div>
                  <label className="block font-medium mb-1">Phone No *</label>
                  <div className="flex gap-3">
                    <Input className="w-24" placeholder="+91" required />
                    <Input placeholder="Phone number" required />
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-1">Your Message</label>
                  <Textarea rows={4} placeholder="Tell us how we can help" />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 text-sm text-gray-600">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" required />
                    <span>
                      I agree to the{" "}
                      <button
                        type="button"
                        className="text-cyan-600 underline"
                        onClick={() => setShowTerms(true)}
                      >
                        Terms of Use
                      </button>
                    </span>
                  </label>

                  <label className="flex items-start gap-2">
                    <input type="checkbox" />
                    <span>
                      By submitting this form, you agree to receive text
                      messages (SMS) from Achhe Code Pvt Ltd.
                    </span>
                  </label>
                </div>

                <Button className="w-full mt-4">Submit</Button>
              </form>
            </div>
          </div>

          {/* Services CTA */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-semibold mb-3">
              Looking for ways Achhe Code can help you?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore our Service offerings tailored to your business needs.
            </p>

            <Link href="/services">
              <Button variant="outline" className="gap-2">
                View Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Terms of Use</h3>
            <p className="text-sm text-gray-600 mb-6">
              By using this site, you agree to our terms and conditions
              regarding data usage, communication, and privacy.
            </p>
            <Button onClick={() => setShowTerms(false)}>Close</Button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
