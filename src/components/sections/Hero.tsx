import personaHero from "../../assets/persona/persona-hero-white-blazer.jpg";
import { linkWhatsapp } from "../../config/contato";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <Section variant="cream">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="order-1 lg:order-2 lg:flex-1">
          <img
            src={personaHero}
            alt="Juliane Ramos, advogada especialista em contratos e compliance"
            loading="eager"
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-lg object-cover lg:aspect-auto lg:h-[560px]"
          />
        </div>

        <div className="order-2 flex flex-col items-start gap-5 lg:order-1 lg:flex-1">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Advocacia Contratual &amp; Compliance
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Segurança jurídica para decisões que não podem dar errado.
          </h1>
          <p className="text-lg text-muted">
            Assessoria especializada na elaboração, revisão e negociação de
            contratos, e na estruturação de programas de compliance sob
            medida para o seu negócio.
          </p>
          <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={linkWhatsapp()} variant="primary">
              Agende uma consulta
            </Button>
            <a
              href="#servicos"
              className="text-sm font-semibold text-ink underline underline-offset-4 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Conheça as áreas de atuação
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
