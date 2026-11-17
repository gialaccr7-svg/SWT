import { PageBanner } from '@/components/page-banner';
import { seo } from '@/lib/seo';
export const metadata = seo(
  'Thông tin & điều kiện dịch vụ',
  'Thông tin cần xác nhận trước khi thuê xe: lịch trình, báo giá, thanh toán, thay đổi và hủy chuyến.',
  '/chinh-sach',
);
export default function Policy() {
  return (
    <main id="main">
      <PageBanner
        title="Thông tin & điều kiện dịch vụ"
        description="Trao đổi rõ ràng trước chuyến đi để cả hai bên cùng thống nhất."
      />
      <div className="container">
        <article className="article-layout">
          <h2>Xác nhận thuê xe</h2>
          <p>
            Thông tin xe trên website giúp bạn tham khảo. Việc đặt xe chỉ được xác nhận sau khi hai
            bên thống nhất xe thực tế, ngày sử dụng, lịch trình, chi phí và điều kiện dịch vụ qua
            kênh liên hệ trực tiếp.
          </p>
          <h2>Báo giá và thanh toán</h2>
          <p>
            Báo giá theo từng lịch trình. Trước khi thanh toán, cần xác nhận các khoản bao gồm, chưa
            bao gồm, tiền đặt cọc nếu có và phương thức thanh toán. Website không nhận thanh toán
            trực tuyến.
          </p>
          <h2>Thay đổi hoặc hủy chuyến</h2>
          <p>
            Điều kiện đổi lịch, hủy và hoàn tiền phải được xác nhận bằng văn bản tại thời điểm đặt
            xe. Không có mức phí hủy mặc định được công bố trên website. Khi cần đổi, hãy liên hệ
            sớm để được kiểm tra phương án phù hợp.
          </p>
          <h2>Thông tin xe và hình ảnh</h2>
          <p>
            Website sử dụng ảnh xe do Hành Trình Phương Nam cung cấp, hình ảnh từ hãng và ảnh từ
            nguồn được phép sử dụng trong bài cẩm nang. Hình ảnh không phải cam kết xe cụ thể sẽ
            phục vụ. Màu xe, cấu hình ghế, trang bị và khả năng chở hành lý được xác nhận trước
            chuyến đi.
          </p>
          <h2>Phát sinh trong lịch trình</h2>
          <p>
            Điểm dừng bổ sung, thời gian chờ hoặc sử dụng xe ngoài phạm vi đã thống nhất có thể ảnh
            hưởng chi phí. Hai bên cần trao đổi trước khi thay đổi hành trình.
          </p>
        </article>
      </div>
    </main>
  );
}
