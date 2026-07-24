export const CONTATO = {
  whatsapp: "5500000000000", // TODO: substituir pelo número real (código do país + DDD + número)
  whatsappMensagemPadrao: "Olá! Gostaria de agendar uma consulta sobre contratos/compliance.",
  email: "contato@julianeramosadvocacia.com.br", // TODO: confirmar e-mail real
  cidadeUf: "Cidade/UF", // TODO: preencher
  oab: "OAB/UF 000.000", // TODO: preencher número real de inscrição
  instagram: "https://instagram.com/", // TODO: preencher usuário real
  linkedin: "https://linkedin.com/", // TODO: preencher perfil real
} as const;

export const linkWhatsapp = (mensagem = CONTATO.whatsappMensagemPadrao) =>
  `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(mensagem)}`;
