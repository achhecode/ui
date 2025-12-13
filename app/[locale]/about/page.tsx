"use client";

import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  { name: "A R Danish", image: "/team/ar.jpg", role: "Founder & CEO" },
  {
    name: "Md Murad",
    image: "/team/murad.jpg",
    role: "Vice President - Operations",
  },
  {
    name: "Arshad Iqbal",
    image: "/team/arshad.jpg",
    role: "Head of Engineering",
  },
  {
    name: "Md Aatif",
    image: "/new.png",
    role: "Senior Director - Business Development",
  },
  {
    name: "Md Gulrez",
    image: "/team/gullu.jpg",
    role: "Development Lead",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Achhe Code
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Achhe Code is a technology-driven company focused on building
              scalable, secure, and future-ready digital solutions for
              businesses worldwide.
            </p>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            {/* Vision */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg">
                  To empower organizations with technology that accelerates
                  innovation, efficiency, and sustainable growth across
                  industries.
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
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg">
                  We turn complex ideas into reliable, scalable software by
                  combining deep technical expertise with a human-centric
                  approach.
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
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-600 mb-6">
              From automation to AI-driven platforms, we deliver technology
              solutions that matter.
            </p>
            <Link href="/services">
              <Button variant="outline">Explore Services</Button>
            </Link>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">
              Our Core Values
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
                <h3 className="font-semibold text-xl mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We act with honesty, transparency, and accountability in
                  everything we do.
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
                <h3 className="font-semibold text-xl mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We challenge the status quo and continuously push boundaries.
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
                <h3 className="font-semibold text-xl mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for high-quality outcomes and long-term value
                  creation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold">Leadership</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Experienced leaders guiding Achhe Code with clarity, vision, and
                purpose.
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
            <h2 className="text-3xl font-bold mb-6">Why Achhe Code?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              We combine engineering excellence, business understanding, and
              long-term partnerships to deliver technology that truly works.
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="font-semibold text-lg mb-2">Client-Centric</h3>
                <p className="text-gray-600">
                  Solutions designed around real business needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Scalable Engineering
                </h3>
                <p className="text-gray-600">
                  Built to grow with your organization.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Trusted Partnerships
                </h3>
                <p className="text-gray-600">
                  Long-term collaboration over short-term delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAREERS CTA */}
        <section className="bg-cyan-600 py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="mb-6">
              We’re always looking for innovative talent ready to make an
              impact.
            </p>
            <Link href="/careers">
              <Button variant="secondary">View Careers</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
