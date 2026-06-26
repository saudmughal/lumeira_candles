// =============================================
// Lumeira Handcrafted Candles
// Site / Contact Configuration
// Single source of truth for contact details.
// =============================================

const site = {
  brand: "Lumeira",

  // WhatsApp number in international format, digits only (country code + number, no "+" or spaces).
  // TODO: replace with the real Lumeira WhatsApp number before going live.
  whatsapp: "353000000000",

  instagram: "https://www.instagram.com/lumeira_handcrafted_candles",
  instagramHandle: "@lumeira_handcrafted_candles",
};

// Build a WhatsApp deep link with an optional prefilled message.
export function whatsappLink(message = "") {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export default site;
