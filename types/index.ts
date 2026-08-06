export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "School Projects"
  | "Technical Drawings"
  | "3D Models";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  cover: string;
  gallery: string[];
  software: string[];
  tags: string[];
  description: string;
  year: string;
  role: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface TimelineEntry {
  id: string;
  type: "Freelance" | "Academic" | "Workshop" | "Seminar" | "OJT";
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}
