import Link from "next/link";
import BentoCard from "@/components/Common/BentoCard";
import DownloadResumeButton from "@/components/Common/DownloadResumeButton";
import { resume } from "@/data/resume";

const ResumePreview = () => {
  const latestRole = resume.experience[0];

  return (
    <section id="resume" className="relative z-10 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 xl:px-0">
        <BentoCard className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-dark-4">
              Resume
            </h2>
            <p className="mt-2 max-w-xl text-base text-white/80">
              {resume.summary}
            </p>
            {latestRole && (
              <p className="mt-3 text-sm text-dark-4">
                Currently {latestRole.role} at {latestRole.company}
              </p>
            )}
          </div>

          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/resume"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-blue-400/40 hover:text-blue-300"
            >
              View Resume
            </Link>
            <DownloadResumeButton />
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default ResumePreview;
