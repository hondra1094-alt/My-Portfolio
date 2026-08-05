import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    tagline: "Short one-line description of this project goes here.",
    tags: ["Next.js", "TypeScript"],
    description:
      "A longer description of Project One goes here — what it does, who it's for, and why you built it. Replace this with your own write-up.",
    features: [
      "Key feature one",
      "Key feature two",
      "Key feature three",
    ],
    challenges: ["The main technical or product challenge you ran into."],
    solutions: ["How you solved that challenge."],
    lessons: ["What you'd do differently, or what you learned."],
    githubUrl: "https://github.com/yourusername/project-one",
    demoUrl: "https://project-one.example.com",
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "Short one-line description of this project goes here.",
    tags: ["React", "Node.js"],
    description:
      "A longer description of Project Two goes here — what it does, who it's for, and why you built it. Replace this with your own write-up.",
    features: [
      "Key feature one",
      "Key feature two",
      "Key feature three",
    ],
    challenges: ["The main technical or product challenge you ran into."],
    solutions: ["How you solved that challenge."],
    lessons: ["What you'd do differently, or what you learned."],
    githubUrl: "https://github.com/yourusername/project-two",
    demoUrl: "https://project-two.example.com",
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "Short one-line description of this project goes here.",
    tags: ["PostgreSQL", "Prisma"],
    description:
      "A longer description of Project Three goes here — what it does, who it's for, and why you built it. Replace this with your own write-up.",
    features: [
      "Key feature one",
      "Key feature two",
      "Key feature three",
    ],
    challenges: ["The main technical or product challenge you ran into."],
    solutions: ["How you solved that challenge."],
    lessons: ["What you'd do differently, or what you learned."],
    githubUrl: "https://github.com/yourusername/project-three",
    demoUrl: "https://project-three.example.com",
  },
];
