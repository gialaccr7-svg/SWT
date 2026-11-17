/** Shared route/filter vocabulary. Keep content, API and UI on the same values. */
export const seatCounts = [4, 7, 16, 29, 45] as const;
export type SeatCount = (typeof seatCounts)[number];
export const vehicleBrands = [
  'Toyota',
  'Mercedes-Benz',
  'Hyundai',
  'Samco',
  'Ford',
  'Kia',
] as const;

export function parseCategory(category: string): SeatCount | undefined {
  return seatCounts.find((seats) => category === `${seats}-cho`);
}
