import source from './content/route-prices.json';

export const priceSeats = [4, 7, 16, 29, 45] as const;
export const routePrices = source.routes;
export type PriceRoute = (typeof routePrices)[number];
export function pricesForDestination({
  region,
  primaryPriceId,
}: {
  region: string;
  primaryPriceId: string;
}) {
  const rows = routePrices.filter((row) => row.region === region);
  const primary = rows.find((row) => row.id === primaryPriceId);
  if (!primary) throw new Error(`Missing primary price row: ${primaryPriceId}`);
  return { primary, rows: [primary, ...rows.filter((row) => row !== primary)] };
}
export function priceFor(route: PriceRoute, seats: number): number | null {
  return (route.prices as Record<string, number | null>)[String(seats)] ?? null;
}
export function formatPrice(value: number | null) {
  return value === null ? 'Liên hệ' : `${new Intl.NumberFormat('vi-VN').format(value)}đ`;
}
export function normalizeSearch(text: string) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim()
    .replace(/^(?:di|thue xe di)\s+/, '');
}
export function matchRoute(route: PriceRoute, query: string, region: string) {
  const haystack = normalizeSearch(`${route.destination} ${route.region}`);
  return (
    (!region || route.region === region) &&
    normalizeSearch(query)
      .split(/\s+/)
      .every((word) => haystack.includes(word))
  );
}
