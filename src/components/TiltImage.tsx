"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import Image from "next/image";

interface TiltImageProps {
  src: string;
  alt: string;
  className?: string;
}

// Extend DOM type to include `vanillaTilt`
interface TiltElement extends HTMLImageElement {
  vanillaTilt?: {
    destroy: () => void;
  };
}

const TiltImage: React.FC<TiltImageProps> = ({ src, alt, className }) => {
  const tiltRef = useRef<TiltElement | null>(null);

  useEffect(() => {
    const node = tiltRef.current;

    if (node) {
      VanillaTilt.init(node, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }

    return () => {
      node?.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <Image
      ref={tiltRef}
      src={src}
      alt={alt}
      width={860}
      height={250}
      quality={100}
      className={className}
    />
  );
};

export default TiltImage;
