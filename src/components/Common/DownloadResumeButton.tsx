import { DownloadIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { publicFileExists } from "@/libs/publicFile";
import { resume } from "@/data/resume";

const DownloadResumeButton = ({ className = "" }: { className?: string }) => {
  const available = publicFileExists(resume.fileUrl);

  if (!available) {
    return (
      <Button
        type="button"
        size="lg"
        disabled
        title={`Add public${resume.fileUrl} to enable downloads`}
        className={className}
      >
        <DownloadIcon className="h-4 w-4" />
        Download Resume
      </Button>
    );
  }

  return (
    <Button asChild size="lg" className={className}>
      <a href={encodeURI(resume.fileUrl)} download>
        <DownloadIcon className="h-4 w-4" />
        Download Resume
      </a>
    </Button>
  );
};

export default DownloadResumeButton;
