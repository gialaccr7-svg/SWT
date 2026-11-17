import { notFound } from 'next/navigation';
import { destinations, destinationPath } from '@/lib/content/destinations';
import { pricesForDestination } from '@/lib/pricing';
import { RoutePriceSummary } from '@/components/route-price-summary';
import { site, absoluteUrl } from '@/lib/site';
import { seo, breadcrumbSchema } from '@/lib/seo';
import { PageBanner } from '@/components/page-banner';
import { StructuredData } from '@/components/structured-data';
import { PriceLookup } from '@/components/price-lookup';
import { PriceNotes } from '@/components/price-notes';
import { articlePath } from '@/lib/paths';

const vungTauTitle = 'Thuê xe đi Vũng Tàu từ TP.HCM';
const vungTauDescription =
  'Thuê xe có tài xế từ TP.HCM đi Vũng Tàu. Tra giá tham khảo chuyến 1 ngày theo số chỗ và xem thông tin cần gửi để chốt giá theo lịch của bạn.';

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = destinations.find((item) => item.slug === slug);
  if (!guide) notFound();
  return seo(
    slug === 'vung-tau' ? vungTauTitle : `Thuê xe TP.HCM đi ${guide.name}`,
    slug === 'vung-tau' ? vungTauDescription : guide.description,
    destinationPath(slug),
  );
}
export default async function Destination({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = destinations.find((item) => item.slug === slug);
  if (!guide) notFound();
  const isVungTau = slug === 'vung-tau';
  const { primary, rows } = pricesForDestination(guide);
  return (
    <main id="main">
      <PageBanner
        title={isVungTau ? vungTauTitle : `Thuê xe từ TP.HCM đi ${guide.name}`}
        description={isVungTau ? vungTauDescription : guide.description}
        parent={{ title: 'Bảng giá', href: '/bang-gia' }}
      >
        <RoutePriceSummary row={primary} destination={guide} />
      </PageBanner>
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Trang chủ', path: '/' },
          { name: 'Bảng giá', path: '/bang-gia' },
          { name: `TP.HCM đi ${guide.name}`, path: destinationPath(slug) },
        ])}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Thuê xe TP.HCM đi ${guide.name}`,
          url: absoluteUrl(destinationPath(slug)),
          description: guide.description,
          provider: { '@type': 'Organization', '@id': `${site.origin}/#organization` },
          areaServed: ['TP.HCM', guide.name],
        }}
      />
      <section className="section container">
        <p className="route-intro">
          {isVungTau
            ? 'Nếu đi từ TP.HCM đến trung tâm Vũng Tàu trong ngày, hãy xem dòng “Thành Phố Vũng Tàu” và chọn cột theo số chỗ. Long Hải, Hồ Tràm và Hồ Cốc có dòng giá riêng.'
            : guide.intro}
        </p>
        <h2 className="route-heading">Bảng giá TP.HCM đi {guide.name} và các điểm cùng khu vực</h2>
        {isVungTau && (
          <>
            <p>
              Các mức dưới đây tính theo chuyến 1 ngày, xuất phát từ TP.HCM. Bảng ghi nơi xuất phát
              chung. Hãy gửi địa chỉ từng điểm đón và trả, giờ đi, giờ về và các điểm ghé để xác
              nhận mức giá áp dụng.
            </p>
            <p>
              Hỏi rõ giá đã gồm VAT, phí cầu đường, cao tốc và bãi đỗ chưa. Nếu cần xe chờ lâu, đón
              nhiều điểm hoặc đi qua đêm, gửi lịch cụ thể để xác nhận giờ phục vụ và khoản tính thêm
              nếu có. Xem cách{' '}
              <a
                className="text-link"
                href={articlePath('di-vung-tau-trong-ngay-hay-2-ngay-1-dem')}
              >
                chọn lịch đi Vũng Tàu trong ngày hay 2 ngày 1 đêm
              </a>{' '}
              và mẫu tin nhắn hỏi giá.
            </p>
          </>
        )}
        <PriceLookup rows={rows} />
        <PriceNotes />
        <article className="article-layout">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </section>
          ))}
          {slug === 'can-tho' && (
            <p>
              Nếu chuyến đi có chợ nổi, xem{' '}
              <a className="text-link" href={articlePath('di-cho-noi-cai-rang-tu-tp-hcm')}>
                cách hẹn xe và thuyền đi chợ nổi Cái Răng
              </a>{' '}
              để chọn lịch trong ngày hoặc qua đêm và xác nhận điểm đón tại bến.
            </p>
          )}
          <h2>Chọn xe theo đoàn và hành lý</h2>
          {slug === 'nha-trang' && (
            <p>
              Chuẩn bị chuyến đi với{' '}
              <a
                className="text-link"
                href={articlePath('di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng')}
              >
                lịch Nha Trang 3 ngày 2 đêm bằng xe riêng
              </a>{' '}
              và hướng dẫn{' '}
              <a className="text-link" href={articlePath('di-nha-trang-nen-chon-xe-7-hay-16-cho')}>
                chọn xe 7 hay 16 chỗ đi Nha Trang
              </a>
              .
            </p>
          )}
          <p>
            Chọn số chỗ ở phần giá tham khảo để xem phương án cho tuyến này. Trước khi đặt, hãy xác
            nhận số người thực đi, số vali, điểm tập kết và mẫu xe sẵn có.
          </p>
          <h2>Giá trong bảng có bao gồm vé tham quan không?</h2>
          <p>
            Bảng gốc chưa nêu chi tiết các khoản bao gồm. Yêu cầu xác nhận từng khoản trong báo giá
            trước khi đặt; không mặc định vé tham quan, tàu thuyền hoặc chi phí lưu trú đã nằm trong
            giá xe.
          </p>
          <h2>Thông tin để xác nhận chuyến đi</h2>
          <p>
            Gửi ngày đi/về, địa chỉ đón tại TP.HCM, các điểm dừng ở {guide.name}, số khách và lượng
            hành lý. Nếu có lịch hẹn, chuyến tàu hoặc giờ nhận phòng, gửi kèm để sắp xếp giờ xe.
          </p>
          <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
            Tư vấn chuyến TP.HCM đi {guide.name}
          </a>
          <p>
            Tham khảo điểm đến:{' '}
            <a href={guide.source} target="_blank" rel="noopener noreferrer">
              Vietnam Tourism
            </a>
            . Biên tập bởi <a href="/gioi-thieu">Hành Trình Phương Nam</a> · Cập nhật 24/10/2026.
          </p>
          <p>
            <a className="text-link" href="/bang-gia">
              Tra toàn bộ bảng giá từ TP.HCM
            </a>
          </p>
        </article>
        <div className="route-guides">
          {destinations
            .filter((item) => item.slug !== slug)
            .map((item) => (
              <a key={item.slug} href={destinationPath(item.slug)}>
                Xem tuyến TP.HCM → {item.name}
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}
