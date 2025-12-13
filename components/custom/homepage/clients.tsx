import { ClientsProps } from "@/types/homepage";
import Image from "next/image";



export function Clients({ heading, clients }: ClientsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          {heading}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={80}
                className="object-contain grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}