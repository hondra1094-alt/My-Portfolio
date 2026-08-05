import { DownloadIcon } from "@/assets/icons";
import { publicFileExists } from "@/libs/publicFile";
import { resume } from "@/data/resume";

const DownloadResumeButton = ({ className = "" }: { className?: string }) => {
  const available = publicFileExists(resume.fileUrl);

  if (!available) {
    return (
      <span
        aria-disabled="true"
        title={`Add public${resume.fileUrl} to enable downloads`}
        className={`hero-button-gradient inline-flex cursor-not-allowed items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white opacity-40 ${className}`}
      >
        <DownloadIcon className="h-4 w-4" />
        Download Resume
      </span>
    );
  }

  return (
    <a
      href={encodeURI(resume.fileUrl)}
      download
      className={`hero-button-gradient wave-button focus-ring inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:opacity-80 ${className}`}
    >
      <DownloadIcon className="h-4 w-4" />
      Download Resume
    </a>
  );
};

export default DownloadResumeButton;
