import personaPortraitCloseup from "../../assets/persona/persona-portrait-closeup.jpg";
import { CONTATO } from "../../config/contato";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

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
    <Section id="credibilidade" variant="cream">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="lg:flex-1">
          <img
            src={personaPortraitCloseup}
            alt="Retrato de Juliane Ramos"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-lg object-cover lg:aspect-auto lg:h-[480px]"
          />
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-1">
          {/* Citação de autoria da própria advogada — não é testemunho de terceiro. */}
          <blockquote className="border-l-4 border-gold pl-5">
            <p className="font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              "Meu compromisso é traduzir a complexidade jurídica em decisões
              seguras para o seu negócio."
            </p>
            <footer className="mt-3 text-sm font-semibold text-muted">
              Juliane Ramos
            </footer>
          </blockquote>

          <ul className="flex flex-wrap gap-3">
            {MARCADORES.map((marcador) => (
              <li
                key={marcador}
                className="rounded-full border border-navy/15 bg-blush/15 px-4 py-2 text-sm font-semibold text-ink"
              >
                {marcador}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
