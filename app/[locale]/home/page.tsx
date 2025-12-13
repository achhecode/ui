import { Header } from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <>
      <Header
        navItems={[
          { id: "home", label: t("home") },
          { id: "services", label: t("services") },
          { id: "insights", label: t("insights") },
          { id: "community", label: t("community") },
          { id: "about", label: t("about") },
          { id: "contact", label: t("contact") },
        ]}
        searchPlaceholderValue={t("search")}
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
          
          {/* Background Image */}
          <Image
            src="/conny-schneider-xuTJZ7uD7PI-unsplash.jpg"
            alt="Connecting across world"
            fill
            priority
            className="object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-3xl space-y-6">

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t("tagline.message")}
              </h1>

              <p className="text-lg md:text-xl text-white/90">
                {t("tagline.description")}
              </p>

              <div className="pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-cyan-500 transition"
                >
                  {t("tagline.hook")}
                </Button>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
