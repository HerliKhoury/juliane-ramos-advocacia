import personaCoffeeDesk from "../../assets/persona/persona-work-coffee-desk.jpg";
import personaWritingNotes from "../../assets/persona/persona-work-writing-notes.jpg";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

type Etapa = {
  numero: string;
  titulo: string;
  descricao: string;
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

type EtapaItemProps = {
  etapa: Etapa;
};

function EtapaItem({ etapa }: EtapaItemProps) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-base font-semibold text-gold">
        {etapa.numero}
      </span>
      <div className="flex flex-col gap-1.5 pt-1.5">
        <h3 className="font-display text-xl font-semibold text-cream">
          {etapa.titulo}
        </h3>
        <p className="text-base text-cream/75">{etapa.descricao}</p>
      </div>
    </li>
  );
}

export function Processo() {
  const [primeiraEtapa, segundaEtapa, terceiraEtapa, quartaEtapa] = ETAPAS;

  return (
    <Section id="processo" variant="navy">
      <Container className="flex flex-col gap-12">
        <h2 className="font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
          Como Trabalho
        </h2>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <img
            src={personaCoffeeDesk}
            alt="Juliane Ramos trabalhando em sua mesa com um café"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-lg object-cover lg:aspect-auto lg:h-[420px] lg:flex-1"
          />
          <ol className="flex flex-col gap-8 lg:flex-1">
            <EtapaItem etapa={primeiraEtapa} />
            <EtapaItem etapa={segundaEtapa} />
          </ol>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-16">
          <img
            src={personaWritingNotes}
            alt="Juliane Ramos anotando durante o desenvolvimento de um caso"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-lg object-cover lg:aspect-auto lg:h-[420px] lg:flex-1"
          />
          <ol className="flex flex-col gap-8 lg:flex-1" start={3}>
            <EtapaItem etapa={terceiraEtapa} />
            <EtapaItem etapa={quartaEtapa} />
          </ol>
        </div>
      </Container>
    </Section>
  );
}
