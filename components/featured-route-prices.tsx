import { formatPrice, priceFor, routePrices } from '@/lib/pricing';

// Only select routes here; amounts and durations always come from the price table.
const featuredIds = [
  'vung-tau-thanh-pho-vung-tau',
  'vung-tau-ho-tram',
  'tay-ninh-tp-tay-ninh',
  'tien-giang-thanh-pho-my-tho',
  'ho-chi-minh-cu-chi',
  'ho-chi-minh-can-gio',
];

export function FeaturedRoutePrices() {
  return (
    <section className="container featured-prices" aria-labelledby="featured-prices-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ĐI GẦN TỪ TP.HCM</p>
          <h2 id="featured-prices-title">Xem giá ngay, chọn chuyến đi</h2>
          <p>Một vài tuyến gợi ý cho bạn, có sẵn giá xe 4 và 7 chỗ.</p>
        </div>
        <a className="text-link" href="/bang-gia">
          Xem đủ {routePrices.length} tuyến & xe 4–45 chỗ →
        </a>
      </div>
      <div className="featured-price-grid">
        {featuredIds.map((id) => {
          const route = routePrices.find((item) => item.id === id);
          if (!route) throw new Error(`Missing featured price route: ${id}`);
          const href = `/bang-gia?${new URLSearchParams({
            q: route.destination,
            region: route.region,
          })}`;
          return (
            <a className="featured-price-card" href={href} key={id}>
              <span className="featured-price-origin">TỪ TP.HCM · {route.duration}</span>
              <h3>{route.destination}</h3>
              <dl>
                {[4, 7].map((seats) => (
                  <div key={seats}>
                    <dt>Xe {seats} chỗ</dt>
                    <dd>{formatPrice(priceFor(route, seats))}</dd>
                  </div>
                ))}
              </dl>
              <span className="text-link">Xem giá các loại xe →</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
