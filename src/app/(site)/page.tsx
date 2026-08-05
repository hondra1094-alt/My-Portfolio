import Reveal from "@/components/Common/Reveal";
import Features from "@/components/Home/Features";
import FeaturesList from "@/components/Home/FeaturesList";
import Hero from "@/components/Home/Hero";
import ResumePreview from "@/components/Home/ResumePreview";
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
        <Features />
      </Reveal>
      <Reveal>
        <FeaturesList />
      </Reveal>
      <Reveal>
        <ResumePreview />
      </Reveal>
      <Reveal>
        <Support />
      </Reveal>
    </>
  );
}
