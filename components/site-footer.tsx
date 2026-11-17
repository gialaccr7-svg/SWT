import { site } from '@/lib/site';
import { CompanyDetails } from './company-details';

export function SiteFooter() {
  return (
    <>
      <section className="contact-strip">
        <div className="container">
          <div>
            <p className="eyebrow">BẮT ĐẦU HÀNH TRÌNH</p>
            <h2>Bạn lên lịch. Chúng tôi tư vấn xe.</h2>
            <p>
              Thuê từ 2 ngày trở lên hoặc thuê xe cưới? Liên hệ Zalo ngay để nhận báo giá theo lịch
              trình.
            </p>
          </div>
          <a className="button light" href={site.zalo} target="_blank" rel="noopener noreferrer">
            Chat Zalo · {site.phoneDisplay}
          </a>
        </div>
      </section>
      <footer>
        <div className="container footer-grid">
          <section className="footer-company" aria-label="Thông tin doanh nghiệp">
            <a
              className="footer-brand"
              href="/"
              aria-label="Thuê Xe Hành Trình Phương Nam - Về trang chủ"
            >
              <img
                src="/images/logo321-192.png"
                alt="Logo Hành Trình Phương Nam"
                width={36}
                height={36}
                className="footer-logo-img"
              />
              <span>{site.name}</span>
            </a>
            <p className="footer-description">Thuê xe du lịch 4–45 chỗ & xe cưới.</p>
            <CompanyDetails />
          </section>
          <div>
            <strong>Khám phá</strong>
            <a href="/doi-xe">Danh mục xe</a>
            <a href="/bang-gia">Bảng giá từ TP.HCM</a>
            <a href="/dich-vu">Dịch vụ thuê xe</a>
            <a href="/xe-cuoi">Xe cưới & xe hoa</a>
          </div>
          <div>
            <strong>Thông tin hữu ích</strong>
            <a href="/gioi-thieu">Về Hành Trình Phương Nam</a>
            <a href="/kinh-nghiem">Kinh nghiệm thuê xe</a>
            <a href="/chinh-sach">Chính sách dịch vụ</a>
            <a href="/bao-mat">Quyền riêng tư</a>
          </div>
          <div>
            <strong>Liên hệ tư vấn</strong>
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            <a href={site.zalo} target="_blank" rel="noopener noreferrer">
              Zalo: {site.phone}
            </a>
            <p>Báo giá theo lịch trình thực tế.</p>
          </div>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} {site.name}.
          <span>Hành trình của bạn, sự tận tâm của chúng tôi.</span>
        </div>
      </footer>
      <a className="floating-zalo" href={site.zalo} target="_blank" rel="noopener noreferrer">
        <b>Zalo</b>
        <span>Tư vấn thuê xe</span>
      </a>
    </>
  );
}
