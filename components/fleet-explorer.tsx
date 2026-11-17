import { VehicleCard } from './vehicle-card';
import { FleetFilter } from './fleet-filter';
import type { Vehicle } from '@/lib/content/vehicles';

/** Cards remain server components. Only filter state is hydrated in the browser. */
export function FleetExplorer({
  vehicles,
  compact = false,
  initialSeats = 0,
  initialBrand = '',
}: {
  vehicles: Vehicle[];
  compact?: boolean;
  initialSeats?: number;
  initialBrand?: string;
}) {
  return (
    <FleetFilter
      compact={compact}
      initialSeats={initialSeats}
      initialBrand={initialBrand}
      items={vehicles.map((vehicle) => ({
        slug: vehicle.slug,
        seats: vehicle.seats,
        brand: vehicle.brand,
        card: <VehicleCard key={vehicle.slug} vehicle={vehicle} />,
      }))}
    />
  );
}
