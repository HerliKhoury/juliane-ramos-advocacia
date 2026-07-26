import personaAbout from "../../assets/persona/persona-about-studio-portrait.jpg?format=webp;jpg&w=480;900&as=picture";
import { CONTATO } from "../../config/contato";
import { Reveal } from "../motion/Reveal";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { FramedPhoto } from "../ui/FramedPhoto";

const CREDENCIAIS = [
  `OAB ${CONTATO.oab}`,
  "Direito Contratual",
  "Compliance & LGPD",
  "Atendimento consultivo",
];

export function Sobre() {
  return (
    <Section id="sobre" variant="blush-tint">
      <Container className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">
        <Reveal className="lg:flex-1">
          <FramedPhoto
            picture={personaAbout}
            alt="Juliane Ramos em ambiente de escritório, retrato profissional"
            className="aspect-[4/5] w-full lg:aspect-auto lg:h-[560px]"
          />
        </Reveal>

        <div className="flex flex-col items-start gap-6 lg:flex-1">
          <Reveal
            as="h2"
            className="font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl"
          >
            Juliane Ramos
          </Reveal>
          <Reveal delayStep={1} className="flex flex-col gap-5">
            <p className="text-lg text-muted">
              Com trajetória dedicada ao direito empresarial, Juliane Ramos
              construiu sua atuação em torno de um objetivo claro: dar
              segurança jurídica para que decisões de negócio possam ser
              tomadas com confiança.
            </p>
            <p className="text-lg text-muted">
              Sua especialização em direito contratual e compliance permite
              antecipar riscos antes que se tornem problemas, com uma
              abordagem preventiva e orientada a resultados práticos.
            </p>
            <p className="text-lg text-muted">
              O atendimento é próximo e consultivo, com linguagem clara e
              acessível, para que cada cliente entenda exatamente onde está
              e para onde caminha.
            </p>
          </Reveal>
          <Reveal
            delayStep={2}
            as="ul"
            className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-navy/15 pt-6"
          >
            {CREDENCIAIS.map((credencial, index) => (
              <li key={credencial} className="flex items-center gap-5">
                {index > 0 && (
                  <span aria-hidden="true" className="hidden h-3.5 w-px bg-navy/25 sm:block" />
                )}
                <span className="text-sm font-semibold text-ink">{credencial}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
