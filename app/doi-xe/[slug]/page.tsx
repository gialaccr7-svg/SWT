import { vehiclePath, categoryPath } from '@/lib/paths';
import { ResponsiveImage } from '@/components/responsive-image';
import { notFound } from 'next/navigation';
import { StructuredData } from '@/components/structured-data';
import { breadcrumbSchema } from '@/lib/seo';
import { getVehicle, findVehicles } from '@/lib/services/vehicle-service';
import { PageBanner } from '@/components/page-banner';
import { VehicleCard } from '@/components/vehicle-card';
import { site } from '@/lib/site';
import { seo, jsonLd } from '@/lib/seo';
export function generateStaticParams() {
  return findVehicles().map((v) => ({ slug: v.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) notFound();
  return seo(
    `Thuê xe ${v.name}${v.name.includes(`${v.seats} chỗ`) ? '' : ` ${v.seats} chỗ`}`,
    v.description,
    vehiclePath(slug),
    {
      image: v.image,
    },
  );
}
export default async function VehicleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = getVehicle(slug);
  if (!v) notFound();
  const related = findVehicles({ seats: v.seats })
    .filter((x) => x.slug !== slug)
    .slice(0, 3);
  return (
    <main id="main">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Trang chủ', path: '/' },
          { name: 'Đội xe', path: '/doi-xe' },
          { name: `Thuê xe ${v.name}`, path: vehiclePath(slug) },
        ])}
      />
      <PageBanner
        title={`Thuê xe ${v.name}${v.name.includes(`${v.seats} chỗ`) ? '' : ` ${v.seats} chỗ`}`}
        description={v.description}
        parent={{ title: 'Đội xe', href: '/doi-xe' }}
      />
      <section className="section container">
        <div className="detail-grid">
          <div>
            <ResponsiveImage
              sizes="(max-width: 760px) calc(100vw - 36px), 60vw"
              className="detail-image"
              src={v.image}
              alt={v.imageAlt}
              width="900"
              height="600"
              fetchPriority="high"
            />
            <p style={{ fontSize: 12, marginTop: 12 }}>Xe phục vụ được xác nhận khi tư vấn.</p>
          </div>
          <div className="detail-info">
            <p className="eyebrow">{v.category.toUpperCase()}</p>
            <h2>{v.name}</h2>
            <div className="specs">
              <span>{v.brand}</span>
              <span>{v.seats} chỗ</span>
            </div>
            <p>{v.description}</p>
            <ul>
              {v.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <h3>Giá thuê theo tuyến từ TP.HCM</h3>
            <p>
              Tra giá nhóm {v.seats} chỗ theo điểm đến. Giá theo nhóm xe; mẫu xe {v.name} và yêu cầu
              riêng được xác nhận khi đặt.
            </p>
            <a className="text-link" href={`/bang-gia?seats=${v.seats}`}>
              Xem bảng giá xe {v.seats} chỗ →
            </a>
            <div className="detail-actions">
              <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
                Tư vấn qua Zalo
              </a>
              <a className="button outline" href={`tel:${site.phone}`}>
                Gọi {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
        {v.gallery && (
          <section className="fleet-gallery" aria-label={`Ảnh thực tế ${v.name}`}>
            <h2>Hình ảnh thực tế {v.name}</h2>
            <div>
              {v.gallery.map((src, i) => (
                <a key={src} href={src} target="_blank" rel="noopener noreferrer">
                  <ResponsiveImage
                    src={src}
                    alt={`${v.name} — ảnh thực tế ${i + 1}`}
                    sizes="(max-width: 760px) 90vw, 33vw"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </section>
        )}
        <div className="article-layout">
          <h2>Khi nào nên chọn {v.name}?</h2>
          <p>{v.rentalAdvice.suitableFor}</p>
          <h2>Chỗ ngồi và hành lý cần xác nhận</h2>
          <p>{v.rentalAdvice.luggage}</p>
          <h2>Lên lịch trình thuê {v.name}</h2>
          <p>{v.rentalAdvice.planning}</p>
          <p>
            So sánh thêm các dòng{' '}
            <a className="text-link" href={categoryPath(v.seats)}>
              xe {v.seats} chỗ
            </a>
            {v.wedding && (
              <>
                {' '}
                hoặc xem{' '}
                <a className="text-link" href="/xe-cuoi">
                  dịch vụ xe cưới
                </a>
              </>
            )}
            .
          </p>
          <h2>Thông tin cần chuẩn bị để báo giá</h2>
          <ul>
            <li>Ngày đi, ngày về và thời gian sử dụng xe.</li>
            <li>Điểm đón, điểm trả và toàn bộ các điểm dừng.</li>
            <li>Số khách, lượng hành lý và các yêu cầu riêng.</li>
            <li>
              Yêu cầu xác nhận khoản nào đã gồm hoặc chưa gồm trong giá: nhiên liệu, phí đường, bến
              bãi, thời gian chờ và phụ phí nếu có.
            </li>
          </ul>
          <p>
            Xe được đặt sau khi hai bên xác nhận dòng xe, lịch trình và điều kiện dịch vụ. Không có
            thông tin đặt chỗ hay thanh toán tự động trên website.
          </p>
          <p>
            Xem{' '}
            <a className="text-link" href="/kinh-nghiem/thong-tin-can-co-khi-hoi-bao-gia">
              hướng dẫn hỏi báo giá
            </a>{' '}
            và{' '}
            <a className="text-link" href="/chinh-sach">
              điều kiện dịch vụ cần xác nhận
            </a>{' '}
            trước khi đặt xe.
          </p>
        </div>
        {related.length > 0 && (
          <>
            <h2 style={{ marginBottom: 25 }}>Các lựa chọn cùng nhóm</h2>
            <div className="vehicle-grid">
              {related.map((x) => (
                <VehicleCard key={x.slug} vehicle={x} />
              ))}
            </div>
          </>
        )}
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': site.origin + vehiclePath(v.slug) + '#service',
            name: `Thuê xe ${v.name}`,
            description: v.description,
            provider: {
              '@type': 'Organization',
              '@id': site.origin + '/#organization',
              name: site.name,
              telephone: site.phone,
              url: site.origin,
            },
            url: site.origin + vehiclePath(v.slug),
          }),
        }}
      />
    </main>
  );
}
