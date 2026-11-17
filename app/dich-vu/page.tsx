import { PageBanner } from '@/components/page-banner';
import { seo } from '@/lib/seo';
import { site } from '@/lib/site';
export const metadata = seo(
  'Dịch vụ thuê xe du lịch, sân bay & công tác',
  'Dịch vụ thuê xe theo lịch trình: du lịch, đi tỉnh, đưa đón sân bay, công tác, sự kiện và xe cưới.',
  '/dich-vu',
  { image: '/images/hero.jpg' },
);
export default function Services() {
  return (
    <main id="main">
      <PageBanner
        title="Dịch vụ thuê xe du lịch, sân bay & công tác"
        description="Một chuyến đi gia đình, một buổi đón đối tác hay ngày cưới đáng nhớ. Bắt đầu từ nhu cầu của bạn để chọn xe phù hợp."
      />
      <div className="container">
        <div className="page-brand-highlight">
          <img
            src="/images/logo321-192.png"
            alt="Logo Hành Trình Phương Nam"
            width={52}
            height={52}
            className="page-brand-logo"
          />
          <div>
            <strong>Dịch vụ vận chuyển chuyên nghiệp · Hành Trình Phương Nam</strong>
            <p>
              Đồng hành cùng bạn trên mọi nẻo đường với đội xe đời mới 4–45 chỗ và xe cưới sang
              trọng. Báo giá minh bạch, tài xế kinh nghiệm, phục vụ tận tâm.
            </p>
          </div>
        </div>
        <article className="article-layout">
          <section id="du-lich">
            <h2>Du lịch & đi tỉnh</h2>
            <p>
              Chọn xe 4–7 chỗ cho gia đình, xe 16 chỗ cho nhóm nhỏ hoặc xe 29–45 chỗ cho đoàn đông.
              Gửi các điểm đến, thời gian dự kiến và số hành khách để được tư vấn phương án phù hợp.
            </p>
            <p>
              Với hành trình nhiều ngày, cần thống nhất số giờ sử dụng, điểm lưu trú, chi phí liên
              quan đến tài xế và giới hạn thay đổi lịch trình.
            </p>
            <a className="text-link" href="/doi-xe">
              Xem xe du lịch
            </a>
          </section>
          <section id="san-bay">
            <h2>Đưa đón sân bay</h2>
            <p>
              Cung cấp ngày bay, giờ hạ cánh hoặc giờ cần có mặt, số khách và số kiện hành lý. Thống
              nhất điểm gặp, thời gian chờ và phương án khi chuyến bay thay đổi trước khi xác nhận
              chuyến xe.
            </p>
            <p>
              Khi hỏi xe đón khách đến, gửi mã chuyến bay, nhà ga và số điện thoại người liên hệ.
              Khi đi ra sân bay, gửi địa chỉ đón và giờ cần có mặt để tư vấn khung giờ khởi hành.
              Hãy làm rõ phí chờ, bãi đỗ và cách xử lý nếu chuyến bay thay đổi.
            </p>
            <p>
              Nhóm ít người có thể tham khảo{' '}
              <a className="text-link" href="/thue-xe/4-cho">
                xe 4 chỗ
              </a>{' '}
              hoặc{' '}
              <a className="text-link" href="/thue-xe/7-cho">
                xe 7 chỗ
              </a>
              . Nếu đoàn mang nhiều vali, gửi tổng số kiện để kiểm tra nhóm xe lớn hơn.
            </p>
          </section>
          <section id="cong-tac">
            <h2>Công tác & sự kiện</h2>
            <p>
              Tư vấn xe cho đón tiếp đối tác, đưa đón nhân viên, hội nghị và sự kiện. Khi có nhiều
              điểm đón, hãy chuẩn bị danh sách vị trí, giờ tập kết và số khách ở từng điểm để sắp
              xếp lộ trình.
            </p>
            <p>
              Lịch sự kiện nên ghi từng lượt đi và về, thời gian xe chờ, người phụ trách đoàn và nơi
              đỗ tại địa điểm tổ chức. Nếu chương trình kéo dài hoặc số khách thay đổi, cần thống
              nhất lại phạm vi sử dụng và chi phí trước khi điều chỉnh.
            </p>
            <p>
              Tham khảo{' '}
              <a className="text-link" href="/thue-xe/16-cho">
                xe 16 chỗ
              </a>
              ,{' '}
              <a className="text-link" href="/thue-xe/29-cho">
                xe 29 chỗ
              </a>{' '}
              hoặc{' '}
              <a className="text-link" href="/thue-xe/45-cho">
                xe 45 chỗ
              </a>{' '}
              theo quy mô đoàn.
            </p>
          </section>
          <section>
            <h2>Xe cưới & đưa đón gia đình</h2>
            <p>
              Xe sedan sang trọng cho lễ đón dâu và các dòng xe lớn hơn để đưa đón gia đình hai bên.
              Dòng xe, trang trí hoa và lịch trình được trao đổi riêng theo ngày cưới.
            </p>
            <a className="text-link" href="/xe-cuoi">
              Tìm hiểu xe cưới
            </a>
          </section>
          <h2>Kiểm tra phạm vi báo giá trước khi đặt xe</h2>
          <ul>
            <li>Dòng xe, số khách và sức chứa hành lý được xác nhận theo xe thực tế.</li>
            <li>Ngày sử dụng, điểm đón trả, các điểm dừng và tổng thời gian chờ.</li>
            <li>Nhiên liệu, phí đường, bến bãi và chi phí liên quan đến tài xế đã gồm hay chưa.</li>
            <li>Điều kiện đặt cọc, đổi lịch, hủy chuyến và chi phí phát sinh.</li>
          </ul>
          <p>
            Xem{' '}
            <a className="text-link" href="/chinh-sach">
              điều kiện dịch vụ
            </a>{' '}
            và{' '}
            <a className="text-link" href="/kinh-nghiem/thong-tin-can-co-khi-hoi-bao-gia">
              thông tin cần gửi khi hỏi báo giá
            </a>
            . Mức giá và điều kiện cụ thể được thống nhất cho từng lịch trình.
          </p>
          <h2>Trao đổi lịch trình ngay</h2>
          <p>
            Không cần quyết định dòng xe trước. Gửi nhu cầu để được tư vấn và nhận báo giá cụ thể.
          </p>
          <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
            Tư vấn qua Zalo
          </a>
        </article>
      </div>
    </main>
  );
}
