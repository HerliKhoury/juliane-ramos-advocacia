import personaAbout from "../../assets/persona/persona-about-studio-portrait.jpg";
import { CONTATO } from "../../config/contato";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

const CREDENCIAIS = [
  `OAB ${CONTATO.oab}`,
  "Direito Contratual",
  "Compliance & LGPD",
  "Atendimento consultivo",
];

export function Sobre() {
  return (
    <Section id="sobre" variant="blush-tint">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="lg:flex-1">
          <img
            src={personaAbout}
            alt="Juliane Ramos em ambiente de escritório, retrato profissional"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-lg object-cover lg:aspect-auto lg:h-[560px]"
          />
        </div>

        <div className="flex flex-col items-start gap-5 lg:flex-1">
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Sobre Juliane Ramos
          </h2>
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
          <ul className="mt-2 flex flex-wrap gap-3">
            {CREDENCIAIS.map((credencial) => (
              <li
                key={credencial}
                className="rounded-full border border-navy/15 bg-cream px-4 py-2 text-sm font-semibold text-ink"
              >
                {credencial}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
