import { backgroundVideo } from "@/data/background";
import { publicFileExists } from "@/libs/publicFile";
import ScrollControlledVideo from "./ScrollControlledVideo";

const BackgroundVideo = () => {
  const videoUrl = publicFileExists(backgroundVideo.videoUrl)
    ? backgroundVideo.videoUrl
    : undefined;
  const posterUrl = publicFileExists(backgroundVideo.posterUrl)
    ? backgroundVideo.posterUrl
    : undefined;

  return <ScrollControlledVideo videoUrl={videoUrl} posterUrl={posterUrl} />;
};

export default BackgroundVideo;
