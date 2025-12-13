import type { Service } from "@/components/custom/services/services-grid";

export const servicesKeys: {
  iconKey: Service["iconKey"];
  titleKey: string;
  descriptionKey: string;
}[] = [
  { iconKey: "automation", titleKey: "allservices.automation.title", descriptionKey: "allservices.automation.description" },
  { iconKey: "ai", titleKey: "allservices.ai.title", descriptionKey: "allservices.ai.description" },
  { iconKey: "data", titleKey: "allservices.data.title", descriptionKey: "allservices.data.description" },
  { iconKey: "security", titleKey: "allservices.security.title", descriptionKey: "allservices.security.description" },
  { iconKey: "banking", titleKey: "allservices.banking.title", descriptionKey: "allservices.banking.description" },
  { iconKey: "software", titleKey: "allservices.software.title", descriptionKey: "allservices.software.description" },
  { iconKey: "cloud", titleKey: "allservices.cloud.title", descriptionKey: "allservices.cloud.description" },
  { iconKey: "consulting", titleKey: "allservices.consulting.title", descriptionKey: "allservices.consulting.description" },
  { iconKey: "talent", titleKey: "allservices.talent.title", descriptionKey: "allservices.talent.description" },
];
