import SceneHeading from "@/components/Common/SceneHeading";
import SkillList from "@/components/Common/SkillList";
import { profile } from "@/data/profile";

const SkillsScene = () => {
  return (
    <section
      id="skills"
      className="relative z-10 flex min-h-[50vh] items-center py-10"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 xl:px-0">
        {/* Visual left (shown after the text on mobile, so content leads) */}
        <div
          aria-hidden="true"
          className="order-2 mx-auto select-none text-center font-mono text-6xl font-bold text-blue-400/20 sm:text-8xl lg:order-1 lg:text-left lg:text-[12rem]"
        >
          {"</>"}
        </div>

        {/* Text right */}
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <SceneHeading eyebrow="What I Bring">Core Strengths</SceneHeading>
          <div className="mx-auto mt-6 max-w-md lg:mx-0 lg:mt-10">
            <SkillList skills={profile.skills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsScene;
