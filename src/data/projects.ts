import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "the-beans-place",
    title: "The Beans Place",
    tagline:
      "A responsive marketing site for a specialty coffee brand, showcasing single-origin beans with scroll-reveal animations.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    description:
      "The Beans Place is a marketing and product-showcase site for a specialty coffee brand. It highlights a curated lineup of single-origin coffee beans — from Ethiopian Harrar to Jamaican Blue Mountain and Panama Geisha — alongside brand storytelling and a contact section linking out to the shop's location. Built with React and Vite, styled with Tailwind CSS, and animated with Framer Motion for scroll-triggered reveals.",
    features: [
      "Product showcase for 16+ single-origin coffee beans, each with its own packaging artwork",
      "Animated hero section and scroll-reveal transitions built with Framer Motion",
      "Reusable UI kit (buttons, cards, badges, inputs) styled with Tailwind CSS",
      "Contact section with a form and a direct link to the shop's location",
    ],
    challenges: ["The main technical or product challenge you ran into."],
    solutions: ["How you solved that challenge."],
    lessons: ["What you'd do differently, or what you learned."],
    githubUrl: "https://github.com/hondra1094-alt/The-Beans-Place",
    demoUrl: "https://the-beans-place.vercel.app",
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
