import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/assets/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
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
      className={cn(
        "focus-ring group relative block overflow-hidden rounded-3xl transition-all duration-300 ease-portfolio hover:z-20 hover:scale-[1.03] focus-visible:z-20 focus-visible:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100",
        className,
      )}
    >
      <Card className="h-full flex-col justify-end gap-0 rounded-3xl bg-white/[0.04] py-0 text-inherit shadow-glass ring-1 ring-white/10 transition-all duration-300 ease-portfolio [--card-spacing:--spacing(5)] group-hover:shadow-glow-blue group-hover:ring-blue-400/40 group-focus-visible:shadow-glow-blue group-focus-visible:ring-blue-400/40">
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

        <CardContent className="flex flex-col py-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-white/10 bg-white/5 text-white/70"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-white/60">
            {project.tagline}
          </p>

          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 opacity-100 transition-opacity duration-300 ease-portfolio group-focus-visible:opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100">
            View Project
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectPreviewCard;
