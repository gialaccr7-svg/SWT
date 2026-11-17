import { ZaloRentalNotice } from '@/components/zalo-rental-notice';
import { ResponsiveImage } from '@/components/responsive-image';
import { PageBanner } from '@/components/page-banner';
import { VehicleCard } from '@/components/vehicle-card';
import { findVehicles } from '@/lib/services/vehicle-service';
import { site } from '@/lib/site';
import { seo } from '@/lib/seo';
export const metadata = seo(
  'Thuê xe cưới Mercedes-Benz & xe hoa',
  'Xe cưới Mercedes-Benz và xe đưa đón gia đình hai bên. Tư vấn dòng xe, lịch đón dâu và trang trí theo nhu cầu.',
  '/xe-cuoi',
  { image: '/images/xecuoi.jpg' },
);
export default function Wedding() {
  return (
    <main id="main">
      <PageBanner
        title="Thuê xe cưới Mercedes-Benz & xe hoa"
        description="Một hành trình ngắn, một kỷ niệm dài. Chọn chiếc xe thanh lịch cho lễ đón dâu và ngày cưới của bạn."
      />
      <section className="container wedding-section">
        <ZaloRentalNotice />
        <div className="wedding-image">
          <ResponsiveImage
            sizes="(max-width: 760px) calc(100vw - 36px), 50vw"
            src="/images/xecuoi.jpg"
            alt="Xe cưới Mercedes-Benz sang trọng cho lễ cưới"
            width="1200"
            height="800"
            fetchPriority="high"
          />
        </div>
        <div className="wedding-copy">
          <p className="eyebrow">XE CƯỚI & XE HOA</p>
          <h2>
            Chăm chút cho
            <br />
            hành trình hạnh phúc.
          </h2>
          <p>
            Trao đổi phong cách lễ cưới, giờ đón dâu và lộ trình hai bên gia đình để tư vấn dòng xe,
            hoa trang trí và thời gian sử dụng phù hợp.
          </p>
          <a
            className="button"
            style={{ marginTop: 25 }}
            href={site.zalo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tư vấn xe cưới qua Zalo
          </a>
        </div>
      </section>
      <section className="section container">
        <h2 style={{ marginBottom: 25 }}>Dòng xe tham khảo cho lễ cưới</h2>
        <div className="vehicle-grid">
          {findVehicles({ wedding: true }).map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
        <article className="article-layout">
          <h2>Chuẩn bị trước khi đặt xe cưới</h2>
          <ul>
            <li>Ngày cưới, giờ đón dâu và thời gian cần xe có mặt.</li>
            <li>Địa chỉ nhà trai, nhà gái, nơi làm lễ và nhà hàng.</li>
            <li>Số người trên xe cưới và số khách cần xe đưa đón riêng.</li>
            <li>Màu xe mong muốn, kiểu hoa và việc bên nào chuẩn bị trang trí.</li>
          </ul>
          <h2>Thống nhất chi phí và thời gian</h2>
          <p>
            Cần xác nhận số giờ sử dụng, thời gian chờ, chi phí hoa và điều kiện phát sinh ngoài
            lịch trình. Dòng xe cụ thể được chốt sau khi kiểm tra tình trạng sẵn có vào ngày bạn
            chọn.
          </p>
          <a className="text-link" href="/kinh-nghiem/chuan-bi-thue-xe-cuoi">
            Đọc hướng dẫn chuẩn bị thuê xe cưới
          </a>
        </article>
      </section>
    </main>
  );
}
