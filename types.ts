import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
  keyAchievements: string[];
  image?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  // level: number; // 1-5
  // description: string;
  icon?: LucideIcon;
}

export interface EducationItem {
  institution: string;
  link?: string;
  degree: string;
  period: string;
  details: string[];
  category: 'Education' | 'Certification';
}

export interface NavItem {
  label: string;
  path: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  content: string; // Simplified content string (HTML or Markdown text)
}