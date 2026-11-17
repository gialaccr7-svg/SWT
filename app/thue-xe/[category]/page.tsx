import { categoryPath } from '@/lib/paths';
import { notFound } from 'next/navigation';
import { StructuredData } from '@/components/structured-data';
import { breadcrumbSchema } from '@/lib/seo';
import { PageBanner } from '@/components/page-banner';
import { VehicleCard } from '@/components/vehicle-card';
import { findVehicles } from '@/lib/services/vehicle-service';
import { seo } from '@/lib/seo';
import { site } from '@/lib/site';
import { seatCounts as categories, parseCategory } from '@/lib/catalog';
import { rentalCategoryGuides } from '@/lib/content/rental-categories';
import { isSeatRouteCount, seatRouteDestinations, seatRoutePath } from '@/lib/content/seat-routes';
export function generateStaticParams() {
  return categories.map((n) => ({ category: `${n}-cho` }));
}
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const n = parseCategory(category);
  if (!n) notFound();
  return seo(`Thuê xe du lịch ${n} chỗ`, rentalCategoryGuides[n].description, categoryPath(n));
}
export default async function Category({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const n = parseCategory(category);
  if (!n) notFound();
  const guide = rentalCategoryGuides[n];
  return (
    <main id="main">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Trang chủ', path: '/' },
          { name: 'Đội xe', path: '/doi-xe' },
          { name: `Thuê xe du lịch ${n} chỗ`, path: categoryPath(n) },
        ])}
      />
      <PageBanner
        title={`Thuê xe du lịch ${n} chỗ`}
        description={guide.description}
        parent={{ title: 'Đội xe', href: '/doi-xe' }}
      />
      <section className="section container">
        <p className="price-notes">
          Xuất phát từ TP.HCM.{' '}
          <a className="text-link" href={`/bang-gia?seats=${n}`}>
            Tra giá xe {n} chỗ theo từng điểm đến →
          </a>
        </p>
        <div className="vehicle-grid">
          {findVehicles({ seats: n }).map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
        <article className="article-layout">
          <h2>Lựa chọn xe {n} chỗ cho chuyến đi</h2>
          <p>
            {n === 4
              ? 'Xe 4 chỗ phù hợp nhóm ít người cần chuyến đi riêng tư. Sedan như Toyota Camry hoặc Mercedes-Benz thích hợp công tác, đón khách và sự kiện; hãy kiểm tra sức chứa hành lý trước khi chốt xe.'
              : n === 7
                ? 'Xe 7 chỗ phù hợp gia đình và nhóm bạn. Toyota Innova ưu tiên không gian linh hoạt; Toyota Fortuner là lựa chọn SUV. Khi sử dụng đủ ghế, không gian hành lý có thể giảm, nên gửi số vali khi hỏi xe.'
                : n === 16
                  ? 'Xe 16 chỗ phù hợp nhóm du lịch nhỏ và chuyến đưa đón tập thể. Ford Transit là lựa chọn tham khảo. Hãy trao đổi điểm đón từng nhóm, khung giờ và lượng hành lý để sắp xếp chuyến đi.'
                  : n === 29
                    ? 'Xe 29 chỗ là lựa chọn cho đoàn công ty, nhóm tham dự sự kiện hoặc du lịch tập thể. Cần thống nhất vị trí tập kết và điểm dừng để lịch trình gọn gàng, đồng thời xác nhận khoang hành lý theo xe thực tế.'
                    : 'Xe 45 chỗ phục vụ đoàn lớn và hành trình nhiều người. Hyundai Universe là dòng xe tham khảo; hãy kiểm tra khả năng tiếp cận điểm đón và khu vực đỗ xe khi lập lịch trình cho đoàn.'}
          </p>
          <h2>Chuẩn bị lịch trình cho xe {n} chỗ</h2>
          <p>{guide.planning}</p>
          <h2>Chỗ ngồi và hành lý: cần kiểm tra gì?</h2>
          <ul>
            {guide.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Số chỗ công bố không thay thế xác nhận số khách và lượng đồ có thể mang theo. Nếu cần
            phương án khác, so sánh thêm{' '}
            <a className="text-link" href={categoryPath(guide.alternative)}>
              xe {guide.alternative} chỗ
            </a>{' '}
            và gửi danh sách hành lý khi tư vấn.
          </p>
          <h2>Các yếu tố ảnh hưởng đến giá thuê</h2>
          <p>
            Ngày sử dụng, quãng đường, thời gian chờ, số điểm dừng và yêu cầu về dòng xe đều ảnh
            hưởng chi phí. Báo giá cần ghi rõ các khoản gồm và chưa gồm, điều kiện thay đổi hành
            trình và các phụ phí nếu phát sinh.
          </p>
          <p>
            Chuẩn bị{' '}
            <a className="text-link" href="/kinh-nghiem/thong-tin-can-co-khi-hoi-bao-gia">
              thông tin hỏi báo giá
            </a>{' '}
            và đọc{' '}
            <a className="text-link" href="/chinh-sach">
              điều kiện dịch vụ
            </a>
            . Giá cụ thể, đặt cọc và điều kiện đổi hoặc hủy được thống nhất trước khi đặt xe.
          </p>
          <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
            Nhận tư vấn xe {n} chỗ
          </a>
        </article>
        {isSeatRouteCount(n) ? (
          <>
            <h2 className="route-heading">Tuyến thuê xe {n} chỗ nổi bật</h2>
            <div className="route-guides">
              {seatRouteDestinations.map((destination) => (
                <a key={destination.slug} href={seatRoutePath(n, destination.slug)}>
                  Thuê xe {n} chỗ đi {destination.name}
                </a>
              ))}
            </div>
          </>
        ) : null}
      </section>
    </main>
  );
}
