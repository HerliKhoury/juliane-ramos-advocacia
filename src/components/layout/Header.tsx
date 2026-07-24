import { useEffect, useRef, useState } from "react";
import { linkWhatsapp } from "../../config/contato";
import { Button } from "../ui/Button";
import { Container } from "./Container";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

const NAV_LINK_CLASSES =
  "text-cream transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    function handlePointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      ) {
        return;
      }
      setIsMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/favicon.svg" alt="" className="h-9 w-9 rounded-md" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold text-gold md:text-xl">
              Juliane Ramos
            </span>
            <span className="text-xs text-cream/80">Advogada</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-medium ${NAV_LINK_CLASSES}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={linkWhatsapp()} variant="primary">
            Fale comigo
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden"
        >
          {isMenuOpen ? <IconeFechar /> : <IconeMenu />}
        </button>
      </Container>

      {isMenuOpen && (
        <div
          id="menu-mobile"
          ref={menuRef}
          className="border-t border-cream/10 bg-navy px-5 pb-6 pt-2 md:hidden"
        >
          <nav aria-label="Principal" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-md px-2 py-3 text-base font-medium ${NAV_LINK_CLASSES}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button href={linkWhatsapp()} variant="primary" className="mt-4 w-full">
            Fale comigo
          </Button>
        </div>
      )}
    </header>
  );
}

function IconeMenu() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function IconeFechar() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
