import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Common/Reveal";
import ProjectPreviewCard from "@/components/Projects/ProjectPreviewCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Selected projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumb pageTitle="Projects" />

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 xl:px-0">
          <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectPreviewCard
                key={project.slug}
                project={project}
                className="min-h-[280px]"
              />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
