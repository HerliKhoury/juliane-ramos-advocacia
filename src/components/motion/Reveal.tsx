import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger step index; multiplied into a delay so sibling reveals cascade. */
  delayStep?: number;
};

export function Reveal({ children, as: Tag = "div", className = "", delayStep = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      data-reveal
      data-visible={inView}
      style={{ "--reveal-delay": `${delayStep * 110}ms` } as CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
