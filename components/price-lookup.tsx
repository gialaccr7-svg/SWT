'use client';

import { ZaloRentalNotice } from './zalo-rental-notice';
import { useState } from 'react';
import {
  routePrices,
  priceSeats,
  priceFor,
  formatPrice,
  matchRoute,
  type PriceRoute,
} from '@/lib/pricing';
import { destinations, destinationPath } from '@/lib/content/destinations';

export function PriceLookup({
  rows = routePrices,
  initialQuery = '',
  initialRegion = '',
  initialSeats = '',
}: {
  rows?: PriceRoute[];
  initialQuery?: string;
  initialRegion?: string;
  initialSeats?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [region, setRegion] = useState(initialRegion);
  const [seats, setSeats] = useState(initialSeats);
  const filtered = rows.filter((row) => matchRoute(row, query, region));
  const columns = priceSeats.filter((n) => !seats || String(n) === seats);
  return (
    <div data-price-lookup>
      <ZaloRentalNotice />
      <form
        className="price-filters"
        action="/bang-gia"
        method="get"
        onSubmit={(event) => event.preventDefault()}
      >
        <label>
          Điểm đến từ TP.HCM
          <input
            name="q"
            placeholder="Ví dụ: Cần Thơ, Mũi Né…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <label>
          Khu vực trong bảng giá
          <select name="region" value={region} onChange={(event) => setRegion(event.target.value)}>
            <option value="">Tất cả khu vực</option>
            {Array.from(new Set(rows.map((row) => row.region))).map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label>
          Số chỗ
          <select name="seats" value={seats} onChange={(event) => setSeats(event.target.value)}>
            <option value="">Tất cả loại xe</option>
            {priceSeats.map((n) => (
              <option key={n} value={n}>
                {n} chỗ
              </option>
            ))}
          </select>
        </label>
        <button
          className="button outline"
          type="button"
          onClick={() => {
            setQuery('');
            setRegion('');
            setSeats('');
          }}
        >
          Đặt lại
        </button>
      </form>
      <p className="price-result" role="status" aria-live="polite">
        {filtered.length} tuyến phù hợp · Khởi hành từ TP.HCM
      </p>
      <div
        className="price-scroll"
        tabIndex={0}
        role="region"
        aria-label="Bảng giá thuê xe, cuộn ngang để xem các loại xe"
      >
        <table className="price-table">
          <caption>Giá thuê xe từ TP.HCM · Đơn vị: VNĐ/chuyến theo thời gian trong bảng</caption>
          <thead>
            <tr>
              <th scope="col">Điểm đến</th>
              <th scope="col">Thời gian</th>
              <th scope="col">Km theo bảng</th>
              {columns.map((n) => (
                <th key={n} scope="col" data-price-seat={n}>
                  {n} chỗ
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => {
              const guide = destinations.find((item) => item.region === row.region);
              return (
                <tr
                  key={row.id}
                  data-price-row
                  data-destination={row.destination}
                  data-region={row.region}
                >
                  <th scope="row">
                    {row.destination}
                    <small>{row.region}</small>
                    {guide && <a href={destinationPath(guide.slug)}>Xem tuyến {guide.name}</a>}
                  </th>
                  <td>{row.duration}</td>
                  <td>{row.km ?? '—'}</td>
                  {columns.map((n) => (
                    <td key={n} data-price-seat={n}>
                      {formatPrice(priceFor(row, n))}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {!filtered.length && (
        <p className="empty-state">
          Chưa có tuyến phù hợp. Thử tên địa điểm hoặc khu vực khác; có thể gọi tư vấn nếu lịch
          trình chưa có trong bảng.
        </p>
      )}
    </div>
  );
}
