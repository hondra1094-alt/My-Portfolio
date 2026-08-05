"use client";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { useState } from "react";

const ProjectGallery = ({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const openAt = (index: number) => {
    setSlide(index + 1);
    setToggler(!toggler);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => openAt(index)}
            aria-label={`Open screenshot ${index + 1} of ${images.length} for ${alt}`}
            className="focus-ring glass-card glass-card-hover relative aspect-video overflow-hidden"
          >
            <Image
              src={src}
              alt={`${alt} screenshot ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <FsLightbox toggler={toggler} sources={images} slide={slide} />
    </div>
  );
};

export default ProjectGallery;
