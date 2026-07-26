import { useLayoutEffect, useRef, useState } from "react";
import { CONTATO, linkWhatsapp } from "../../config/contato";
import { useInView } from "../../hooks/useInView";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

const WAVE_HEIGHT = 12;
const WAVE_STEP = 12;

// Built in real pixel units (not stretched from a fixed viewBox) so the
// stroke never hits the non-uniform-scale rendering dropouts that
// `preserveAspectRatio="none"` + `vector-effect="non-scaling-stroke"`
// produced in Chromium when the wave was scaled ~2.5x horizontally.
function buildWavePath(width: number) {
  const baseline = WAVE_HEIGHT / 2;
  const amplitude = WAVE_HEIGHT * 0.35;
  let d = `M0 ${baseline}`;
  let x = 0;
  let up = true;
  while (x < width) {
    const nextX = Math.min(x + WAVE_STEP, width);
    const midX = (x + nextX) / 2;
    d += ` Q${midX} ${up ? baseline - amplitude : baseline + amplitude} ${nextX} ${baseline}`;
    x = nextX;
    up = !up;
  }
  return d;
}

export function CtaFinal() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [width, setWidth] = useState(280);
  const [pathLength, setPathLength] = useState(1000);

  useLayoutEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const update = () => setWidth(Math.round(node.getBoundingClientRect().width));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (pathRef.current) setPathLength(pathRef.current.getTotalLength());
  }, [width]);

  return (
    <Section id="contato" variant="navy">
      <Container className="flex flex-col items-center gap-6 text-center">
        <div ref={ref} className="relative inline-block pb-4">
          <h2 className="font-display text-3xl leading-tight font-semibold text-cream sm:text-4xl">
            Vamos proteger o seu negócio juridicamente?
          </h2>
          <div ref={wrapRef} className="absolute inset-x-0 bottom-0 h-3">
            <svg
              aria-hidden="true"
              width={width}
              height={WAVE_HEIGHT}
              viewBox={`0 0 ${width} ${WAVE_HEIGHT}`}
              className="h-3 w-full text-gold"
              fill="none"
            >
              <path
                ref={pathRef}
                data-draw-path
                d={buildWavePath(width)}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: inView ? 0 : pathLength,
                }}
              />
            </svg>
          </div>
        </div>
        <p className="max-w-xl text-lg text-cream/80">
          Fale agora e receba uma orientação inicial sobre o seu caso.
        </p>
        <div className="mt-2 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Button
            href={linkWhatsapp()}
            variant="primary"
            className="w-full sm:w-auto"
          >
            Chamar no WhatsApp
          </Button>
          <Button
            href={`mailto:${CONTATO.email}`}
            variant="outline-inverse"
            className="w-full sm:w-auto"
          >
            Enviar e-mail
          </Button>
        </div>
      </Container>
    </Section>
  );
}
