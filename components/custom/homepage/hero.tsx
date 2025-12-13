import { Button } from "@/components/ui/button";
import Image from "next/image";

type Tagline = {
  message: string;
  description: string;
  hook: string;
};

type HeroProps = {
  tagline: Tagline;
};

export function Hero({ tagline }: HeroProps) {
  return (
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
              {tagline.message}
            </h1>

            <p className="text-lg md:text-xl text-white/90">
              {tagline.description}
            </p>

            <div className="pt-4">
              <Button size="lg" variant="outline" className="hook-button">
                {tagline.hook}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
