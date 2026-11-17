import { seatCounts, vehicleBrands } from './catalog.ts';
export type FleetQuery = Record<string, string | string[] | undefined>;
const purposes = ['travel', 'airport', 'business', 'wedding'] as const;
/** Unknown/tracking keys are ignored; supported filters must be single and valid. */
export function parseFleetQuery(query: FleetQuery) {
  const seats = seatCounts.find((value) => String(value) === query.seats);
  const purpose = purposes.find((value) => value === query.purpose);
  const brand = vehicleBrands.find((value) => value === query.brand);
  const invalid =
    ['seats', 'purpose', 'brand'].some((key) => Array.isArray(query[key])) ||
    (query.seats !== undefined && query.seats !== '' && seats === undefined) ||
    (query.purpose !== undefined && query.purpose !== '' && purpose === undefined) ||
    (query.brand !== undefined && query.brand !== '' && brand === undefined);
  return {
    seats: seats ?? 0,
    purpose,
    brand,
    invalid,
    filtered: seats !== undefined || purpose !== undefined || brand !== undefined,
  };
}
