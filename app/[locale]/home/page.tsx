import { Header } from "@/components/custom/header";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Header
        navItems={[
          t('home'),
          t('services'),
          t('insights'),
          t('community'),
          t('about'),
          t('contact'),
        ]} searchPlaceholderValue={t('search')}   
      />
      {/* Hero Section */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-80px)]">
          {/* Background Image */}
          <Image
            src="/conny-schneider-xuTJZ7uD7PI-unsplash.jpg"
            alt="Connecting across world"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Centered Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {t('tagline.message')}
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                {t('tagline.description')}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
