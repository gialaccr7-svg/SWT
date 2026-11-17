'use client';

import { useState, type ReactNode } from 'react';
import { seatCounts } from '@/lib/catalog';

type FleetItem = { slug: string; seats: number; brand: string; card: ReactNode };

export function FleetFilter({
  items,
  compact,
  initialSeats,
  initialBrand,
}: {
  items: FleetItem[];
  compact: boolean;
  initialSeats: number;
  initialBrand: string;
}) {
  const [seats, setSeats] = useState(initialSeats);
  const [brand, setBrand] = useState(initialBrand);
  const filtered = items.filter(
    (item) => (!seats || item.seats === seats) && (!brand || item.brand === brand),
  );

  return (
    <>
      <div className="fleet-controls">
        <div className="tabs" role="group" aria-label="Lọc theo số chỗ">
          {[0, ...seatCounts].map((n) => (
            <button
              key={n}
              aria-pressed={seats === n}
              className={seats === n ? 'active' : ''}
              onClick={() => setSeats(n)}
            >
              {n ? `${n} chỗ` : 'Tất cả xe'}
            </button>
          ))}
        </div>
        <label className="brand-filter">
          <span className="sr-only">Hãng xe</span>
          <select value={brand} onChange={(event) => setBrand(event.target.value)}>
            <option value="">Tất cả hãng xe</option>
            {Array.from(new Set(items.map((item) => item.brand))).map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="vehicle-grid">
        {(compact ? filtered.slice(0, 4) : filtered).map((item) => item.card)}
      </div>
      {!filtered.length && (
        <p className="empty-state" role="status">
          Chưa có xe phù hợp bộ lọc. Hãy chọn số chỗ hoặc hãng xe khác.
        </p>
      )}
    </>
  );
}
