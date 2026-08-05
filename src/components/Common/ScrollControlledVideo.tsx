"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ScrollControlledVideo = ({
  videoUrl,
  posterUrl,
}: {
  videoUrl?: string;
  posterUrl?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);

    const onChange = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches);

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || !videoUrl || !videoReady) return;

    const video = videoRef.current;
    if (!video || !video.duration) return;

    let ticking = false;
    let seeking = false;
    let pendingProgress: number | null = null;

    // Setting `currentTime` starts an async decode; issuing another one
    // before the browser finishes the last is what causes the stutter.
    // Gate new seeks on `seeked` so we only ever chase the latest scroll
    // position instead of queuing every intermediate frame.
    const applyProgress = (progress: number) => {
      const clamped = Math.min(Math.max(progress, 0), 1);

      if (seeking) {
        pendingProgress = clamped;
        return;
      }

      video.currentTime = clamped * video.duration;
    };

    const currentProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      return scrollable > 0 ? window.scrollY / scrollable : 0;
    };

    const onSeeking = () => {
      seeking = true;
    };

    const onSeeked = () => {
      seeking = false;
      if (pendingProgress !== null) {
        const next = pendingProgress;
        pendingProgress = null;
        applyProgress(next);
      }
    };

    const scrub = () => {
      ticking = false;
      applyProgress(currentProgress());
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(scrub);
    };

    video.addEventListener("seeking", onSeeking);
    video.addEventListener("seeked", onSeeked);
    window.addEventListener("scroll", onScroll, { passive: true });
    scrub();

    return () => {
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion, videoUrl, videoReady]);

  const showVideo = Boolean(videoUrl) && !reducedMotion;
  const showPoster = !showVideo && Boolean(posterUrl);

  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {showVideo ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={videoUrl}
          poster={posterUrl}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={() => setVideoReady(true)}
        />
      ) : showPoster ? (
        <Image
          src={posterUrl as string}
          alt=""
          fill
          priority
          className="object-cover"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-b from-navy-950 via-navy-900 to-charcoal-900" />
      )}
      <div className="absolute inset-0 bg-navy-950/55" />
    </div>
  );
};

export default ScrollControlledVideo;
