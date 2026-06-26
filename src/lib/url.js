// =============================================
// Lumeira Handcrafted Candles
// URL helper
// Prefixes root-absolute paths with Astro's configured `base`
// (e.g. "/lumeira-catalog") so links and public/ assets resolve
// correctly when deployed under a GitHub Pages project subpath.
// =============================================

const BASE = import.meta.env.BASE_URL; // normalised by Astro, e.g. "/lumeira-catalog/"

export function withBase(path = "/") {
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
}
