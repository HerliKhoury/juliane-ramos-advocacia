type PictureSource = {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>;
};

type ResponsiveImageProps = {
  picture: PictureSource;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

// Column-width photos in the two-column sections land around 450-560px on
// desktop and full viewport width on mobile.
const DEFAULT_SIZES = "(min-width: 1024px) 500px, 100vw";

export function ResponsiveImage({
  picture,
  alt,
  className = "",
  sizes = DEFAULT_SIZES,
  priority = false,
}: ResponsiveImageProps) {
  // `className` (sizing, aspect-ratio, flex-grow, etc.) belongs on this
  // element: in a flex/grid layout, `<picture>` is the actual item being
  // sized, not the `<img>` nested inside it.
  return (
    <picture className={className}>
      {Object.entries(picture.sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? undefined : "async"}
        fetchPriority={priority ? "high" : undefined}
        className="h-full w-full rounded-[inherit] object-cover"
      />
    </picture>
  );
}
