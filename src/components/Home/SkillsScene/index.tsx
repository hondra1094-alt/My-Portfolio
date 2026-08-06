import FadeSection from "@/components/Common/FadeSection";
import SceneHeading from "@/components/Common/SceneHeading";
import SkillList from "@/components/Common/SkillList";
import { profile } from "@/data/profile";

const SkillsScene = () => {
  return (
    <FadeSection>
      <section
        id="skills"
        className="relative z-10 flex min-h-[50vh] items-center py-10"
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 xl:px-0">
          {/* Visual left (shown after the text on mobile, so content leads) */}
          <div className="glass-card wave-card-hover order-2 mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-2xl lg:order-1">
            {/* Fake editor chrome */}
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-white/40">
                skills.ts
              </span>
            </div>

            <div className="relative px-6 py-10 sm:px-8 sm:py-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden font-mono text-8xl font-bold text-blue-400/10 sm:text-9xl"
              >
                {"</>"}
              </div>
              <p
                aria-hidden="true"
                className="relative mb-6 font-mono text-xs text-blue-400/60"
              >
                <span className="text-white/30">const</span> skills{" "}
                <span className="text-white/30">=</span>{" "}
                <span className="text-white/30">[</span>
              </p>
              <div className="relative pl-3">
                <SkillList skills={profile.skills} />
              </div>
              <p
                aria-hidden="true"
                className="relative mt-6 font-mono text-xs text-white/30"
              >
                ]
              </p>
            </div>
          </div>

          {/* Text right */}
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <SceneHeading eyebrow="What I Bring">Core Strengths</SceneHeading>
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default SkillsScene;
