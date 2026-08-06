import ButtonLink from "@/components/Common/ButtonLink";
import SceneHeading from "@/components/Common/SceneHeading";
import { resume } from "@/data/resume";

const ExperienceScene = () => {
  const current = resume.experience[0];

  if (!current) return null;

  return (
    <section
      id="experience"
      className="relative z-10 flex min-h-[50vh] items-center py-10"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 xl:px-0">
        {/* Text left */}
        <div className="text-center lg:text-left">
          <SceneHeading eyebrow="Experience">{current.role}</SceneHeading>
          <p className="mt-2 text-lg font-medium text-blue-300 lg:mt-3 lg:text-xl">
            {current.company}
          </p>

          <ul className="mx-auto mt-6 max-w-lg space-y-3 text-left lg:mx-0 lg:mt-8">
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
        <div
          aria-hidden="true"
          className="select-none text-center text-5xl font-extrabold tracking-tight text-blue-400/20 sm:text-7xl lg:text-right xl:text-8xl"
        >
          {current.start}
          <br />— {current.end}
        </div>
      </div>
    </section>
  );
};

export default ExperienceScene;
