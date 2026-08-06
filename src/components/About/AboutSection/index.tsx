import Image from "next/image";
import ButtonLink from "@/components/Common/ButtonLink";
import { profile } from "@/data/profile";
import { getInitials } from "@/libs/getInitials";

const AboutSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-32 xl:px-0">
        <div className="about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full"></div>

        <div className="relative mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full border border-white/10 shadow-glass sm:h-44 sm:w-44 lg:mb-10 lg:h-52 lg:w-52">
          {profile.avatarUrl ? (
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              fill
              className="object-cover"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-charcoal-900 text-3xl font-bold text-white/70"
            >
              {getInitials(profile.name)}
            </div>
          )}
        </div>

        <span className="hero-subtitle-text mb-5 block text-xl font-semibold sm:text-2xl lg:mb-6 lg:text-3xl">
          About Me
        </span>

        <h2 className="mb-5 text-2xl font-extrabold text-white sm:text-4xl lg:mb-6 lg:text-5xl xl:text-heading-2">
          {profile.name} — {profile.title}
        </h2>
        <p className="mx-auto mb-9 max-w-2xl font-medium leading-relaxed lg:mb-12 lg:text-lg">
          {profile.introduction}
        </p>

        <ButtonLink href="/projects">View My Work</ButtonLink>
      </div>
    </section>
  );
};

export default AboutSection;
