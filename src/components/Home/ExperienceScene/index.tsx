import { Badge } from "@/components/ui/badge";
import ButtonLink from "@/components/Common/ButtonLink";
import FadeSection from "@/components/Common/FadeSection";
import SceneHeading from "@/components/Common/SceneHeading";
import { resume } from "@/data/resume";

const ExperienceScene = () => {
  const current = resume.experience[0];

  if (!current) return null;

  const isCurrent = current.end.toLowerCase() === "present";

  return (
    <FadeSection>
      <section
        id="experience"
        className="relative z-10 flex min-h-[50vh] items-center py-14 sm:py-20"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 xl:px-0">
          {/* Text left */}
          <div className="text-center lg:text-left">
            <SceneHeading eyebrow="Experience">{current.role}</SceneHeading>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <Badge
                variant="outline"
                className="border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300"
              >
                {current.company}
              </Badge>
              {isCurrent && (
                <Badge className="bg-blue-500 px-3 py-1 text-white">
                  Current Role
                </Badge>
              )}
            </div>

            <div className="glass-card mt-6 p-5 text-left sm:p-6 lg:mt-8">
              <ul className="space-y-3">
                {current.highlights.slice(0, 4).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 text-sm leading-relaxed text-white/70 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ButtonLink
              href="/resume"
              variant="secondary"
              fullWidthOnMobile
              className="mt-8 lg:mt-10"
            >
              View Full Resume
            </ButtonLink>
          </div>

          {/* Accent right */}
          <div className="flex justify-center lg:justify-end">
            <div
              aria-hidden="true"
              className="glass-card select-none px-8 py-10 text-center sm:px-12 sm:py-14"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300/60">
                Tenure
              </p>
              <div className="mt-4 text-5xl font-extrabold tracking-tight text-blue-400/25 sm:text-7xl xl:text-8xl">
                {current.start}
                <br />— {current.end}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default ExperienceScene;
