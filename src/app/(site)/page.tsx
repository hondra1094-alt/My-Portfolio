import AboutSection from "@/components/About/AboutSection";
import Hero from "@/components/Home/Hero";
import SkillsScene from "@/components/Home/SkillsScene";
import ProjectsScene from "@/components/Home/ProjectsScene";
import ExperienceScene from "@/components/Home/ExperienceScene";
import JourneyScene from "@/components/Home/JourneyScene";
import Support from "@/components/Support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hondra's Portfolio",
  description: "Full-stack developer portfolio",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex min-h-[50vh] flex-col justify-center">
        <AboutSection />
      </div>

      <SkillsScene />

      <ProjectsScene />

      <ExperienceScene />

      <JourneyScene />

      <div className="flex min-h-[50vh] flex-col justify-center">
        <Support />
      </div>
    </>
  );
}
