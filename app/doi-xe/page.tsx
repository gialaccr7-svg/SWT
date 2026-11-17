import { categoryPath } from '@/lib/paths';
import { notFound } from 'next/navigation';
import { PageBanner } from '@/components/page-banner';
import { FleetExplorer } from '@/components/fleet-explorer';
import { findVehicles } from '@/lib/services/vehicle-service';
import { seo } from '@/lib/seo';
import { seatCounts } from '@/lib/catalog';
import { parseFleetQuery, type FleetQuery } from '@/lib/fleet-query';

type Props = { searchParams: Promise<FleetQuery> };

export async function generateMetadata({ searchParams }: Props) {
  const query = parseFleetQuery(await searchParams);
  if (query.invalid) notFound();
  const metadata = seo(
    'Đội xe du lịch 4–45 chỗ',
    'Khám phá Toyota, Mercedes-Benz, Hyundai và xe du lịch 4, 7, 16, 29, 45 chỗ. Tư vấn xe phù hợp lịch trình.',
    '/doi-xe',
    { image: '/images/kia-carnival-1.jpg' },
  );
  return query.filtered ? { ...metadata, robots: { index: false, follow: true } } : metadata;
}

export default async function Fleet({ searchParams }: Props) {
  const { seats, purpose, brand, invalid } = parseFleetQuery(await searchParams);
  if (invalid) notFound();
  const list = findVehicles({ wedding: purpose === 'wedding' ? true : undefined });
  if (
    !list.some(
      (vehicle) => (!seats || vehicle.seats === seats) && (!brand || vehicle.brand === brand),
    )
  )
    notFound();
  return (
    <main id="main">
      <PageBanner
        title="Đội xe du lịch 4–45 chỗ"
        description="Từ một chuyến đi riêng tư đến hành trình cùng cả đoàn. Tìm dòng xe phù hợp với số khách và nhu cầu của bạn."
      />
      <section className="section container">
        <div className="page-brand-highlight">
          <img
            src="/images/logo321-192.png"
            alt="Logo Hành Trình Phương Nam"
            width={52}
            height={52}
            className="page-brand-logo"
          />
          <div>
            <strong>Đội xe du lịch & xe cưới Hành Trình Phương Nam</strong>
            <p>
              Đa dạng các dòng xe 4, 7, 16, 29, 45 chỗ Toyota, Mercedes-Benz, Hyundai, Samco đời
              mới, nội thất tiện nghi, bảo dưỡng định kỳ và kiểm tra an toàn kỹ lưỡng.
            </p>
          </div>
        </div>
        {purpose === 'wedding' && (
          <p className="note">
            Danh mục xe phù hợp ngày cưới. <a href="/xe-cuoi">Tìm hiểu dịch vụ xe cưới</a>.
          </p>
        )}
        {!!seats && (
          <p style={{ marginBottom: 20 }}>
            Kết quả cho xe {seats} chỗ ·{' '}
            <a className="text-link" href="/doi-xe">
              Xem tất cả xe
            </a>
          </p>
        )}
        <FleetExplorer
          key={`${seats}-${purpose}-${brand}`}
          vehicles={list}
          initialSeats={seats}
          initialBrand={brand}
        />
        <div className="note">
          Dòng xe, cấu hình ghế, lượng hành lý và tình trạng sẵn có được xác nhận khi tư vấn. Ảnh
          gồm ảnh xe thật do Hành Trình Phương Nam cung cấp và hình ảnh từ hãng; xe phục vụ được xác
          nhận khi tư vấn.
        </div>
        <div className="seo-links">
          {seatCounts.map((n) => (
            <a key={n} href={categoryPath(n)}>
              Thuê xe {n} chỗ
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
