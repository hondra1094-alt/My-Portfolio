import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRightIcon, GithubIcon } from "@/assets/icons";
import BentoCard from "@/components/Common/BentoCard";
import Breadcrumb from "@/components/Breadcrumb";
import { projects } from "@/data/projects";
import ProjectGallery from "./_components/ProjectGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.tagline,
  };
}

const ProjectDetailList = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <BentoCard as="article">
    <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
      {title}
    </h2>
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2 text-sm text-white/80 sm:text-base"
        >
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </BentoCard>
);

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <Breadcrumb pageTitle={project.title} />

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 xl:px-0">
          {/* Hero image */}
          <div className="glass-card relative aspect-video overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                priority
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 via-navy-800 to-charcoal-900 text-sm text-white/40">
                Preview image coming soon
              </div>
            )}
          </div>

          {/* Summary, tags, links */}
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 max-w-2xl text-base text-dark-4 sm:text-lg">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-shrink-0 gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wave-button focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:border-blue-400/40 hover:text-blue-300"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button-gradient wave-button focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white duration-300 ease-in hover:opacity-80"
                >
                  Live Demo
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          {/* Full description */}
          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
              About this project
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/80">
              {project.description}
            </p>
          </div>

          {/* Features / Challenges / Solutions / Lessons */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ProjectDetailList title="Main Features" items={project.features} />
            <ProjectDetailList title="Challenges" items={project.challenges} />
            <ProjectDetailList title="Solutions" items={project.solutions} />
            <ProjectDetailList title="Lessons Learned" items={project.lessons} />
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
                Screenshots
              </h2>
              <div className="mt-3">
                <ProjectGallery images={project.gallery} alt={project.title} />
              </div>
            </div>
          )}

          {/* Prev / Next / Return */}
          <nav
            aria-label="Project navigation"
            className="mt-14 flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:justify-between sm:gap-4"
          >
            <Link
              href={`/projects/${prevProject.slug}`}
              className="focus-ring group flex flex-col text-left"
            >
              <span className="text-xs uppercase tracking-wide text-dark-4">
                ← Previous Project
              </span>
              <span className="mt-1 font-medium text-white/80 group-hover:text-blue-300">
                {prevProject.title}
              </span>
            </Link>

            <Link
              href="/"
              className="wave-button focus-ring rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:border-blue-400/40 hover:text-blue-300"
            >
              Return to Portfolio
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="focus-ring group flex flex-col text-right"
            >
              <span className="text-xs uppercase tracking-wide text-dark-4">
                Next Project →
              </span>
              <span className="mt-1 font-medium text-white/80 group-hover:text-blue-300">
                {nextProject.title}
              </span>
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
