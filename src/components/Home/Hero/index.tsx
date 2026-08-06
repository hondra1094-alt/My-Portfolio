import ButtonLink from "@/components/Common/ButtonLink";
import { profile } from "@/data/profile";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[50vh] items-center pb-10 pt-35 md:pt-24"
    >
      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8 xl:px-0">
        <div className="animate-fade-up motion-reduce:animate-none">
          <p className="hero-subtitle-text text-xl font-medium sm:text-2xl lg:text-3xl">
            Hi, I&apos;m
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:mt-4 xl:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-blue-300 sm:text-2xl lg:mt-5 lg:text-3xl">
            {profile.title}
          </p>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-dark-4 sm:text-lg lg:mt-8">
            {profile.introduction}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:mt-12 lg:gap-6">
            <ButtonLink href="/projects">View Projects</ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`} variant="secondary">
              Get In Touch
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
