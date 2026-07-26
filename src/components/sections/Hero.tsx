import personaHeroCutout from "../../assets/persona/persona-hero-white-blazer-cutout.png?format=webp;png&w=480;900&as=picture";
import { linkWhatsapp } from "../../config/contato";
import { Reveal } from "../motion/Reveal";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { CutoutPortrait } from "../ui/CutoutPortrait";

export function Hero() {
  return (
    <Section variant="cream" className="overflow-hidden">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-10">
        <div className="order-1 lg:order-2 lg:flex-[1.05] lg:-mr-6 xl:-mr-12">
          <CutoutPortrait
            picture={personaHeroCutout}
            alt="Juliane Ramos, advogada especialista em contratos e compliance"
            priority
            className="aspect-[4/5] w-full lg:aspect-auto lg:h-[600px]"
          />
        </div>

        <div className="order-2 flex flex-col items-start gap-5 lg:order-1 lg:flex-1">
          <Reveal className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-gold-ink uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-gold" />
            Advocacia Contratual &amp; Compliance
          </Reveal>
          <Reveal
            as="h1"
            delayStep={1}
            className="font-display text-4xl leading-[1.08] font-semibold text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Segurança jurídica para decisões que não podem dar errado.
          </Reveal>
          <Reveal delayStep={2} className="max-w-lg text-lg text-muted">
            Assessoria especializada na elaboração, revisão e negociação de
            contratos, e na estruturação de programas de compliance sob
            medida para o seu negócio.
          </Reveal>
          <Reveal
            delayStep={3}
            className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Button href={linkWhatsapp()} variant="primary">
              Agende uma consulta
            </Button>
            <a
              href="#servicos"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Conheça as áreas de atuação
              <span
                aria-hidden="true"
                className="h-px w-9 origin-left scale-x-[0.67] bg-ink transition-[transform,background-color] duration-300 group-hover:scale-x-100 group-hover:bg-gold"
              />
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
