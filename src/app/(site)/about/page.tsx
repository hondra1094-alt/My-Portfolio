import AboutSection from "@/components/About/AboutSection";
import Video from "@/components/About/Video";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Common/Reveal";
import Features from "@/components/Home/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hondra's Portfolio",
  description: "About page for the portfolio",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="About Page" />
      <AboutSection />
      <Reveal>
        <Features />
      </Reveal>
      <Reveal>
        <Video />
      </Reveal>
    </>
  );
};

export default AboutPage;
