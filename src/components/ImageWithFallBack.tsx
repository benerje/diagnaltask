import React, { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  alt: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <img
      src={imageError ? fallbackSrc : src}
      alt={alt}
      loading="lazy"
      className={imageError ? "fallback-image" : "card-image"}
      onError={handleImageError}
    />
  );
};

export default ImageWithFallback;
