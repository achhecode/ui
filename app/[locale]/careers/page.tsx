"use client";

import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const openings = [
  {
    title: "Frontend Developer",
    location: "Remote / India",
    type: "Full-time",
  },
  {
    title: "Backend Developer",
    location: "Remote / India",
    type: "Full-time",
  },
  {
    title: "AI / ML Engineer",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareerPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* HERO */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Careers at Achhe Code
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We’re building a team of innovators, problem-solvers, and
              technology enthusiasts shaping the future together.
            </p>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Work With Achhe Code?
                </h2>
                <p className="text-gray-600 mb-6">
                  At Achhe Code, we believe in empowering our people to do their
                  best work. We foster a culture of learning, ownership, and
                  collaboration.
                </p>

                <ul className="space-y-4 text-gray-700">
                  <li>✔ Challenging and meaningful projects</li>
                  <li>✔ Remote-friendly work culture</li>
                  <li>✔ Learning & growth opportunities</li>
                  <li>✔ Transparent leadership</li>
                  <li>✔ Work-life balance</li>
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
            <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-14">
              We value integrity, innovation, and excellence in everything we
              do. Our culture is built on trust, curiosity, and continuous
              improvement.
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We encourage creative thinking and bold ideas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Ownership</h3>
                <p className="text-gray-600">
                  Everyone takes responsibility and drives impact.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Growth</h3>
                <p className="text-gray-600">
                  Continuous learning is part of our DNA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold">Open Positions</h2>
              <p className="mt-4 text-gray-600">
                Explore opportunities to grow your career with us.
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
                    <Button>Apply Now</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cyan-600 py-20 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">
              Don’t See the Right Role?
            </h2>
            <p className="mb-6">
              We’re always open to connecting with talented people. Send us
              your resume and we’ll get in touch.
            </p>

            <Link href="/contact">
              <Button variant="secondary">Submit Your Resume</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
