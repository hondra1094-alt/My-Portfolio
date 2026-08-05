import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "Comfortable across the whole stack, from data modeling to pixel-perfect UI.",
    icon: "/images/features/icon-01.svg",
  },
  {
    id: 2,
    title: "Modern Tooling",
    description: "React, Next.js, and TypeScript as the daily toolkit.",
    icon: "/images/features/icon-02.svg",
  },
  {
    id: 3,
    title: "API & Database Design",
    description:
      "Designing schemas and APIs that stay clean as a product grows.",
    icon: "/images/features/icon-03.svg",
  },
  {
    id: 4,
    title: "Responsive & Accessible UI",
    description:
      "Interfaces that work well on every screen and for every user.",
    icon: "/images/features/icon-04.svg",
    rotate: true,
  },
  {
    id: 5,
    title: "Performance-Minded",
    description: "Treating load time and runtime performance as features.",
    icon: "/images/features/icon-05.svg",
    rotate: true,
  },
  {
    id: 6,
    title: "Testing & Code Quality",
    description: "Writing code that's easy to trust, review, and change.",
    icon: "/images/features/icon-06.svg",
    rotate: true,
  },
];

export default featuresData;
