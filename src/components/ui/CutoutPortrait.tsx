import { ResponsiveImage } from "./ResponsiveImage";

type PictureSource = {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>;
};

type CutoutPortraitProps = {
  picture: PictureSource;
  alt: string;
  className?: string;
  priority?: boolean;
};

// A background-removed portrait floating over a navy mounting plate — the
// hero/credibility "meet Juliane" device.
export function CutoutPortrait({ picture, alt, className = "", priority }: CutoutPortraitProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-16 bottom-0 rounded-[1.75rem] bg-navy sm:inset-x-10 sm:top-24 sm:bottom-0"
      />
      <ResponsiveImage
        picture={picture}
        alt={alt}
        priority={priority}
        fit="contain"
        className="relative h-full w-full drop-shadow-[0_35px_50px_rgba(0,0,0,0.38)]"
      />
    </div>
  );
}
