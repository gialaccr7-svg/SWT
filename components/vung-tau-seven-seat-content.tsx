import { ArticleContent } from '@/components/article-content';
import { VehicleCard } from '@/components/vehicle-card';
import { findVehicles } from '@/lib/services/vehicle-service';
import { site } from '@/lib/site';

export function VungTauSevenSeatContent() {
  return (
    <article className="article-layout">
      <h2>Thuê xe một chiều, trong ngày hay 2 ngày 1 đêm?</h2>
      <p>
        Chọn cách sử dụng xe trước khi so giá. Một chuyến đưa đến khách sạn khác với chuyến có xe
        chờ để đi biển, ăn trưa rồi về TP.HCM. Bảng giá phía trên là mức tham khảo cho thời lượng
        ghi trong bảng, không mặc định áp dụng cho cả ba phương án dưới đây.
      </p>
      <ArticleContent
        blocks={[
          {
            type: 'table',
            caption: 'Chọn phạm vi phục vụ xe 7 chỗ đi Vũng Tàu',
            columns: ['Loại chuyến', 'Nhu cầu sử dụng', 'Thông tin để nhận báo giá'],
            rows: [
              [
                'Một chiều',
                'Đưa từ điểm đón tại TP.HCM đến địa chỉ ở Vũng Tàu, kết thúc lượt đưa.',
                'Ngày giờ, địa chỉ đón và trả, số điểm đón, số khách và hành lý.',
              ],
              [
                'Đi và về trong ngày',
                'Có chặng đi và chặng về trong cùng ngày; có thể cần di chuyển giữa các điểm.',
                'Giờ đón, giờ về, bãi biển, nhà hàng và các chặng cần xe phục vụ hoặc chờ.',
              ],
              [
                '2 ngày 1 đêm',
                'Xe ở lại phục vụ theo lịch hoặc chỉ đưa đi rồi hẹn đón về.',
                'Địa chỉ lưu trú, giờ dùng xe từng ngày, phương án xe ở lại và ăn nghỉ tài xế.',
              ],
            ],
          },
        ]}
      />
      <p>
        Giá một chiều và chuyến qua đêm cần được báo theo lịch riêng. Không chia đôi giá một ngày để
        tính một chiều hoặc nhân đôi để tính hai ngày. Nếu ghé Long Hải, Hồ Tràm hay Hồ Cốc, gửi
        đúng điểm đến để nhận báo giá cho toàn bộ hành trình.
      </p>

      <h2>Chọn xe 7 chỗ và kiểm tra chỗ để hành lý</h2>
      <p>
        Bạn có thể tham khảo các dòng xe dưới đây trong danh mục. Dòng xe, cấu hình ghế và tình
        trạng sẵn có vào ngày đi được xác nhận khi tư vấn; giá theo nhóm 7 chỗ không mặc định là giá
        của từng mẫu xe.
      </p>
      <div className="vehicle-grid">
        {findVehicles({ seats: 7 }).map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>
      <p>
        Ví dụ minh họa: nhóm năm khách mang bốn vali và một xe đẩy gấp cần kiểm tra cách xếp đồ khi
        vẫn đủ ghế cho mọi người. Gửi kích thước vali và xe đẩy, thay vì chỉ hỏi “xe 7 chỗ có rộng
        không”. Nếu phải gập ghế mới đủ chỗ chứa đồ, hãy so sánh thêm{' '}
        <a className="text-link" href="/thue-xe/16-cho/di-vung-tau">
          xe 16 chỗ đi Vũng Tàu
        </a>
        .
      </p>
      <p>
        Với trẻ nhỏ, cho biết nhu cầu ghế trẻ em và xác nhận khả năng bố trí trước khi đặt. Số ghế
        dành cho khách và khoang hành lý cần được kiểm tra trên chiếc xe dự kiến phục vụ.
      </p>

      <h2>Lịch trình Vũng Tàu trong ngày để tham khảo</h2>
      <p>
        Khung dưới đây là ví dụ lên kế hoạch, không phải chuyến đã vận hành hay cam kết thời gian di
        chuyển. Giờ đến từng nơi cần điều chỉnh theo điểm đón và điều kiện giao thông.
      </p>
      <ol>
        <li>06:30: hẹn đón tại một địa chỉ ở TP.HCM; gửi ghim và vị trí xe có thể dừng.</li>
        <li>Buổi sáng: đến điểm xuống gần Bãi Sau theo lịch đã thống nhất.</li>
        <li>Buổi trưa: di chuyển đến nhà hàng đã chọn; ghi rõ địa chỉ khi hỏi giá.</li>
        <li>Buổi chiều: nghỉ hoặc ghé Bãi Trước nếu có trong lịch phục vụ.</li>
        <li>16:00: tập trung tại điểm hẹn để khởi hành về địa chỉ trả khách ở TP.HCM.</li>
      </ol>
      <p>
        Chốt xe có chờ trong lúc tắm biển, có chở giữa bãi biển và nhà hàng hay không, cùng giờ kết
        thúc phục vụ dự kiến. Nếu muốn nghỉ lại, xem cách so sánh{' '}
        <a className="text-link" href="/kinh-nghiem/di-vung-tau-trong-ngay-hay-2-ngay-1-dem">
          chuyến trong ngày với 2 ngày 1 đêm
        </a>
        .
      </p>

      <h2>Giá thuê xe cần xác nhận những khoản nào?</h2>
      <ul>
        <li>Xe và tài xế, nhiên liệu, phí cầu đường cho các chặng đã gửi.</li>
        <li>Bãi đỗ, phí vào điểm đón trả và chi phí tại điểm tham quan nếu có.</li>
        <li>Khung giờ phục vụ, cách xử lý khi về muộn hoặc thêm điểm dừng.</li>
        <li>Thuế, hóa đơn và ăn nghỉ tài xế nếu xe ở lại qua đêm.</li>
      </ul>
      <p>
        Đây là danh sách đối chiếu, không phải các khoản mặc định thu thêm. Yêu cầu báo giá ghi rõ
        khoản đã gồm và khoản tính riêng. Đọc thêm{' '}
        <a
          className="text-link"
          href="/kinh-nghiem/thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao"
        >
          bảng kiểm chi phí thuê xe có tài xế
        </a>{' '}
        và{' '}
        <a className="text-link" href="/chinh-sach">
          điều kiện dịch vụ
        </a>{' '}
        trước khi chốt chuyến.
      </p>

      <h2>Gửi lịch để hỏi giá xe 7 chỗ đi Vũng Tàu</h2>
      <p>
        Dùng{' '}
        <a className="text-link" href="#hoi-gia-tuyen">
          mẫu lịch hỏi giá có thể điền và sao chép
        </a>{' '}
        bên dưới để gửi số khách, hành lý, điểm đón trả và các giờ cần xe phục vụ. Nhờ tư vấn viên
        xác nhận dòng xe, tổng giá và điều kiện đặt trước khi giữ lịch.
      </p>
      <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
        Gửi lịch đi Vũng Tàu qua Zalo
      </a>
      <p>
        Hoặc gọi{' '}
        <a className="text-link" href={`tel:${site.phone}`}>
          {site.phoneDisplay}
        </a>{' '}
        để trao đổi lịch trình. Nếu còn phân vân số chỗ, xem{' '}
        <a className="text-link" href="/tuyen-xe/vung-tau">
          bảng giá các loại xe đi Vũng Tàu
        </a>
        .
      </p>

      <section className="article-faq" aria-labelledby="vung-tau-seven-faq">
        <h2 id="vung-tau-seven-faq">Câu hỏi thường gặp khi thuê xe 7 chỗ đi Vũng Tàu</h2>
        <div>
          <h3>Xe 7 chỗ có chở được cả gia đình và nhiều vali không?</h3>
          <p>
            Cần kiểm tra trên dòng xe và cấu hình ghế dự kiến. Gửi số người lớn, trẻ em, số vali,
            kích thước kiện lớn và xe đẩy; yêu cầu xác nhận số ghế cho khách sau khi bố trí đồ. Nếu
            không đủ chỗ, so sánh phương án xe lớn hơn trước khi đặt.
          </p>
        </div>
        <div>
          <h3>Giá trên trang là một chiều hay khứ hồi?</h3>
          <p>
            Bảng hiện ghi mức tham khảo theo thời lượng 1 ngày, chưa xác định thay cho mọi lịch một
            chiều hoặc khứ hồi. Gửi điểm đón trả, giờ về và các chặng cần xe phục vụ để được xác
            nhận đúng phạm vi của báo giá.
          </p>
        </div>
        <div>
          <h3>Thuê xe 7 chỗ đi Vũng Tàu 2 ngày 1 đêm tính thế nào?</h3>
          <p>
            Cần báo giá riêng theo lịch hai ngày. Phân biệt xe ở lại đưa đón với xe chỉ đưa đi và
            quay lại đón về; đồng thời xác nhận giờ sử dụng xe và ăn nghỉ tài xế nếu có.
          </p>
        </div>
        <div>
          <h3>Có thể ghé Hồ Tràm trong chuyến đi Vũng Tàu không?</h3>
          <p>
            Gửi thêm địa chỉ ở Hồ Tràm và thứ tự các điểm khi hỏi xe để kiểm tra phương án phục vụ
            và báo giá toàn chuyến. Không mặc định giá đến trung tâm Vũng Tàu đã gồm chặng này.
          </p>
        </div>
        <div>
          <h3>Cần đặt cọc bao nhiêu để giữ xe?</h3>
          <p>
            Website không công bố mức cọc mặc định. Sau khi thống nhất xe và giá, xác nhận số tiền
            cọc, tài khoản nhận, điều kiện đổi hủy và nội dung giữ lịch trước khi chuyển.
          </p>
        </div>
      </section>
    </article>
  );
}
