"use client";

import { ICONS, Service, ServicesProps } from "@/types/homepage";

export function Services({ heading, description, services }: ServicesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.iconKey];

            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{service.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
