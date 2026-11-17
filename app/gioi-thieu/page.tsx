import { PageBanner } from '@/components/page-banner';
import { CompanyDetails } from '@/components/company-details';
import { site } from '@/lib/site';
import { seo } from '@/lib/seo';

export const metadata = seo(
  'Về Thuê Xe Hành Trình Phương Nam',
  `Thông tin Thuê Xe Hành Trình Phương Nam và ${site.company.name}. Dịch vụ xe du lịch 4–45 chỗ và xe cưới. Liên hệ ${site.phoneDisplay}.`,
  '/gioi-thieu',
);

export default function About() {
  return (
    <main id="main">
      <PageBanner
        title="Về Thuê Xe Hành Trình Phương Nam"
        description="Thông tin đơn vị vận hành và các dịch vụ dành cho hành trình của bạn."
      />
      <div className="container about-layout">
        <article className="about-content">
          <p className="eyebrow">THUÊ XE DU LỊCH & XE CƯỚI</p>
          <h2>Đồng hành cùng những chuyến đi.</h2>
          <p>
            Thuê Xe Hành Trình Phương Nam là thương hiệu dịch vụ của {site.company.name}. Chúng tôi
            tư vấn thuê xe du lịch từ 4 đến 45 chỗ và xe cưới theo nhu cầu, số khách và lịch trình
            thực tế.
          </p>
          <p>
            Từ Toyota phù hợp chuyến đi gia đình đến Mercedes-Benz cho công tác và ngày cưới, mỗi
            lựa chọn được trao đổi để phù hợp với hành trình của bạn. Dòng xe cụ thể và tình trạng
            sẵn có được xác nhận khi tư vấn.
          </p>
          <h2>Dịch vụ của Hành Trình Phương Nam</h2>
          <ul>
            <li>Xe du lịch 4, 7, 16, 29 và 45 chỗ.</li>
            <li>Đưa đón sân bay, công tác và sự kiện.</li>
            <li>Xe cưới, xe hoa và đưa đón gia đình hai bên.</li>
          </ul>
          <a className="text-link" href="/dich-vu">
            Tìm hiểu các dịch vụ
          </a>
        </article>
        <aside className="company-panel" aria-labelledby="company-heading">
          <p className="eyebrow">ĐƠN VỊ VẬN HÀNH</p>
          <h2 id="company-heading">Thông tin công ty</h2>
          <CompanyDetails />
          <div className="company-contact">
            <span>Điện thoại & Zalo</span>
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </div>
          <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
            Tư vấn qua Zalo
          </a>
        </aside>
      </div>
    </main>
  );
}
