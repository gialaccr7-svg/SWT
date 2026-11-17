import { vehicles, type Vehicle } from '../content/vehicles';

export type VehicleFilter = { seats?: number; brand?: string; wedding?: boolean };

/** Single query layer used by SSR routes and the read-only API. */
export function findVehicles(filter: VehicleFilter = {}): Vehicle[] {
  return vehicles.filter(
    (vehicle) =>
      (!filter.seats || vehicle.seats === filter.seats) &&
      (!filter.brand || vehicle.brand === filter.brand) &&
      (filter.wedding === undefined || Boolean(vehicle.wedding) === filter.wedding),
  );
}

export const getVehicle = (slug: string) => vehicles.find((vehicle) => vehicle.slug === slug);
