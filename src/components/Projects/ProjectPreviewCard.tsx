import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/assets/icons";
import { Project } from "@/types/project";

const ProjectPreviewCard = ({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`View project: ${project.title}`}
      className={`focus-ring group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-glass transition-all duration-300 ease-portfolio hover:z-20 hover:scale-[1.03] hover:border-blue-400/40 hover:shadow-glow-blue focus-visible:z-20 focus-visible:scale-[1.03] focus-visible:border-blue-400/40 focus-visible:shadow-glow-blue motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100 ${className}`}
    >
      <div className="absolute inset-0 -z-10">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover opacity-40 transition-transform duration-500 ease-portfolio group-hover:scale-110 group-hover:opacity-60 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-navy-700 via-navy-800 to-charcoal-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
        {project.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm text-white/60">
        {project.tagline}
      </p>

      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 opacity-0 transition-opacity duration-300 ease-portfolio group-hover:opacity-100 group-focus-visible:opacity-100">
        View Project
        <ArrowUpRightIcon className="h-4 w-4" />
      </span>
    </Link>
  );
};

export default ProjectPreviewCard;
