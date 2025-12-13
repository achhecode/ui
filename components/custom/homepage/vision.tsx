import { VisionProps } from "@/types/homepage";
import Image from "next/image";



export function Vision({ title, heading, description, image }: VisionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <span className="text-cyan-600 font-semibold uppercase">
            {title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
            {heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right */}
        <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={image}
            alt="Our Vision"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
