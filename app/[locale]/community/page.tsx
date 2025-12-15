import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const initiatives = [
  {
    title: "Open Source Contributions",
    description:
      "We actively contribute to open-source projects and share knowledge.",
  },
  {
    title: "Tech Meetups",
    description:
      "Hosting and participating in developer meetups and hackathons.",
  },
  {
    title: "Mentorship Programs",
    description:
      "Guiding young developers and fresh graduates in their careers.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Community</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in growing together by sharing knowledge, supporting
            talent, and building meaningful connections.
          </p>
        </section>

        {/* Initiatives */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cyan-600 py-20 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the Achhe Code Community
          </h2>
          <p className="mb-6">
            Collaborate, learn, and grow with us.
          </p>
          <Link href="/careers">
            <Button variant="secondary">
              Get Involved
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
