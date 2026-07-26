import { CONTATO, linkWhatsapp } from "../../config/contato";
import { Container } from "./Container";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

const LINK_CLASSES =
  "text-cream/80 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-3 md:py-20">
        <div className="flex flex-col gap-3">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="" className="h-9 w-9 rounded-md" />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-semibold text-gold">
                Juliane Ramos
              </span>
              <span className="text-xs text-cream/80">Advogada</span>
            </span>
          </a>
          <p className="max-w-xs text-sm text-cream/70">
            Advocacia Contratual &amp; Compliance
          </p>
          <div className="mt-2 flex items-center gap-4">
            <a
              href={CONTATO.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="-m-2.5 inline-flex size-11 items-center justify-center rounded-md text-cream/80 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <IconeInstagram />
            </a>
            <a
              href={CONTATO.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="-m-2.5 inline-flex size-11 items-center justify-center rounded-md text-cream/80 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <IconeLinkedin />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Navegação
          </span>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm ${LINK_CLASSES}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Contato
          </span>
          <a href={`mailto:${CONTATO.email}`} className={`text-sm ${LINK_CLASSES}`}>
            {CONTATO.email}
          </a>
          <a href={linkWhatsapp()} target="_blank" rel="noreferrer noopener" className={`text-sm ${LINK_CLASSES}`}>
            WhatsApp
          </a>
          <span className="text-sm text-cream/80">{CONTATO.cidadeUf}</span>
          <span className="text-sm text-cream/80">{CONTATO.oab}</span>
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="py-6">
          <p className="text-center text-xs text-cream/60">
            © {new Date().getFullYear()} Juliane Ramos Advocacia. Todos os direitos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}

function IconeInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function IconeLinkedin() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M12 17v-4.5a2.5 2.5 0 0 1 5 0V17M12 17v-7" />
    </svg>
  );
}
