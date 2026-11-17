/** Public service facts and planning guidance for the four priority routes. */
export type RentalRouteSummary = {
  summary: string;
  audience: string;
  luggage: string;
  pickup: string;
  trip: string;
  checklist: string[];
  request: string;
  updatedAt: string;
};

export const rentalRouteSummaries: Partial<Record<string, RentalRouteSummary>> = {
  '/thue-xe/7-cho/di-vung-tau': {
    summary:
      'Hành Trình Phương Nam nhận tư vấn thuê xe 7 chỗ có tài xế từ TP.HCM đi Vũng Tàu cho gia đình và nhóm nhỏ. Bạn có thể hỏi chuyến một chiều, đi về trong ngày hoặc 2 ngày 1 đêm. Giá trên trang là tham khảo theo thời lượng trong bảng; xe phục vụ và tổng giá được xác nhận theo ngày đi, điểm đón trả và lịch dùng xe.',
    audience: 'Gia đình, nhóm bạn nhỏ; cần kiểm tra số ghế dành cho khách trên xe dự kiến.',
    luggage:
      'Gửi số vali, kích thước kiện lớn và xe đẩy. Khi dùng nhiều ghế, chỗ để đồ có thể giảm.',
    pickup:
      'Đón theo địa chỉ hẹn tại TP.HCM, trả tại địa chỉ cụ thể ở Vũng Tàu; xác nhận đường vào và nơi dừng.',
    trip: 'Một chiều, trong ngày hoặc 2 ngày 1 đêm; ghi rõ có cần xe chờ và chở giữa các điểm hay không.',
    checklist: [
      'Ghi số người lớn, trẻ em và nhu cầu ghế trẻ em để kiểm tra khả năng bố trí trước khi đặt.',
      'Liệt kê riêng bãi biển, nhà hàng, khách sạn và các chặng ghé Long Hải hoặc Hồ Tràm nếu có.',
      'Với chuyến trong ngày, chốt giờ đón về và nơi thay đồ, nhận hành lý trước khi lên xe.',
      'Với chuyến qua đêm, chọn xe ở lại phục vụ hoặc đưa đón hai lượt; đối chiếu cả nhu cầu đi ăn tối.',
    ],
    request:
      'Tôi cần xe 7 chỗ có tài xế từ TP.HCM đi Vũng Tàu.\nNgày đi: […] — giờ đón: […]\nĐịa chỉ đón: […] — địa chỉ trả: […]\nSố người lớn/trẻ em: […] — vali/xe đẩy: […]\nCác điểm ghé: […]\nLoại chuyến: [một chiều / đi về trong ngày / 2 ngày 1 đêm]\nNgày giờ về: […] — các khoảng cần xe chờ: […]\nNhờ xác nhận dòng xe, số ghế cho khách, chỗ để đồ, tổng giá, khoản đã gồm/chưa gồm và điều kiện cọc, đổi hủy.',
    updatedAt: '2026-11-14',
  },
  '/thue-xe/16-cho/di-vung-tau': {
    summary:
      'Hành Trình Phương Nam tư vấn thuê xe 16 chỗ có tài xế từ TP.HCM đi Vũng Tàu cho đoàn gia đình, nhóm bạn và công ty nhỏ. Chuyến một chiều, đi về trong ngày và 2 ngày 1 đêm cần thống nhất riêng điểm tập kết, hành lý và thời gian xe phục vụ. Giá tham khảo trên trang không thay cho báo giá toàn bộ lịch trình của đoàn.',
    audience:
      'Đoàn gia đình, nhóm bạn hoặc công ty nhỏ; chốt số khách và số ghế thực tế trước khi giữ xe.',
    luggage:
      'Thống kê vali cá nhân, thùng đồ chung và thiết bị. Kiểm tra khoang chứa khi đủ ghế cho cả đoàn.',
    pickup:
      'Chọn điểm tập kết xe có thể dừng; nếu đón nhiều nơi, gửi ghim và số khách tại từng điểm.',
    trip: 'Một chiều, trong ngày hoặc qua đêm; thống nhất các chặng bãi biển, nhà hàng và nơi xe chờ.',
    checklist: [
      'Cử một đầu mối giữ danh sách khách, kiểm đếm người và hành lý tại mỗi lần lên xe.',
      'Gửi điểm đón từng nhóm theo thứ tự, cùng số điện thoại người phụ trách điểm tập kết.',
      'Xin ghim nhà hàng, khách sạn và vị trí xuống gần bãi biển; kiểm tra nơi dừng, đỗ cho xe 16 chỗ.',
      'Chốt giờ tập trung về và các lượt đưa đón buổi tối nếu nghỉ lại; cập nhật báo giá khi đổi lịch.',
    ],
    request:
      'Đoàn cần xe 16 chỗ có tài xế từ TP.HCM đi Vũng Tàu.\nNgày đi: […] — ngày giờ về: […]\nSố khách: […] — số vali/đồ dùng chung: […]\nCác điểm đón theo thứ tự, số khách mỗi điểm: […]\nĐiểm trả, bãi biển, nhà hàng/khách sạn: […]\nLoại chuyến: [một chiều / đi về trong ngày / 2 ngày 1 đêm]\nCác khung giờ cần xe chờ/đưa đón: […]\nNhờ xác nhận xe, số ghế cho khách, khoang hành lý, tổng giá, khoản đã gồm/chưa gồm và điều kiện cọc, đổi hủy.',
    updatedAt: '2026-11-14',
  },
  '/thue-xe/7-cho/di-can-tho': {
    summary:
      'Hành Trình Phương Nam tư vấn thuê xe 7 chỗ có tài xế từ TP.HCM đi Cần Thơ cho gia đình và nhóm nhỏ, theo lịch một chiều, trong ngày hoặc 2 ngày 1 đêm. Nếu đi chợ nổi Cái Răng, cần chốt riêng chuyến thuyền và các lượt xe đưa đón tại bến. Giá xe tham khảo trên trang không mặc định bao gồm thuyền hoặc mọi chặng tham quan.',
    audience:
      'Gia đình và nhóm nhỏ, kể cả lịch kết hợp thăm người thân, công tác hoặc tham quan Cần Thơ.',
    luggage: 'Báo số khách, vali và xe đẩy; chốt nơi để hành lý nếu trả phòng trước khi đi thuyền.',
    pickup:
      'Gửi địa chỉ đón ở TP.HCM, khách sạn hoặc nhà riêng tại Cần Thơ; mỗi điểm đến cần xác nhận riêng.',
    trip: 'Một chiều, trong ngày hoặc 2 ngày 1 đêm; lượt khách sạn–bến thuyền cần có trong lịch báo giá.',
    checklist: [
      'Gửi địa chỉ cụ thể tại Cần Thơ; không dùng giá trung tâm để mặc định cho mọi địa chỉ trong khu vực.',
      'Nếu đi Cái Răng, xin giờ hẹn và ghim bến từ đơn vị thuyền trước khi chốt giờ xe đón.',
      'Với chuyến qua đêm, liệt kê cả lượt ra bến buổi sáng và đi ăn tối để so sánh xe ở lại với đưa đón hai lượt.',
      'Thống nhất hành lý để ở khách sạn hay mang theo xe sau trả phòng; kiểm tra chỗ chứa cho chặng về.',
    ],
    request:
      'Gia đình cần xe 7 chỗ có tài xế từ TP.HCM đi Cần Thơ.\nNgày đi, giờ đón: […] — ngày giờ về: […]\nĐịa chỉ đón/trả: […] — khách sạn nếu có: […]\nSố người lớn/trẻ em: […] — vali/xe đẩy: […]\nLoại chuyến: [một chiều / đi về trong ngày / 2 ngày 1 đêm]\nĐiểm ghé, giờ dùng xe tại Cần Thơ: […]\nNếu đi thuyền: bến lên/trả, giờ hẹn, lượt xe cần đón: […]\nNhờ xác nhận dòng xe, hành lý, tổng giá xe đường bộ, khoản đã gồm/chưa gồm và điều kiện cọc, đổi hủy.',
    updatedAt: '2026-11-14',
  },
  '/thue-xe/16-cho/di-can-tho': {
    summary:
      'Hành Trình Phương Nam tư vấn thuê xe 16 chỗ có tài xế từ TP.HCM đi Cần Thơ cho đoàn gia đình, nhóm bạn và công ty. Đoàn cần thống nhất số khách, các điểm tập kết và lịch dùng xe một chiều, trong ngày hoặc 2 ngày 1 đêm. Nếu kết hợp chợ nổi Cái Răng, phạm vi xe đường bộ và chuyến thuyền cần xác nhận riêng.',
    audience: 'Đoàn gia đình, nhóm bạn, công ty có một đầu mối điều phối khách và lịch trình.',
    luggage:
      'Tổng hợp số vali, thùng quà và thiết bị chung theo kích thước để kiểm tra khoang chứa.',
    pickup:
      'Lập thứ tự điểm tập kết ở TP.HCM, số khách từng điểm; gửi ghim khách sạn và bến tại Cần Thơ.',
    trip: 'Một chiều, trong ngày hoặc 2 ngày 1 đêm; liệt kê cả lượt xe chờ thuyền và đưa đón buổi tối.',
    checklist: [
      'Lập danh sách khách theo điểm đón và cử người báo đủ khách tại từng điểm; cập nhật khi có thay đổi.',
      'Kiểm tra đường vào, nơi xuống khách và nơi đỗ của xe 16 chỗ tại khách sạn, nhà hàng, bến thuyền.',
      'Xin riêng ghim bến lên và bến trả, giờ tập trung và người liên hệ thuyền để hẹn xe đón lại.',
      'Sau chuyến thuyền, kiểm đủ khách trước khi rời bến; gửi cả giờ trả phòng và phương án mang hành lý.',
    ],
    request:
      'Đoàn cần xe 16 chỗ có tài xế từ TP.HCM đi Cần Thơ.\nNgày giờ đi/về: […]\nSố khách, vali và kiện đồ chung: […]\nĐiểm đón theo thứ tự, số khách và đầu mối từng điểm: […]\nĐịa chỉ trả, khách sạn, nhà hàng và điểm ghé: […]\nLoại chuyến: [một chiều / đi về trong ngày / 2 ngày 1 đêm]\nCác giờ cần xe phục vụ/chờ: […]\nNếu đi thuyền: bến lên/trả, giờ hẹn và đầu mối: […]\nNhờ xác nhận xe, số ghế cho khách, khoang đồ, tổng giá xe đường bộ, khoản đã gồm/chưa gồm và điều kiện cọc, đổi hủy.',
    updatedAt: '2026-11-14',
  },
};
