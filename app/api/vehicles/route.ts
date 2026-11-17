import { z } from 'zod';
import { seatCounts, vehicleBrands } from '@/lib/catalog';
import { findVehicles } from '@/lib/services/vehicle-service';
const filterSchema = z
  .object({
    seats: z
      .enum(['4', '7', '16', '29', '45'])
      .transform(Number)
      .refine((n) => seatCounts.some((seats) => seats === n))
      .optional(),
    brand: z.enum(vehicleBrands).optional(),
    wedding: z.enum(['true', 'false']).optional(),
  })
  .strict();
function invalid(details: unknown) {
  return Response.json(
    { error: 'Bộ lọc không hợp lệ', details },
    { status: 400, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } },
  );
}
/** Omitted wedding: all vehicles. true/false: matching wedding membership. */
export function GET(request: Request) {
  const query = new URL(request.url).searchParams;
  for (const key of query.keys())
    if (query.getAll(key).length > 1) return invalid({ [key]: ['Tham số không được lặp'] });
  const result = filterSchema.safeParse(Object.fromEntries(query));
  if (!result.success) return invalid(result.error.flatten());
  const data = findVehicles({
    ...result.data,
    wedding: result.data.wedding === undefined ? undefined : result.data.wedding === 'true',
  });
  return Response.json(
    { data, total: data.length },
    {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=3600',
        'X-Content-Type-Options': 'nosniff',
      },
    },
  );
}
