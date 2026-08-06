import { Badge } from "@/components/ui/badge";
import FadeSection from "@/components/Common/FadeSection";
import SceneHeading from "@/components/Common/SceneHeading";
import { resume } from "@/data/resume";

const JourneyScene = () => {
  // Oldest first, so the timeline reads start-to-present.
  const milestones = [...resume.experience].reverse();

  if (milestones.length === 0) return null;

  return (
    <FadeSection>
      <section
        id="journey"
        className="relative z-10 flex min-h-[50vh] items-center py-14 sm:py-20"
      >
        <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8 xl:px-0">
          <SceneHeading eyebrow="The Journey">How I Got Here</SceneHeading>

          <ol className="relative mt-10 space-y-6 border-l border-blue-400/20 pl-8 text-left sm:mt-12 sm:space-y-7 lg:mt-16 lg:pl-10">
            {milestones.map((milestone) => {
              const isCurrent = milestone.end.toLowerCase() === "present";

              return (
                <li
                  key={`${milestone.company}-${milestone.role}`}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[2.35rem] top-6 h-3 w-3 rounded-full border-2 border-blue-400 bg-navy-950 lg:-left-[2.85rem]"
                  />
                  <div className="glass-card glass-card-hover p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant="outline"
                        className="border-blue-400/30 bg-blue-500/10 text-blue-300"
                      >
                        {milestone.start} – {milestone.end}
                      </Badge>
                      {isCurrent && (
                        <Badge className="bg-blue-500 text-white">
                          Current Role
                        </Badge>
                      )}
                    </div>
                    <p className="mt-3 text-lg font-semibold text-white lg:text-xl">
                      {milestone.role}
                    </p>
                    <p className="text-sm text-dark-4 lg:text-base">
                      {milestone.company}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </FadeSection>
  );
};

export default JourneyScene;
