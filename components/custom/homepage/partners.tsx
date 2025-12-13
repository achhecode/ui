import { PartnersProps } from "@/types/homepage";
import Image from "next/image";



export function Partners({ heading, partners }: PartnersProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          {heading}
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="opacity-80 hover:opacity-100">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
