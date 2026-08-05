import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { getInitials } from "@/libs/getInitials";

const AboutSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-[720px] px-4 py-20 text-center sm:px-8 lg:py-25 xl:px-0">
        <div className="about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full"></div>

        <div className="relative mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full border border-white/10 shadow-glass sm:h-44 sm:w-44">
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

        <span className="hero-subtitle-text mb-5 block font-semibold">
          About Me
        </span>

        <h2 className="mb-5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
          {profile.name} — {profile.title}
        </h2>
        <p className="mx-auto mb-9 max-w-2xl font-medium">
          {profile.introduction}
        </p>

        <Link
          href="/projects"
          className="hero-button-gradient wave-button focus-ring inline-flex rounded-lg px-7 py-3 font-medium text-white hover:opacity-80"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
