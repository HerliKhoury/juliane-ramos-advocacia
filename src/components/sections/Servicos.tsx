import type { ReactNode } from "react";
import { Reveal } from "../motion/Reveal";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

type Servico = {
  titulo: string;
  descricao: string;
  icone: ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const SERVICOS_CONTRATOS: Servico[] = [
  {
    titulo: "Elaboração de Contratos",
    descricao:
      "Redação de contratos sob medida, com cláusulas claras que protegem os interesses do seu negócio.",
    icone: (
      <svg {...iconProps}>
        <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M14 3v4h4" />
        <path d="M8.5 12h7M8.5 15h7M8.5 9h3" />
      </svg>
    ),
  },
  {
    titulo: "Revisão Contratual",
    descricao:
      "Análise minuciosa de contratos existentes para identificar riscos e propor ajustes antes da assinatura.",
    icone: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4.3-4.3" />
        <path d="M8.5 11.5 10 13l3.5-3.5" />
      </svg>
    ),
  },
  {
    titulo: "Negociação Contratual",
    descricao:
      "Suporte na mesa de negociação para alinhar termos comerciais e jurídicos de forma equilibrada.",
    icone: (
      <svg {...iconProps}>
        <path d="M4 7h3l3 3-3 3H4z" />
        <path d="M20 7h-3l-3 3 3 3h3z" />
        <path d="M10 10h4" />
      </svg>
    ),
  },
];

const SERVICOS_COMPLIANCE: Servico[] = [
  {
    titulo: "Programas de Integridade",
    descricao:
      "Estruturação de programas de compliance alinhados ao porte e aos riscos específicos da empresa.",
    icone: (
      <svg {...iconProps}>
        <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    titulo: "Adequação à LGPD",
    descricao:
      "Diagnóstico e adequação de processos de tratamento de dados pessoais às exigências da LGPD.",
    icone: (
      <svg {...iconProps}>
        <rect x="5" y="10.5" width="14" height="9.5" rx="1.5" />
        <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
        <path d="M12 14.5v2.5" />
      </svg>
    ),
  },
  {
    titulo: "Due Diligence & Políticas Internas",
    descricao:
      "Investigação prévia e criação de políticas internas que sustentam decisões seguras de negócio.",
    icone: (
      <svg {...iconProps}>
        <path d="M4 20V6a1 1 0 0 1 1-1h9l6 6v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
        <path d="M14 5v5a1 1 0 0 0 1 1h5" />
        <path d="M8 13h4M8 16h6" />
      </svg>
    ),
  },
];

type ServicoGrupoProps = {
  titulo: string;
  servicos: Servico[];
};

// An index list, not a grid of icon cards — each row reads like an entry in
// a dossier's table of contents, with the numeral as quiet background type.
function ServicoGrupo({ titulo, servicos }: ServicoGrupoProps) {
  return (
    <div className="flex flex-col gap-6">
      <Reveal
        as="span"
        className="text-sm font-semibold tracking-[0.08em] text-gold-ink uppercase"
      >
        {titulo}
      </Reveal>
      <ul className="divide-y divide-navy/10 border-y border-navy/10">
        {servicos.map((servico, index) => (
          <Reveal
            key={servico.titulo}
            as="li"
            delayStep={index + 1}
            className="group flex flex-col gap-3 py-7 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <span
              aria-hidden="true"
              className="font-display text-3xl leading-none font-semibold text-gold/40 transition-colors duration-300 group-hover:text-gold/75 sm:w-12 sm:shrink-0"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="inline-flex items-center gap-2.5 font-display text-xl font-semibold text-ink">
                <span className="text-gold [&>svg]:h-5 [&>svg]:w-5">{servico.icone}</span>
                {servico.titulo}
              </h3>
              <p className="max-w-xl text-base text-muted">{servico.descricao}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function Servicos() {
  return (
    <Section id="servicos" variant="cream">
      <Container className="flex flex-col gap-14">
        <Reveal
          as="h2"
          className="font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl"
        >
          Duas frentes, um mesmo compromisso
        </Reveal>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <ServicoGrupo titulo="Contratos" servicos={SERVICOS_CONTRATOS} />
          <ServicoGrupo titulo="Compliance" servicos={SERVICOS_COMPLIANCE} />
        </div>
      </Container>
    </Section>
  );
}
