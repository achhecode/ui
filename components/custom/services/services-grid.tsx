"use client";

import {
  Cpu,
  Bot,
  Database,
  ShieldCheck,
  Landmark,
  Code2,
  Cloud,
  Briefcase,
  Users,
  LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  automation: Cpu,
  ai: Bot,
  data: Database,
  security: ShieldCheck,
  banking: Landmark,
  software: Code2,
  cloud: Cloud,
  consulting: Briefcase,
  talent: Users,
};


export type Service = {
  iconKey: keyof typeof ICONS;
  title: string;
  description: string;
};

type ServicesGridProps = {
  services: Service[];
};


export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.iconKey];

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
