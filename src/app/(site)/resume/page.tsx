import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DownloadResumeButton from "@/components/Common/DownloadResumeButton";
import SkillList from "@/components/Common/SkillList";
import { profile } from "@/data/profile";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume | Hondra's Portfolio",
  description: `Resume for ${profile.name}, ${profile.title}.`,
};

export default function ResumePage() {
  return (
    <>
      <Breadcrumb pageTitle="Resume" />

      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 xl:px-0">
          <div className="flex justify-center">
            <DownloadResumeButton />
          </div>

          <Card className="mt-10 border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-dark-4">
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-white/80">
                {resume.summary}
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6 border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-dark-4">
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SkillList skills={profile.skills} />
            </CardContent>
          </Card>

          <Card className="mt-6 border-white/10 bg-white/[0.03] backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-sm font-semibold uppercase tracking-wide text-dark-4">
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-6">
                {resume.experience.map((job, index) => (
                  <li key={`${job.company}-${job.role}`}>
                    {index > 0 && <Separator className="mb-6 bg-white/10" />}
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <p className="font-semibold text-white">
                        {job.role} · {job.company}
                      </p>
                      <Badge
                        variant="outline"
                        className="border-blue-400/30 bg-blue-500/10 text-blue-300"
                      >
                        {job.start} – {job.end}
                      </Badge>
                    </div>
                    <ul className="mt-3 space-y-1.5">
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
            </CardContent>
          </Card>

          {resume.education.length > 0 && (
            <Card className="mt-6 border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-sm font-semibold uppercase tracking-wide text-dark-4">
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
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
              </CardContent>
            </Card>
          )}

          {resume.certifications.length > 0 && (
            <Card className="mt-6 border-white/10 bg-white/[0.03] backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-sm font-semibold uppercase tracking-wide text-dark-4">
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
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
                        <p className="font-semibold text-white">
                          {cert.name}
                        </p>
                      )}
                      <p className="text-sm text-dark-4">
                        {cert.issuer} · {cert.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  );
}
