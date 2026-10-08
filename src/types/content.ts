export interface Profile {
  name: string;
  fullName: string;
  intro: string;
  status: string;
  email: string;
  resume: string;
  source: string;
}

export interface ProfileLink {
  label: string;
  handle: string;
  href: string;
}

export interface Project {
  name: string;
  meta: string[];
  summary: string;
  details: string[];
  stack: string[];
  live?: string;
  code: string;
}

export interface ExperienceItem {
  place: string;
  href: string;
  role?: string;
  dates: string;
  note: string;
}

export interface ToolGroup {
  group: string;
  items: string[];
}
