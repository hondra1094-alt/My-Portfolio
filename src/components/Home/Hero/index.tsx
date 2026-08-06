import ButtonLink from "@/components/Common/ButtonLink";
import FadeSection from "@/components/Common/FadeSection";
import { profile } from "@/data/profile";

const Hero = () => {
  return (
    <FadeSection>
      <section
        id="home"
        className="relative z-10 flex min-h-[70vh] items-center overflow-hidden pb-16 pt-40 md:pt-32"
      >
        {/* Decorative ambient glow — purely visual, sits behind the content */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 xl:px-0">
          {/* Text column */}
          <div className="animate-fade-up text-center motion-reduce:animate-none lg:text-left">
            <p className="hero-subtitle-text inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] sm:text-base">
              <span className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent lg:hidden" />
              Hi, I&apos;m
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:mt-5 xl:text-7xl">
              {profile.name}
            </h1>
            <p className="hero-subtitle-text mt-4 text-2xl font-semibold sm:text-3xl lg:mt-5 lg:text-4xl">
              {profile.title}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dark-4 sm:text-lg lg:mx-0 lg:mt-7 lg:text-xl">
              {profile.introduction}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:mt-11 lg:justify-start lg:gap-6">
              <ButtonLink href="/projects" size="lg">
                View Projects
              </ButtonLink>
              <ButtonLink
                href={`mailto:${profile.email}`}
                variant="secondary"
                size="lg"
              >
                Get In Touch
              </ButtonLink>
            </div>
          </div>

          {/* Visual column — stack, in place of a photo */}
          <div className="animate-fade-up motion-reduce:animate-none">
            <div className="glass-card glass-card-hover mx-auto max-w-sm p-6 sm:p-8 lg:mx-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Core Stack
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {profile.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-white/90 transition-colors duration-300 hover:border-blue-400/40 hover:text-blue-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </FadeSection>
  );
};

export default Hero;
