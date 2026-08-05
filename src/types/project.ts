export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  image?: string;
  gallery?: string[];
  description: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  lessons: string[];
  githubUrl?: string;
  demoUrl?: string;
};
