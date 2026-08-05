import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BentoCard from "@/components/Common/BentoCard";
import DownloadResumeButton from "@/components/Common/DownloadResumeButton";
import SkillList from "@/components/Common/SkillList";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume | Portfolio",
  description: `Resume for ${profile.name}, ${profile.title}.`,
};

export default function ResumePage() {
  return (
    <>
      <Breadcrumb pageTitle="Resume" />

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 xl:px-0">
          <div className="flex justify-center">
            <DownloadResumeButton />
          </div>

          <BentoCard className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
              Professional Summary
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/80">
              {resume.summary}
            </p>
          </BentoCard>

          <BentoCard className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
              Skills
            </h2>
            <div className="mt-3">
              <SkillList skills={profile.skills} />
            </div>
          </BentoCard>

          <BentoCard className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
              Work Experience
            </h2>
            <ol className="mt-4 space-y-6">
              {resume.experience.map((job) => (
                <li
                  key={`${job.company}-${job.role}`}
                  className="border-l border-white/10 pl-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="font-semibold text-white">
                      {job.role} · {job.company}
                    </p>
                    <p className="text-sm text-dark-4">
                      {job.start} – {job.end}
                    </p>
                  </div>
                  <ul className="mt-2 space-y-1.5">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm text-white/70"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </BentoCard>

          {resume.education.length > 0 && (
            <BentoCard className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
                Education
              </h2>
              <ul className="mt-4 space-y-4">
                {resume.education.map((edu) => (
                  <li
                    key={`${edu.institution}-${edu.degree}`}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                  >
                    <p className="font-semibold text-white">{edu.degree}</p>
                    <p className="text-sm text-dark-4">
                      {edu.institution} · {edu.start} – {edu.end}
                    </p>
                  </li>
                ))}
              </ul>
            </BentoCard>
          )}

          {resume.certifications.length > 0 && (
            <BentoCard className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
                Certifications
              </h2>
              <ul className="mt-4 space-y-3">
                {resume.certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                  >
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring font-semibold text-white hover:text-blue-300"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      <p className="font-semibold text-white">{cert.name}</p>
                    )}
                    <p className="text-sm text-dark-4">
                      {cert.issuer} · {cert.date}
                    </p>
                  </li>
                ))}
              </ul>
            </BentoCard>
          )}
        </div>
      </section>
    </>
  );
}
