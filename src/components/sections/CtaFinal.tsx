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
          {/* Button outline é `border-navy text-navy`, invisível sobre fundo navy. O variant ghost
              também parte de `text-navy`; como utilities de mesma especificidade no Tailwind v4
              não seguem a ordem das classes no atributo, usamos `!` para garantir que os tons
              cream vençam sobre fundo navy. */}
          <Button
            href={`mailto:${CONTATO.email}`}
            variant="ghost"
            className="w-full border border-cream/60 text-cream! hover:bg-cream/10! sm:w-auto"
          >
            Enviar e-mail
          </Button>
        </div>
      </Container>
    </Section>
  );
}
