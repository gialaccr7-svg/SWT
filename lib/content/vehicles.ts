import type { SeatCount } from '../catalog';

export type Vehicle = {
  slug: string;
  name: string;
  brand: string;
  seats: SeatCount;
  category: string;
  image: string;
  imageAlt: string;
  realPhoto?: boolean;
  gallery?: string[];
  description: string;
  features: string[];
  rentalAdvice: { suitableFor: string; luggage: string; planning: string };
  wedding?: boolean;
  updatedAt?: string;
};
/** Fleet photos: owner-supplied photos where available; otherwise official manufacturer illustrations. */
export const vehicles: Vehicle[] = [
  {
    slug: 'toyota-camry',
    name: 'Toyota Camry',
    brand: 'Toyota',
    seats: 4,
    category: 'Sedan',
    image: '/images/sedan.jpg',
    imageAlt: 'Toyota Camry',
    description: 'Thanh lịch cho chuyến công tác, đón sân bay và hành trình của gia đình nhỏ.',
    features: ['Khoang hành lý riêng', 'Điều hòa', 'Phù hợp công tác'],
    updatedAt: '2026-10-11',
    rentalAdvice: {
      suitableFor:
        'Toyota Camry là lựa chọn sedan để tham khảo khi cần đón đối tác, đi công tác hoặc đưa đón sân bay cho nhóm nhỏ. Nếu hành trình có nhiều khách và vali, hãy so sánh thêm nhóm xe 7 chỗ trước khi chọn.',
      luggage:
        'Khoang hành lý tách khỏi khoang ngồi. Gửi số vali, kích thước kiện lớn và đồ dùng đặc biệt để tư vấn viên kiểm tra khả năng bố trí trên chiếc xe được giao.',
      planning:
        'Với lịch công tác, cung cấp giờ hẹn và thời gian chờ tại từng điểm. Với đón sân bay, gửi thông tin chuyến bay và điểm gặp để thống nhất giờ xe có mặt.',
    },
  },
  {
    slug: 'toyota-innova',
    name: 'Toyota Innova',
    brand: 'Toyota',
    seats: 7,
    category: 'Gia đình',
    image: '/images/mpv.jpg',
    imageAlt: 'Toyota Innova',
    description: 'Không gian linh hoạt cho gia đình, nhóm bạn và chuyến đi nhiều điểm dừng.',
    features: ['Không gian linh hoạt', 'Điều hòa', 'Phù hợp gia đình'],
    updatedAt: '2026-10-11',
    rentalAdvice: {
      suitableFor:
        'Toyota Innova phù hợp để cân nhắc cho chuyến đi gia đình hoặc nhóm bạn có nhiều điểm dừng. So sánh số người thực đi và lượng hành lý với Fortuner cùng nhóm 7 chỗ để nhận tư vấn theo lịch trình.',
      luggage:
        'Khi dùng nhiều ghế, phần không gian dành cho hành lý có thể giảm. Cho biết số người lớn, trẻ em, vali và xe đẩy nếu có; cách bố trí cần được xác nhận theo xe thực tế.',
      planning:
        'Liệt kê các điểm đón, điểm nghỉ và giờ dự kiến về. Nếu đi cùng trẻ nhỏ hoặc người lớn tuổi, trao đổi nhu cầu hỗ trợ và trang bị cần thiết trước khi xác nhận xe.',
    },
  },
  {
    slug: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    brand: 'Toyota',
    seats: 7,
    category: 'SUV',
    image: '/images/suv.jpg',
    imageAlt: 'Toyota Fortuner',
    description: 'Dòng SUV phù hợp những chuyến du lịch, đi tỉnh và lịch trình khám phá.',
    features: ['Gầm cao', 'Khoang xe rộng', 'Phù hợp đi tỉnh'],
    updatedAt: '2026-10-11',
    rentalAdvice: {
      suitableFor:
        'Toyota Fortuner là lựa chọn SUV để tham khảo cho chuyến du lịch hoặc đi tỉnh của nhóm nhỏ. Hãy gửi tuyến đường cụ thể thay vì chọn chỉ theo kiểu dáng; điều kiện tiếp cận điểm đến cần được kiểm tra trước.',
      luggage:
        'Số ghế sử dụng ảnh hưởng đến không gian xếp đồ. Gửi số vali và kiện cồng kềnh để so sánh phương án Fortuner với Innova hoặc nhóm xe lớn hơn.',
      planning:
        'Với điểm đến ở đường nhỏ hoặc khu lưu trú xa trung tâm, cung cấp địa chỉ và thông tin đường vào. Thống nhất điểm đón trả, các điểm dừng và thời gian chờ trong chuyến đi tỉnh.',
    },
  },
  {
    slug: 'mercedes-benz-e-class',
    name: 'Mercedes-Benz E-Class',
    brand: 'Mercedes-Benz',
    seats: 4,
    category: 'Cao cấp',
    image: '/images/mercedes.jpg',
    imageAlt: 'Mercedes-Benz E-Class',
    description: 'Phong cách thanh lịch cho đón tiếp đối tác, sự kiện và ngày cưới.',
    features: ['Nội thất cao cấp', 'Thiết kế thanh lịch', 'Phù hợp sự kiện'],
    wedding: true,
    updatedAt: '2026-10-11',
    rentalAdvice: {
      suitableFor:
        'Mercedes-Benz E-Class là dòng sedan để tham khảo cho lễ đón dâu, đón tiếp đối tác và sự kiện. Với ngày cưới, lựa chọn xe cần đi cùng việc xác nhận màu xe, giờ có mặt và tình trạng sẵn có.',
      luggage:
        'Nếu vừa đón khách vừa mang đồ lễ hoặc vali, mô tả số lượng và kích thước khi hỏi xe. Đoàn gia đình hai bên có thể cần xe riêng; không nên tính xe cưới là phương án chở toàn bộ khách.',
      planning:
        'Gửi giờ đón dâu, địa chỉ hai bên gia đình, nơi làm lễ và nhà hàng. Xác nhận bên chuẩn bị hoa, thời điểm trang trí, thời gian chờ và phụ phí nếu kéo dài chương trình.',
    },
  },
  {
    slug: 'ford-transit',
    name: 'Ford Transit',
    brand: 'Ford',
    seats: 16,
    category: 'Nhóm nhỏ',
    image: '/images/van.jpg',
    imageAlt: 'Ảnh thật xe Ford Transit 16 chỗ do Hành Trình Phương Nam cung cấp',
    realPhoto: true,
    gallery: [1, 2, 3, 4, 5].map((n) => `/images/ford-transit-${n}.jpg`),
    description: 'Không gian thoáng cho đoàn nhỏ trong những chuyến du lịch và công tác.',
    features: ['Khoang xe thoáng', 'Điều hòa', 'Phù hợp đoàn nhỏ'],
    updatedAt: '2026-10-11',
    rentalAdvice: {
      suitableFor:
        'Ford Transit là lựa chọn nhóm 16 chỗ để tham khảo cho đoàn nhỏ đi du lịch, công tác hoặc đưa đón tập thể. Nếu hành trình có nhiều điểm đón, cần tính thêm thời gian tập kết và lên xuống xe.',
      luggage:
        'Gửi tổng số khách và số kiện của cả đoàn, đặc biệt khi đón sân bay. Sức chứa hành lý phải được xác nhận riêng; số chỗ ngồi không thể hiện đầy đủ khả năng chở vali.',
      planning:
        'Chọn một người liên hệ cho đoàn và sắp xếp thứ tự các điểm đón. Trao đổi địa chỉ, khung giờ, nơi đỗ xe và thời gian kết thúc để tránh báo giá thiếu các lượt di chuyển.',
    },
  },
  {
    slug: 'samco-29-cho',
    name: 'Samco 29 chỗ',
    brand: 'Samco',
    seats: 29,
    category: 'Đoàn du lịch',
    image: '/images/bus.jpg',
    imageAlt: 'xe khách du lịch',
    description: 'Phù hợp đoàn công ty, khách tham dự sự kiện và chuyến đi tập thể.',
    features: ['Dành cho đoàn', 'Khoang hành lý', 'Phù hợp sự kiện'],
    updatedAt: '2026-10-11',
    rentalAdvice: {
      suitableFor:
        'Samco 29 chỗ là lựa chọn để tham khảo cho đoàn công ty, chương trình sự kiện hoặc chuyến đi tập thể. Khi quy mô đoàn thay đổi, so sánh nhóm 16 và 45 chỗ để chọn phương án phù hợp số khách thực tế.',
      luggage:
        'Tổng hợp hành lý của đoàn cùng thiết bị sự kiện nếu có. Tư vấn viên cần kiểm tra khoang chứa trên xe thực tế; thiết bị lớn nên được mô tả rõ trước khi chốt phương án vận chuyển.',
      planning:
        'Thống nhất vị trí tập kết có thể tiếp cận và đỗ xe. Với sự kiện, cung cấp các lượt đón trả, giờ khai mạc, giờ kết thúc và số khách của từng lượt để lập lịch xe.',
    },
  },
  {
    slug: 'hyundai-universe',
    name: 'Hyundai Universe',
    brand: 'Hyundai',
    seats: 45,
    category: 'Đoàn lớn',
    image: '/images/universe.jpg',
    imageAlt: 'Hyundai Universe',
    description: 'Lựa chọn cho đoàn lớn, tour du lịch và các chương trình đưa đón tập thể.',
    features: ['Dành cho đoàn lớn', 'Khoang hành lý', 'Phù hợp du lịch'],
    updatedAt: '2026-10-11',
    rentalAdvice: {
      suitableFor:
        'Hyundai Universe là dòng xe nhóm 45 chỗ để tham khảo cho tour du lịch và chương trình đưa đón đoàn lớn. Cần cân đối số khách, hành lý và điều kiện đường vào từng điểm đến trước khi xác nhận.',
      luggage:
        'Lập tổng số vali và danh sách đồ chung của đoàn. Với chuyến nhiều ngày, xác nhận sức chứa khoang hành lý và phương án xếp đồ theo chiếc xe được bố trí.',
      planning:
        'Kiểm tra vị trí đỗ tại điểm tập kết, khách sạn và nơi tổ chức chương trình. Gửi lịch trình từng ngày, các điểm dừng và nhu cầu lưu trú liên quan đến tài xế để làm rõ phạm vi báo giá.',
    },
  },
  {
    slug: 'kia-carnival',
    name: 'Kia Carnival',
    brand: 'Kia',
    seats: 7,
    category: 'MPV cao cấp',
    image: '/images/kia-carnival-1.jpg',
    imageAlt: 'Ảnh thật Kia Carnival màu trắng do Hành Trình Phương Nam cung cấp',
    realPhoto: true,
    gallery: [1, 2, 3, 4, 5, 6].map((n) => `/images/kia-carnival-${n}.jpg`),
    description:
      'MPV cao cấp cho gia đình, công tác và đưa đón sự kiện. Xem ảnh ngoại thất và nội thất thực tế.',
    features: ['Nội thất rộng rãi', 'Điều hòa', 'Phù hợp gia đình'],
    updatedAt: '2026-10-30',
    rentalAdvice: {
      suitableFor:
        'Kia Carnival phù hợp chuyến đi gia đình, đón đối tác và đưa đón sự kiện. Trao đổi số khách để xác nhận cấu hình ghế thực tế trước khi đặt.',
      luggage:
        'Gửi số vali và kích thước hành lý để được tư vấn cách bố trí phù hợp với số ghế sử dụng.',
      planning:
        'Cung cấp ngày đi, điểm đón trả và các điểm dừng. Thuê từ 2 ngày trở lên hoặc thuê xe cưới, hãy liên hệ Zalo ngay để nhận báo giá riêng.',
    },
  },
];
