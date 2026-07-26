import { CONTATO, linkWhatsapp } from "../../config/contato";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";

export function CtaFinal() {
  return (
    <Section id="contato" variant="navy">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
          Vamos proteger o seu negócio juridicamente?
        </h2>
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
