import SceneHeading from "@/components/Common/SceneHeading";
import { resume } from "@/data/resume";

const JourneyScene = () => {
  // Oldest first, so the timeline reads start-to-present.
  const milestones = [...resume.experience].reverse();

  if (milestones.length === 0) return null;

  return (
    <section
      id="journey"
      className="relative z-10 flex min-h-[50vh] items-center py-10"
    >
      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8 xl:px-0">
        <SceneHeading eyebrow="The Journey">How I Got Here</SceneHeading>

        <ol className="relative mt-10 space-y-9 border-l border-white/10 pl-8 text-left sm:mt-12 sm:space-y-10 lg:mt-16 lg:space-y-14 lg:pl-10">
          {milestones.map((milestone) => (
            <li key={`${milestone.company}-${milestone.role}`} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-400 bg-navy-950 lg:-left-[2.85rem]"
              />
              <p className="text-sm font-medium text-blue-300 lg:text-base">
                {milestone.start} – {milestone.end}
              </p>
              <p className="mt-1 text-lg font-semibold text-white lg:mt-2 lg:text-xl">
                {milestone.role}
              </p>
              <p className="text-sm text-dark-4 lg:text-base">{milestone.company}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default JourneyScene;
