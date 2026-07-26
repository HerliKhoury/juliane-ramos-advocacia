import type { CSSProperties } from "react";
import personaCoffeeDesk from "../../assets/persona/persona-work-coffee-desk.jpg?format=webp;jpg&w=480;900&as=picture";
import personaWritingNotes from "../../assets/persona/persona-work-writing-notes.jpg?format=webp;jpg&w=480;900&as=picture";
import { useInView } from "../../hooks/useInView";
import { Reveal } from "../motion/Reveal";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { FramedPhoto } from "../ui/FramedPhoto";

type Etapa = {
  numero: string;
  titulo: string;
  descricao: string;
};

type PictureSource = {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>;
};

const ETAPAS: Etapa[] = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao:
      "Entendimento do cenário contratual e regulatório do cliente, identificando riscos e prioridades.",
  },
  {
    numero: "02",
    titulo: "Proposta",
    descricao:
      "Plano de ação e escopo claros, com prazos e honorários definidos antes de qualquer trabalho, sem surpresas.",
  },
  {
    numero: "03",
    titulo: "Execução",
    descricao:
      "Elaboração, revisão ou estruturação do que foi acordado, com comunicação constante sobre o andamento.",
  },
  {
    numero: "04",
    titulo: "Acompanhamento",
    descricao:
      "Suporte contínuo e ajustes conforme o negócio evolui, garantindo que a segurança jurídica se mantenha no tempo.",
  },
];

type EtapaBlockProps = {
  picture: PictureSource;
  alt: string;
  etapas: [Etapa, Etapa];
  reverse?: boolean;
};

// Each block owns one IntersectionObserver so the connecting spine draws in
// sync with its own pair of steps, not the whole section at once.
function EtapaBlock({ picture, alt, etapas, reverse = false }: EtapaBlockProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div data-reveal data-visible={inView} className="lg:flex-1">
        <FramedPhoto
          picture={picture}
          alt={alt}
          className="aspect-[4/5] w-full lg:aspect-auto lg:h-[440px]"
        />
      </div>
      <ol className="relative flex flex-col gap-10 lg:flex-1">
        <span
          aria-hidden="true"
          data-draw-line
          data-visible={inView}
          className="absolute top-5 bottom-5 left-5 hidden w-px bg-gold/35 sm:block"
        />
        {etapas.map((etapa, index) => (
          <li
            key={etapa.numero}
            data-reveal
            data-visible={inView}
            style={{ "--reveal-delay": `${(index + 1) * 150}ms` } as CSSProperties}
            className="flex items-start gap-4"
          >
            <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-navy font-display text-base font-semibold text-gold">
              {etapa.numero}
            </span>
            <div className="flex flex-col gap-1.5 pt-1.5">
              <h3 className="font-display text-xl font-semibold text-cream">{etapa.titulo}</h3>
              <p className="text-base text-cream/75">{etapa.descricao}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Processo() {
  const [primeira, segunda, terceira, quarta] = ETAPAS;

  return (
    <Section id="processo" variant="navy">
      <Container className="flex flex-col gap-14">
        <Reveal
          as="h2"
          className="font-display text-3xl leading-tight font-semibold text-cream sm:text-4xl"
        >
          Como Trabalho
        </Reveal>

        <div className="flex flex-col gap-16">
          <EtapaBlock
            picture={personaCoffeeDesk}
            alt="Juliane Ramos trabalhando em sua mesa com um café"
            etapas={[primeira, segunda]}
          />
          <EtapaBlock
            picture={personaWritingNotes}
            alt="Juliane Ramos anotando durante o desenvolvimento de um caso"
            etapas={[terceira, quarta]}
            reverse
          />
        </div>
      </Container>
    </Section>
  );
}
