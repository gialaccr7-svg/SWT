import { contact } from '@/lib/contact';
import { PageBanner } from '@/components/page-banner';
import { seo } from '@/lib/seo';
export const metadata = seo(
  'Quyền riêng tư',
  'Thông tin về dữ liệu đo lường khi sử dụng website và liên hệ tư vấn qua điện thoại hoặc Zalo.',
  '/bao-mat',
);
export default function Privacy() {
  return (
    <main id="main">
      <PageBanner
        title="Quyền riêng tư"
        description="Thông tin về việc sử dụng website và các kênh liên hệ."
      />
      <div className="container">
        <article className="article-layout">
          <h2>Dữ liệu trên website</h2>
          <p>
            Website không có tài khoản khách hàng, biểu mẫu lưu thông tin cá nhân, thanh toán trực
            tuyến hoặc công cụ quảng cáo. Bộ lọc xe hoạt động trong trình duyệt và không tạo hồ sơ
            khách hàng.
          </p>
          <h2>Đo lường bằng Google Analytics</h2>
          <p>
            Website sử dụng Google Analytics 4 để thống kê lượt xem trang, thông tin kỹ thuật chung
            về thiết bị và trình duyệt, khu vực gần đúng, cùng lượt bấm gọi điện hoặc mở Zalo. Công
            cụ này có thể sử dụng cookie và mã nhận dạng thiết bị để tổng hợp báo cáo sử dụng
            website.
          </p>
          <p>
            Website không chủ động gửi tên, số điện thoại hoặc nội dung tin nhắn của bạn trong các
            tham số Analytics. Dữ liệu do Google xử lý theo{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Chính sách quyền riêng tư của Google
            </a>
            . Bạn có thể hạn chế cookie trong cài đặt trình duyệt; khi đó báo cáo đo lường có thể
            không đầy đủ.
          </p>
          <h2>Thông tin khi liên hệ</h2>
          <p>
            Khi bấm Zalo, bạn chuyển sang dịch vụ của Zalo. Tin nhắn và thông tin bạn chia sẻ tại đó
            được xử lý trên nền tảng này. Chỉ gửi thông tin cần thiết cho việc tư vấn lịch trình.
          </p>
          <h2>Dịch vụ cung cấp hạ tầng</h2>
          <p>
            Đơn vị lưu trữ website có thể xử lý thông tin kỹ thuật như địa chỉ IP và yêu cầu truy
            cập để vận hành dịch vụ. Phông chữ được tải trực tiếp từ website này; trình duyệt không
            gửi yêu cầu tải font đến Google Fonts. Bản xem thử có thể yêu cầu đăng nhập do nền tảng
            lưu trữ quản lý.
          </p>
          <h2>Liên hệ về thông tin đã chia sẻ</h2>
          <p>
            Nếu muốn trao đổi về nội dung đã gửi khi tư vấn, hãy liên hệ số {contact.phoneDisplay}{' '}
            qua kênh bạn đã sử dụng.
          </p>
        </article>
      </div>
    </main>
  );
}
