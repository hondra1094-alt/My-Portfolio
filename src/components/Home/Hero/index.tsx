import Image from "next/image";
import Link from "next/link";
import BentoCard from "@/components/Common/BentoCard";
import SkillList from "@/components/Common/SkillList";
import ProjectPreviewCard from "@/components/Projects/ProjectPreviewCard";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { getInitials } from "@/libs/getInitials";

// Tailwind's scanner needs each complete class string to appear literally in
// this file, so entrance delays are a static lookup rather than interpolated.
const ENTRANCE = [
  "animate-fade-up motion-reduce:animate-none [animation-delay:0ms]",
  "animate-fade-up motion-reduce:animate-none [animation-delay:60ms]",
  "animate-fade-up motion-reduce:animate-none [animation-delay:120ms]",
  "animate-fade-up motion-reduce:animate-none [animation-delay:180ms]",
  "animate-fade-up motion-reduce:animate-none [animation-delay:240ms]",
  "animate-fade-up motion-reduce:animate-none [animation-delay:300ms]",
  "animate-fade-up motion-reduce:animate-none [animation-delay:360ms]",
  "animate-fade-up motion-reduce:animate-none [animation-delay:420ms]",
  "animate-fade-up motion-reduce:animate-none [animation-delay:480ms]",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 pb-28 pt-35 md:pt-40 xl:pt-45"
    >
      <div className="relative z-1 mx-auto max-w-6xl px-4 sm:px-8 xl:px-0">
        <h1 className="sr-only">
          {profile.name} — {profile.title}
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:auto-rows-[minmax(160px,auto)] lg:gap-7">
          {/* Name, title, introduction */}
          <BentoCard
            className={`glass-card-hover wave-card-hover flex flex-col justify-center sm:col-span-2 lg:col-span-2 lg:row-span-2 ${ENTRANCE[0]}`}
          >
            <p className="hero-subtitle-text text-sm font-medium">
              Hi, I&apos;m
            </p>
            <p
              aria-hidden="true"
              className="mt-1 text-3xl font-extrabold text-white sm:text-4xl xl:text-5xl"
            >
              {profile.name}
            </p>
            <p className="mt-2 text-lg font-medium text-blue-300">
              {profile.title}
            </p>
            <p className="mt-4 max-w-md text-sm text-dark-4 sm:text-base">
              {profile.introduction}
            </p>
          </BentoCard>

          {/* Profile image */}
          <BentoCard
            padded={false}
            className={`glass-card-hover wave-card-hover sm:col-span-1 lg:row-span-2 ${ENTRANCE[1]}`}
          >
            <div className="relative h-full min-h-[150px] w-full">
              {profile.avatarUrl ? (
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-charcoal-900 text-4xl font-bold text-white/70"
                >
                  {getInitials(profile.name)}
                </div>
              )}
            </div>
          </BentoCard>

          {/* Skills */}
          <BentoCard
            className={`glass-card-hover wave-card-hover sm:col-span-1 lg:row-span-2 ${ENTRANCE[2]}`}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
              Skills
            </h2>
            <div className="mt-3">
              <SkillList skills={profile.skills} />
            </div>
          </BentoCard>

          {/* Resume */}
          <BentoCard
            className={`glass-card-hover wave-card-hover flex flex-col justify-between ${ENTRANCE[3]}`}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
              Resume
            </h2>
            <Link
              href="/resume"
              className="focus-ring mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-blue-200"
            >
              View Resume
            </Link>
          </BentoCard>

          {/* Contact */}
          <BentoCard
            className={`glass-card-hover wave-card-hover flex flex-col justify-between ${ENTRANCE[4]}`}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
              Contact
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring mt-3 inline-flex w-fit items-center gap-1.5 break-all text-sm font-medium text-blue-300 hover:text-blue-200"
            >
              {profile.email}
            </a>
          </BentoCard>

          {/* Social links */}
          <BentoCard
            className={`glass-card-hover wave-card-hover flex flex-col justify-between ${ENTRANCE[5]}`}
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
              Elsewhere
            </h2>
            <div className="mt-3 flex items-center gap-3">
              {profile.socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="focus-ring rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors duration-300 hover:text-blue-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </BentoCard>

          {/* Featured projects */}
          {projects.map((project, index) => (
            <ProjectPreviewCard
              key={project.slug}
              project={project}
              className={`${
                index === 0
                  ? "min-h-[220px] sm:col-span-2 lg:col-span-1"
                  : "min-h-[220px] sm:col-span-2 lg:col-span-2 lg:row-span-2"
              } ${ENTRANCE[6 + index]}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
