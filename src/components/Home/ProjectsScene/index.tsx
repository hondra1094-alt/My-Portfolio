import ButtonLink from "@/components/Common/ButtonLink";
import SceneHeading from "@/components/Common/SceneHeading";
import ProjectPreviewCard from "@/components/Projects/ProjectPreviewCard";
import { projects } from "@/data/projects";

const ProjectsScene = () => {
  return (
    <section
      id="projects"
      className="relative z-10 flex min-h-[50vh] items-center py-10"
    >
      <div className="mx-auto w-full max-w-6xl px-5 text-center sm:px-8 xl:px-0">
        <SceneHeading eyebrow="Featured">Projects</SceneHeading>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:gap-12">
          {projects.map((project) => (
            <ProjectPreviewCard
              key={project.slug}
              project={project}
              className="min-h-[280px] sm:min-h-[320px] lg:min-h-[380px]"
            />
          ))}
        </div>

        <ButtonLink
          href="/projects"
          variant="secondary"
          fullWidthOnMobile
          className="mt-10 lg:mt-14"
        >
          View All Projects
        </ButtonLink>
      </div>
    </section>
  );
};

export default ProjectsScene;
