import { Header } from "@/components/custom/layout/header";
import { Footer } from "@/components/custom/layout/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const insights = [
  {
    title: "How AI is Transforming Enterprise Software",
    description:
      "Explore how AI-driven solutions are reshaping modern businesses.",
    category: "AI",
  },
  {
    title: "Cloud Migration: Best Practices",
    description:
      "A step-by-step guide to successful cloud transformation.",
    category: "Cloud",
  },
  {
    title: "Cybersecurity in FinTech",
    description:
      "Key security challenges and solutions for banking platforms.",
    category: "Security",
  },
];

export default function InsightsPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="bg-gray-50 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Insights</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert perspectives, technical deep dives, and real-world
            experiences from the Achhe Code team.
          </p>
        </section>

        {/* Insights Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {insights.map((item) => (
              <div
                key={item.title}
                className="border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <span className="text-sm text-cyan-600 font-medium">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <Link href="#">
                  <Button variant="link" className="px-0">
                    Read More →
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
