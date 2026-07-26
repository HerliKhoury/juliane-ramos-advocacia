import personaPortraitCutout from "../../assets/persona/persona-portrait-closeup-cutout.png?format=webp;png&w=480;900&as=picture";
import { CONTATO } from "../../config/contato";
import { Reveal } from "../motion/Reveal";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { CutoutPortrait } from "../ui/CutoutPortrait";

// Marcadores de confiança com dados objetivos — nenhum é um depoimento de
// cliente. Valores marcados com TODO são placeholders para revisão futura.
const MARCADORES = [
  "+X anos de atuação", // TODO: confirmar tempo real de atuação
  "Setores atendidos: [placeholder]", // TODO: listar setores reais atendidos
  `OAB ${CONTATO.oab}`,
  "Atendimento consultivo personalizado",
];

export function ProvaSocial() {
  return (
    <Section id="credibilidade" variant="cream" className="overflow-hidden">
      <Container className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">
        <Reveal className="lg:flex-1">
          <CutoutPortrait
            picture={personaPortraitCutout}
            alt="Retrato aproximado de Juliane Ramos, transmitindo confiança e proximidade com o cliente"
            className="aspect-[4/5] w-full lg:aspect-auto lg:h-[520px]"
          />
        </Reveal>

        <div className="flex flex-col items-start gap-8 lg:flex-1">
          <h2 className="sr-only">Credibilidade</h2>
          {/* Citação de autoria da própria advogada — não é testemunho de terceiro. */}
          <Reveal delayStep={1} as="blockquote" className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 -left-1 font-display text-8xl text-gold/25 select-none"
            >
              "
            </span>
            <p className="relative font-display text-2xl leading-snug font-semibold text-ink sm:text-3xl">
              Meu compromisso é traduzir a complexidade jurídica em decisões
              seguras para o seu negócio.
            </p>
            <footer className="mt-4 flex items-center gap-3 text-sm font-semibold text-muted">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              Juliane Ramos
            </footer>
          </Reveal>

          <Reveal
            delayStep={2}
            as="ul"
            className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-navy/15 pt-6"
          >
            {MARCADORES.map((marcador, index) => (
              <li key={marcador} className="flex items-center gap-5">
                {index > 0 && (
                  <span aria-hidden="true" className="hidden h-3.5 w-px bg-navy/25 sm:block" />
                )}
                <span className="text-sm font-semibold text-ink">{marcador}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
