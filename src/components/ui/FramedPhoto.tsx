import { ResponsiveImage } from "./ResponsiveImage";

type PictureSource = {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>;
};

type FramedPhotoProps = {
  picture: PictureSource;
  alt: string;
  className?: string;
  priority?: boolean;
};

// The offset gold rule behind each documentary photo reads as a mounted
// print in a formal portfolio rather than a generic rounded card.
export function FramedPhoto({ picture, alt, className = "", priority }: FramedPhotoProps) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-gold/50 sm:-bottom-4 sm:-right-4"
      />
      <ResponsiveImage
        picture={picture}
        alt={alt}
        priority={priority}
        className={`relative rounded-lg shadow-[0_20px_45px_-22px_rgba(0,0,0,0.5)] ${className}`}
      />
    </div>
  );
}
