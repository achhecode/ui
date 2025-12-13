import { Button } from "@/components/ui/button";
import { CareersProps } from "@/types/homepage";



export function Careers({ title, description, cta }: CareersProps) {
  return (
    <section className="py-24 bg-cyan-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          {title}
        </h2>
        <p className="text-lg text-white/90">
          {description}
        </p>
        <Button
          size="lg"
          variant="outline"
          className="hook-button"
        >
          {cta}
        </Button>
      </div>
    </section>
  );
}
