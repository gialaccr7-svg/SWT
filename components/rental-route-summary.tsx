import type { RentalRouteSummary as Summary } from '@/lib/content/rental-route-summaries';
import { site } from '@/lib/site';
import { RentalRequest } from '@/components/rental-request';
import { ResponsiveImage } from '@/components/responsive-image';
import { findVehicles } from '@/lib/services/vehicle-service';

export function RentalRouteSummary({ summary }: { summary: Summary }) {
  return (
    <section className="rental-route-summary" aria-labelledby="rental-summary-title">
      <h2 id="rental-summary-title">Thông tin thuê xe cần biết</h2>
      <p>{summary.summary}</p>
      <dl>
        <div>
          <dt>Khách phù hợp</dt>
          <dd>{summary.audience}</dd>
        </div>
        <div>
          <dt>Hành lý</dt>
          <dd>{summary.luggage}</dd>
        </div>
        <div>
          <dt>Điểm đón trả</dt>
          <dd>{summary.pickup}</dd>
        </div>
        <div>
          <dt>Loại chuyến</dt>
          <dd>{summary.trip}</dd>
        </div>
      </dl>
      <nav aria-label="Nội dung trang thuê xe" className="rental-request-actions">
        <a className="text-link" href="#bang-gia-tuyen">
          Xem bảng giá
        </a>
        <a className="text-link" href="#chi-tiet-chuyen">
          Chọn lịch và xe
        </a>
        <a className="text-link" href="#hoi-gia-tuyen">
          Chuẩn bị lịch hỏi giá
        </a>
      </nav>
    </section>
  );
}

export function RentalRouteBooking({
  summary,
  seats,
  destination,
}: {
  summary: Summary;
  seats: number;
  destination: string;
}) {
  const photographedVehicle = findVehicles({ seats }).find(
    (vehicle) => vehicle.realPhoto && vehicle.gallery?.length,
  );
  return (
    <section
      id="hoi-gia-tuyen"
      className="article-layout rental-route-booking"
      aria-labelledby="rental-booking-title"
    >
      <h2 id="rental-booking-title">
        Chuẩn bị đặt xe {seats} chỗ đi {destination}
      </h2>
      <ol>
        {summary.checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      {photographedVehicle && (
        <section className="rental-vehicle-photos" aria-labelledby="rental-photos-title">
          <h3 id="rental-photos-title">Ảnh {photographedVehicle.name} do doanh nghiệp cung cấp</h3>
          <div>
            {photographedVehicle.gallery!.slice(0, 2).map((src, index) => (
              <figure key={src}>
                <ResponsiveImage
                  src={src}
                  alt={`Ảnh ${photographedVehicle.name} do Hành Trình Phương Nam cung cấp, hình ${index + 1}`}
                  sizes="(max-width: 760px) 100vw, 400px"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
          <p>
            Ảnh giúp tham khảo dòng xe; chiếc xe, cấu hình và giá phục vụ ngày đi cần xác nhận
            riêng. Xem{' '}
            <a className="text-link" href={`/doi-xe/${photographedVehicle.slug}`}>
              chi tiết {photographedVehicle.name}
            </a>{' '}
            để trao đổi phương án ghế và hành lý.
          </p>
        </section>
      )}
      <RentalRequest template={summary.request} />
      <h3>Ai tư vấn và xác nhận chuyến?</h3>
      <p>
        {site.name} là thương hiệu do {site.company.name} vận hành. Mã số thuế:{' '}
        {site.company.taxCode}. Liên hệ{' '}
        <a className="text-link" href={`tel:${site.phone}`}>
          {site.phoneDisplay}
        </a>{' '}
        để kiểm tra xe và lịch phục vụ. Đặt xe được xác nhận sau khi hai bên thống nhất xe thực tế,
        lịch trình, tổng giá và điều kiện dịch vụ qua kênh liên hệ trực tiếp.
      </p>
      <p>
        Xem{' '}
        <a className="text-link" href="/gioi-thieu">
          thông tin doanh nghiệp
        </a>{' '}
        và{' '}
        <a className="text-link" href="/chinh-sach">
          điều kiện đặt xe, thanh toán, đổi hủy
        </a>
        . Trước khi chuyển cọc, xác nhận bên nhận tiền và nội dung giữ lịch bằng văn bản.
      </p>
      <p className="rental-content-date">
        Cập nhật hướng dẫn chuyến: <time dateTime={summary.updatedAt}>14/11/2026</time>. Ngày cập
        nhật giá được ghi riêng dưới bảng giá.
      </p>
    </section>
  );
}
