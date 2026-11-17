import { notFound } from 'next/navigation';
import { PageBanner } from '@/components/page-banner';
import { PriceLookup } from '@/components/price-lookup';
import { PriceNotes } from '@/components/price-notes';
import { StructuredData } from '@/components/structured-data';
import { VehicleCard } from '@/components/vehicle-card';
import { VungTauSevenSeatContent } from '@/components/vung-tau-seven-seat-content';
import { RentalRouteContent } from '@/components/rental-route-content';
import { RentalRouteSummary, RentalRouteBooking } from '@/components/rental-route-summary';
import { rentalRouteSummaries } from '@/lib/content/rental-route-summaries';
import { rentalRouteGuides } from '@/lib/content/rental-route-guides';
import { ResponsiveImage } from '@/components/responsive-image';
import { parseCategory } from '@/lib/catalog';
import { rentalCategoryGuides } from '@/lib/content/rental-categories';
import {
  isSeatRouteCount,
  seatRouteCounts,
  seatRouteDestinations,
  seatRoutePath,
  seatRouteMediaFor,
  seatRouteProfiles,
  vungTauSeatGuides,
} from '@/lib/content/seat-routes';
import { pricesForDestination } from '@/lib/pricing';
import { RoutePriceSummary } from '@/components/route-price-summary';
import { seatRouteTripTips } from '@/lib/content/seat-route-trip-tips';
import { findVehicles } from '@/lib/services/vehicle-service';
import { absoluteUrl, site } from '@/lib/site';
import { breadcrumbSchema, seo } from '@/lib/seo';
import { articlePath } from '@/lib/paths';

type Params = Promise<{ category: string; destination: string }>;

export function generateStaticParams() {
  return seatRouteDestinations.flatMap((destination) =>
    seatRouteCounts.map((seats) => ({
      category: `${seats}-cho`,
      destination: `di-${destination.slug}`,
    })),
  );
}

function resolvePage(category: string, destinationSlug: string) {
  const seats = parseCategory(category);
  const slug = destinationSlug.startsWith('di-') ? destinationSlug.slice(3) : '';
  const destination = seatRouteDestinations.find((item) => item.slug === slug);
  if (!seats || !isSeatRouteCount(seats) || !destination) notFound();
  const vungTauGuide =
    slug === 'vung-tau' && (seats === 7 || seats === 16) ? vungTauSeatGuides[seats] : undefined;
  return { seats, destination, vungTauGuide };
}

export async function generateMetadata({ params }: { params: Params }) {
  const { category, destination: destinationSlug } = await params;
  const { seats, destination } = resolvePage(category, destinationSlug);
  const media = seatRouteMediaFor(seats, destination.slug);
  const guide = rentalRouteGuides[seatRoutePath(seats, destination.slug)];
  return seo(
    `Thuê xe ${seats} chỗ đi ${destination.name} từ TP.HCM`,
    seats === 7 && destination.slug === 'vung-tau'
      ? 'Thuê xe 7 chỗ có tài xế từ TP.HCM đi Vũng Tàu: giá tham khảo, chọn xe và hành lý, lịch trong ngày hoặc 2 ngày 1 đêm. Hỏi giá theo chuyến qua Zalo.'
      : (guide?.description ??
          `Xem giá tham khảo thuê xe ${seats} chỗ từ TP.HCM đi ${destination.name}. ${seats <= 7 ? 'Chuẩn bị số khách, vali và xe đẩy để chọn xe.' : 'Chốt điểm tập kết, hành lý và giờ xe chờ trước khi hỏi giá.'}`),
    seatRoutePath(seats, destination.slug),
    media ? { image: media.images[0].src } : undefined,
  );
}

export default async function SeatRoutePage({ params }: { params: Params }) {
  const { category, destination: destinationSlug } = await params;
  const { seats, destination, vungTauGuide } = resolvePage(category, destinationSlug);
  const path = seatRoutePath(seats, destination.slug);
  const { primary, rows } = pricesForDestination(destination);
  const profile = seatRouteProfiles[seats];
  const categoryGuide = rentalCategoryGuides[seats];
  const media = seatRouteMediaFor(seats, destination.slug);
  const title = `Thuê xe ${seats} chỗ đi ${destination.name} từ TP.HCM`;
  const isVungTauSevenSeat = seats === 7 && destination.slug === 'vung-tau';
  const guide = rentalRouteGuides[path];
  const summary = rentalRouteSummaries[path];

  return (
    <main id="main">
      <PageBanner
        title={title}
        description={
          isVungTauSevenSeat
            ? 'Xe có tài xế cho chuyến một chiều, đi về trong ngày hoặc 2 ngày 1 đêm. Xem giá tham khảo và chọn phạm vi phục vụ theo lịch của bạn.'
            : guide
              ? guide.description
              : vungTauGuide
                ? 'Xem thông tin cần gửi để hỏi xe theo lịch của bạn.'
                : `Giá tham khảo theo từng điểm đến, gợi ý chọn xe và checklist cho ${profile.audience} đi ${destination.name}.`
        }
        parent={{ title: `Thuê xe ${seats} chỗ`, href: `/thue-xe/${seats}-cho` }}
      >
        <RoutePriceSummary row={primary} destination={destination} seats={seats} />
      </PageBanner>
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Trang chủ', path: '/' },
          { name: `Thuê xe ${seats} chỗ`, path: `/thue-xe/${seats}-cho` },
          { name: `Đi ${destination.name}`, path },
        ])}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: title,
          url: absoluteUrl(path),
          description:
            summary?.summary ??
            `Dịch vụ thuê xe ${seats} chỗ có tài xế từ TP.HCM đi ${destination.name}.`,
          provider: { '@type': 'Organization', '@id': `${site.origin}/#organization` },
          termsOfService: absoluteUrl('/chinh-sach'),
          ...(summary ? { audience: { '@type': 'Audience', audienceType: summary.audience } } : {}),
          areaServed: ['TP.HCM', destination.name],
          serviceType: `Thuê xe ${seats} chỗ có tài xế`,
        }}
      />

      <section className="section container">
        {summary ? (
          <RentalRouteSummary summary={summary} />
        ) : (
          <p className="route-intro">
            {guide?.intro ??
              vungTauGuide?.intro ??
              `Xe ${seats} chỗ là một phương án cho ${profile.audience} từ TP.HCM đi ${destination.name}. ${seatRouteTripTips[destination.slug][seats]}`}
          </p>
        )}

        {media && (
          <div className={`seat-route-gallery ${media.layout}`}>
            {media.images.map((image, index) => (
              <figure key={image.src} className={`seat-route-photo photo-${index + 1}`}>
                <ResponsiveImage
                  src={image.src}
                  alt={image.alt}
                  sizes={
                    index === 0
                      ? '(max-width: 760px) 100vw, 68vw'
                      : '(max-width: 760px) 100vw, 38vw'
                  }
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <figcaption>
                  {image.alt} · Ảnh:{' '}
                  <a href={image.source} target="_blank" rel="noopener noreferrer nofollow">
                    {image.credit}
                  </a>{' '}
                  ({image.license})
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <h2 className="route-heading" id="bang-gia-tuyen">
          Bảng giá xe {seats} chỗ đi {destination.name} và các điểm lân cận
        </h2>
        {vungTauGuide && (
          <p>
            Xem cột {seats} chỗ ở dòng “Thành Phố Vũng Tàu” cho chuyến tham khảo 1 ngày từ TP.HCM.
            Nếu đến Long Hải, Hồ Tràm hoặc Hồ Cốc, chọn dòng đúng điểm đến. Gửi địa chỉ đón, giờ về
            và lịch ghé các điểm để xác nhận giá cho chuyến của bạn.
          </p>
        )}
        <PriceLookup rows={rows} initialSeats={String(seats)} />
        <PriceNotes />

        <div id="chi-tiet-chuyen">
          {isVungTauSevenSeat ? (
            <VungTauSevenSeatContent />
          ) : guide ? (
            <RentalRouteContent
              guide={guide}
              seats={seats}
              destination={destination.name}
              slug={destination.slug}
            />
          ) : (
            <article className="article-layout">
              <h2>Xe {seats} chỗ phù hợp với đoàn nào?</h2>
              <p>
                {categoryGuide.description} Với tuyến {destination.name}, hãy chọn theo số khách
                thực đi, lượng đồ mang theo và khả năng tiếp cận từng điểm dừng thay vì chỉ dựa vào
                số ghế.
              </p>
              <div className="vehicle-grid">
                {findVehicles({ seats }).map((vehicle) => (
                  <VehicleCard key={vehicle.slug} vehicle={vehicle} />
                ))}
              </div>

              <h2>Hành lý và điểm đón cần chốt trước</h2>
              <p>{profile.luggage}</p>
              <p>{profile.pickup}</p>
              {vungTauGuide && <p>{seatRouteTripTips[destination.slug][seats]}</p>}

              {vungTauGuide ? (
                <section>
                  <h2>Thời gian phục vụ xe {seats} chỗ</h2>
                  <p>{vungTauGuide.service}</p>
                </section>
              ) : (
                destination.sections.map((section) => (
                  <section key={section.heading}>
                    <h2>{section.heading}</h2>
                    <p>{section.text}</p>
                  </section>
                ))
              )}

              <h2>
                Checklist hỏi giá xe {seats} chỗ đi {destination.name}
              </h2>
              <ul>
                {categoryGuide.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <li>Ngày đi, ngày về, giờ khởi hành và địa chỉ đón tại TP.HCM.</li>
                <li>Các điểm dừng cụ thể tại {destination.name} và thời gian xe cần chờ.</li>
              </ul>
              <p>
                Giá hiển thị là dữ liệu tham khảo theo thời gian trong bảng. Chuyến nhiều ngày, thay
                đổi điểm đón hoặc phát sinh điểm dừng cần được báo lại để xác nhận giá, khoản bao
                gồm và điều kiện phục vụ.
              </p>
              <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
                Hỏi giá xe {seats} chỗ đi {destination.name}
              </a>
              <p>
                Xem thêm{' '}
                <a className="text-link" href={`/tuyen-xe/${destination.slug}`}>
                  toàn bộ giá xe đi {destination.name}
                </a>{' '}
                hoặc{' '}
                <a className="text-link" href={`/thue-xe/${seats}-cho`}>
                  hướng dẫn thuê xe {seats} chỗ
                </a>
                .
              </p>
            </article>
          )}
        </div>

        {summary && (
          <RentalRouteBooking summary={summary} seats={seats} destination={destination.name} />
        )}

        <h2 className="route-heading">So sánh phương án khác</h2>
        {destination.slug === 'nha-trang' && (
          <p>
            Xem thêm{' '}
            <a
              className="text-link"
              href={articlePath('di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng')}
            >
              lịch Nha Trang 3 ngày 2 đêm bằng xe riêng
            </a>{' '}
            và cách{' '}
            <a className="text-link" href={articlePath('di-nha-trang-nen-chon-xe-7-hay-16-cho')}>
              chọn xe 7 hay 16 chỗ đi Nha Trang
            </a>{' '}
            trước khi chốt số khách, hành lý và thời gian dùng xe.
          </p>
        )}
        <div className="route-guides">
          {seatRouteCounts
            .filter((value) => value !== seats)
            .map((value) => (
              <a key={value} href={seatRoutePath(value, destination.slug)}>
                Thuê xe {value} chỗ đi {destination.name}
              </a>
            ))}
          {seatRouteDestinations
            .filter((item) => item.slug !== destination.slug)
            .map((item) => (
              <a key={item.slug} href={seatRoutePath(seats, item.slug)}>
                Thuê xe {seats} chỗ đi {item.name}
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}
