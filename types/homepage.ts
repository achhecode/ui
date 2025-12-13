
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
  iconKey: string;
  title: string;
  description: string;
};

export type SearchProps = {
  placeholderValue: string;
};

export type ServicesProps = {
  heading: string,
  description: string,
  services: Service[];
};

type Client = {
  name: string;
  logo: string;
};

export type ClientsProps = {
  heading: string;
  clients: Client[];
};

type Partner = {
  name: string;
  logo: string;
};

export type PartnersProps = {
  heading: string;
  partners: Partner[];
};

export type VisionProps = {
  title: string;
  heading: string;
  description: string;
  image: string;
};

export type CareersProps = {
  title: string;
  description: string;
  cta: string;
};

type NavItem = {
  id: string;
  label: string;
};

export type HeaderProps = {
  navItems: NavItem[];
  searchPlaceholderValue: string;
};