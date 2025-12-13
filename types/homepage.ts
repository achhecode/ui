
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
  title: string;
  description: string;
  icon: keyof typeof ICONS; // string key
};

export type ServicesProps = {
  services: Service[];
};

export type SearchProps = {
  placeholderValue: string;
};