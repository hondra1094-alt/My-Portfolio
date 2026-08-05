import { GithubIcon, LinkedinIcon, MailIcon } from "@/assets/icons";

export const profile = {
  name: "Hondra Smith Jr",
  title: "Full-Stack Developer",
  introduction:
    "I design and build fast, accessible, end-to-end web applications — from database schema to pixel-perfect UI. Currently focused on React, Next.js, and TypeScript.",
  email: "hondra1094@gmail.com",
  avatarUrl: "/images/profile-picture.jpeg" as string | undefined,
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/hondra1094-alt", icon: GithubIcon },
    { label: "LinkedIn", href: "https://linkedin.com/in/hondra-smith-57814990", icon: LinkedinIcon },
    { label: "Email", href: "mailto:hondra1094@gmail.com", icon: MailIcon },
  ],
};
