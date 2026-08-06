import { DownloadIcon } from "@/assets/icons";
import { buttonClasses } from "@/libs/buttonClasses";
import { publicFileExists } from "@/libs/publicFile";
import { resume } from "@/data/resume";

const DownloadResumeButton = ({ className = "" }: { className?: string }) => {
  const available = publicFileExists(resume.fileUrl);
  const classes = buttonClasses({ size: "md", className });

  if (!available) {
    return (
      <span
        aria-disabled="true"
        title={`Add public${resume.fileUrl} to enable downloads`}
        className={`${classes} cursor-not-allowed opacity-40`}
      >
        <DownloadIcon className="h-4 w-4" />
        Download Resume
      </span>
    );
  }

  return (
    <a href={encodeURI(resume.fileUrl)} download className={classes}>
      <DownloadIcon className="h-4 w-4" />
      Download Resume
    </a>
  );
};

export default DownloadResumeButton;
