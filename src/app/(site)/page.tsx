import AboutSection from "@/components/About/AboutSection";
import Reveal from "@/components/Common/Reveal";
import Hero from "@/components/Home/Hero";
import SkillsScene from "@/components/Home/SkillsScene";
import ProjectsScene from "@/components/Home/ProjectsScene";
import ExperienceScene from "@/components/Home/ExperienceScene";
import JourneyScene from "@/components/Home/JourneyScene";
import Support from "@/components/Support";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Full-stack developer portfolio",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <div className="flex min-h-[50vh] flex-col justify-center">
          <AboutSection />
        </div>
      </Reveal>

      <Reveal>
        <SkillsScene />
      </Reveal>

      <Reveal>
        <ProjectsScene />
      </Reveal>

      <Reveal>
        <ExperienceScene />
      </Reveal>

      <Reveal>
        <JourneyScene />
      </Reveal>

      <Reveal>
        <div className="flex min-h-[50vh] flex-col justify-center">
          <Support />
        </div>
      </Reveal>
    </>
  );
}
