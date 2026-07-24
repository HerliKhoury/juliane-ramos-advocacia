// Convenção mobile-first: estilizar primeiro para telas pequenas e usar os
// prefixos sm:/md:/lg: apenas para ajustes em telas maiores (nunca o inverso).
import type { ReactNode } from "react";

type SectionVariant = "cream" | "navy" | "blush-tint";

const VARIANT_CLASSES: Record<SectionVariant, string> = {
  cream: "bg-cream text-ink",
  navy: "bg-navy text-cream",
  "blush-tint": "bg-blush/15 text-ink",
};

type SectionProps = {
  id?: string;
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
};

export function Section({
  id,
  children,
  variant = "cream",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
