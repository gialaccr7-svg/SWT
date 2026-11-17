import type { SeatRouteCount } from './seat-routes';

export const seatRouteTripTips: Record<string, Record<SeatRouteCount, string>> = {
  'vung-tau': {
    4: 'Nếu đi Bãi Sau trong ngày, tính cả túi đồ biển, vali và xe đẩy gấp khi hỏi xe. Gửi địa chỉ bãi biển hoặc khách sạn và giờ đón về dự kiến.',
    7: 'Nếu ghé Bãi Trước và Bãi Sau, cho biết nhóm mang theo xe đẩy hay đồ biển và có cần lấy đồ trên xe giữa hai điểm hay không.',
    16: 'Nếu lịch có cả bãi biển và nhà hàng, hẹn vị trí đón lại đoàn ở từng nơi và báo tài xế giờ kết thúc hoạt động để xác nhận thời gian chờ.',
    29: 'Nếu đoàn ăn trưa sau khi tắm biển, hỏi nhà hàng vị trí xe có thể dừng đón và nơi xe đỗ trong lúc chờ. Thống kê cả đồ dùng chung cho hoạt động trên bãi biển.',
    45: 'Nếu chương trình có nhiều điểm ven biển, chốt vị trí tập kết gần chỗ xe lớn có thể dừng và quay đầu. Thống nhất giờ gom đoàn, nơi đỗ chờ và lượng hành lý trước khi đặt.',
  },
  'nha-trang': {
    4: 'Với chuyến đường dài, báo số người, vali và xe đẩy gấp để kiểm tra khoang đồ trước. Gửi địa chỉ trả ở Nha Trang và ghi riêng nếu cần ghé Cam Ranh.',
    7: 'Nếu đi với trẻ nhỏ, gửi số người, số vali và kích thước xe đẩy khi gấp. Ghi rõ giờ nhận phòng và những chặng nghỉ muốn bố trí trên đường.',
    16: 'Gom số vali của cả đoàn trước khi chọn xe. Nếu có chuyến tham quan trên vịnh, gửi điểm tập kết ở TP.HCM, bến trả khách trên đất liền và giờ hẹn đón lại.',
    29: 'Hỏi khách sạn xem xe có thể dừng ở sảnh hay cần trả đoàn ở vị trí khác. Gửi số kiện của đoàn và tách giờ xe chạy, giờ chờ nếu cần đưa đón giữa khách sạn và bến.',
    45: 'Chốt điểm tập kết có chỗ cho xe lớn dừng và xếp hành lý. Kiểm tra chỗ trả đoàn và bãi đỗ ở khách sạn hoặc bến tàu; gửi giờ phục vụ theo từng ngày nếu ở qua đêm.',
  },
  'can-tho': {
    4: 'Nếu ghé chợ nổi Cái Răng, báo số khách, vali và xe đẩy gấp; gửi tên bến và giờ lên thuyền. Hẹn trước nơi xe đón lại trên bờ.',
    7: 'Nếu đi cùng trẻ nhỏ, thống kê số người, số vali và xe đẩy. Khi có lịch đi thuyền và ghé bến Ninh Kiều, cho biết muốn mang theo hay để lại hành lý để hỏi phương án phù hợp.',
    16: 'Chốt điểm tập kết ở TP.HCM và thống kê túi, vali của cả nhóm. Nếu ghé chợ nổi, gửi tên bến và giờ đoàn lên bờ để hẹn vị trí xe đón lại.',
    29: 'Nếu đoàn đến khách sạn hoặc điểm họp, hỏi trước vị trí dừng để dỡ hành lý. Khi có chặng đi thuyền, xác nhận bãi đỗ và thời gian xe chờ đoàn trở lại.',
    45: 'Nếu đoàn xuống ở bến Ninh Kiều hoặc tại bến đi chợ nổi, xác nhận nơi xe lớn có thể dừng và gom đoàn. Cử người kiểm hành lý và chốt giờ xe đón sau chặng đường thủy.',
  },
};
