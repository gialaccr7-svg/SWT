import type { SeatCount } from '../catalog';
import { destinations } from './destinations.ts';

/**
 * Curated commercial landing pages. Keep this list deliberately small: every
 * destination must have an editorial guide and real price rows before it is
 * eligible for a seat-specific page.
 */
export const seatRouteCounts = [4, 7, 16, 29, 45] as const satisfies readonly SeatCount[];

export type SeatRouteCount = (typeof seatRouteCounts)[number];

export const seatRouteDestinations = destinations;

export function seatRoutePath(seats: SeatRouteCount, destinationSlug: string) {
  return `/thue-xe/${seats}-cho/di-${destinationSlug}`;
}

export function isSeatRouteCount(seats: number): seats is SeatRouteCount {
  return seatRouteCounts.some((value) => value === seats);
}

export const seatRouteProfiles: Record<
  SeatRouteCount,
  { audience: string; luggage: string; pickup: string }
> = {
  4: {
    audience: 'cặp đôi, khách công tác hoặc gia đình ít người',
    luggage:
      'Báo số người lớn, trẻ em, số vali và kích thước xe đẩy khi gấp. Hãy xác nhận chỗ ngồi và khoang đồ theo mẫu xe dự kiến; cân nhắc xe 7 chỗ nếu mang nhiều đồ.',
    pickup: 'Gửi địa chỉ đón và trả cụ thể, kể cả cổng hoặc sảnh cần đón nếu có nhiều lối vào.',
  },
  7: {
    audience: 'gia đình hoặc nhóm bạn nhỏ',
    luggage:
      'Khi dùng đủ ghế, không gian để vali có thể giảm. Hãy báo số người lớn, trẻ em, xe đẩy và số kiện hành lý để kiểm tra cách bố trí trước chuyến đi.',
    pickup:
      'Xe 7 chỗ linh hoạt hơn tại điểm đón trong khu dân cư, nhưng vẫn cần gửi địa chỉ cụ thể và giờ xuất phát để xác nhận lộ trình.',
  },
  16: {
    audience: 'đoàn gia đình, nhóm bạn hoặc công ty quy mô nhỏ',
    luggage:
      'Tổng số vali của cả đoàn cần được xác nhận riêng; 16 chỗ ngồi không đồng nghĩa mọi cấu hình xe đều chở được cùng một lượng hành lý.',
    pickup:
      'Nên chọn một điểm tập kết thuận tiện, cử một người liên hệ và chốt thứ tự các điểm đón để hạn chế thời gian chờ.',
  },
  29: {
    audience: 'đoàn công ty, nhóm sự kiện hoặc chuyến du lịch tập thể',
    luggage:
      'Hãy thống kê vali, đồ dùng chung và thiết bị sự kiện nếu có. Khoang hành lý cần được kiểm tra theo chiếc xe thực tế.',
    pickup:
      'Điểm tập kết phải có không gian cho xe 29 chỗ dừng đón khách. Cần trao đổi trước vị trí xe chờ tại khách sạn và điểm tham quan.',
  },
  45: {
    audience: 'tour, đoàn thể hoặc chương trình đưa đón số lượng lớn',
    luggage:
      'Lập danh sách hành lý toàn đoàn và các kiện cồng kềnh. Với chuyến nhiều ngày, cần xác nhận khoang chứa và cách xếp đồ trước khi khởi hành.',
    pickup:
      'Kiểm tra đường vào, điểm quay đầu và bãi đỗ cho xe 45 chỗ tại từng điểm. Một điểm tập kết tập trung thường giúp lịch trình ổn định hơn.',
  },
};

export const vungTauSeatGuides = {
  7: {
    intro:
      'Xe 7 chỗ có tài xế là một phương án cho gia đình hoặc nhóm nhỏ từ TP.HCM đi Vũng Tàu. Gửi số người lớn, trẻ em, vali và xe đẩy để kiểm tra cách bố trí ghế và đồ trên chiếc xe dự kiến.',
    service:
      'Nếu đi biển rồi ghé ăn trưa trước khi về, hãy ghi giờ đón, giờ về và cho biết có cần xe chở giữa các điểm hay chỉ chờ tại một nơi. Nếu nghỉ qua đêm, hãy ghi rõ cần xe phục vụ thêm ngày hôm sau hay chỉ cần hẹn giờ đón về.',
  },
  16: {
    intro:
      'Khi hỏi xe 16 chỗ có tài xế đi Vũng Tàu cho đoàn, hãy chốt số khách thực đi và thống kê hành lý của cả nhóm, kể cả đồ dùng chung. Chọn điểm tập kết ở TP.HCM có chỗ dừng đón và cử một người báo giờ tập trung cho cả đoàn.',
    service:
      'Nếu đoàn đón ở nhiều nơi, gửi thứ tự các điểm đón và giờ tập trung ở từng điểm. Tại Vũng Tàu, gửi địa chỉ khách sạn hoặc nhà hàng để xác nhận vị trí xuống khách và nơi xe chờ. Nếu xe cần đưa đón sau bữa tối hoặc phục vụ ngày thứ hai, ghi giờ kết thúc dự kiến từng ngày để chốt phạm vi phục vụ.',
  },
};

export type SeatRouteImage = {
  src: string;
  alt: string;
  credit: string;
  source: string;
  license: string;
};

type SeatRouteMedia = {
  layout: string;
  images: [SeatRouteImage, SeatRouteImage];
};

const commons = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replaceAll('%2F', '/')}`;

/** Two non-repeated editorial images and a distinct composition for routes with editorial galleries. */
export const seatRouteMedia: Partial<Record<string, SeatRouteMedia>> = {
  'vung-tau-7': {
    layout: 'split-left',
    images: [
      {
        src: '/images/seo-vung-tau-7-1.jpg',
        alt: 'Bãi Trước Vũng Tàu nhìn từ trên cao',
        credit: 'NDTK08',
        source: commons('Bai_Truoc_Vung_Tau.jpg'),
        license: 'CC BY 4.0',
      },
      {
        src: '/images/seo-vung-tau-7-2.jpg',
        alt: 'Du khách dạo biển Vũng Tàu',
        credit: 'ZAC',
        source: commons('Couples_in_Vung_Tau_Beach_(Vietnam).jpg'),
        license: 'CC BY 2.0',
      },
    ],
  },
  'vung-tau-16': {
    layout: 'split-right',
    images: [
      {
        src: '/images/seo-vung-tau-16-1.jpg',
        alt: 'Bờ biển Vũng Tàu trong ngày nắng',
        credit: 'ZAC',
        source: commons('Vung_Tau_Beach_(Vietnam).jpg'),
        license: 'CC BY 2.0',
      },
      {
        src: '/images/seo-vung-tau-16-2.jpg',
        alt: 'Không khí ngày nghỉ tại biển Vũng Tàu',
        credit: 'Nh.Nguyen',
        source: commons('Vung_Tau_Beach_On_Holiday.jpg'),
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  'vung-tau-29': {
    layout: 'feature-wide',
    images: [
      {
        src: '/images/seo-vung-tau-29-1.jpg',
        alt: 'Toàn cảnh Vũng Tàu từ Núi Nhỏ',
        credit: 'Pieceofmetalwork',
        source: commons('Vung_Tau_mount_Nho_panorama.jpg'),
        license: 'CC BY-SA 4.0',
      },
      {
        src: '/images/vung-tau-bien-nui-nho.jpg',
        alt: 'Biển và Núi Nhỏ tại Vũng Tàu',
        credit: 'Tat Linh Nguyen',
        source: 'https://unsplash.com/photos/7OXEyXU24-4',
        license: 'Unsplash License',
      },
    ],
  },
  'vung-tau-45': {
    layout: 'offset-stack',
    images: [
      {
        src: '/images/vung-tau-doi-ven-bien.jpg',
        alt: 'Đồi ven biển Vũng Tàu dưới trời xanh',
        credit: 'Vinh Thang',
        source: 'https://unsplash.com/photos/fmFyBOGJ5Zc',
        license: 'Unsplash License',
      },
      {
        src: '/images/vung-tau-thanh-pho-ve-chieu.jpg',
        alt: 'Thành phố Vũng Tàu nhìn từ trên cao về chiều',
        credit: 'Nguyen Hoang Dieu Anh',
        source: 'https://unsplash.com/photos/3xe3QK2Uns0',
        license: 'Unsplash License',
      },
    ],
  },
  'can-tho-7': {
    layout: 'mosaic-tall',
    images: [
      {
        src: '/images/seo-can-tho-7-1.jpg',
        alt: 'Cầu Cần Thơ bắc qua sông Hậu',
        credit: 'Vyacheslav Argenberg',
        source: commons('Can_Tho,_Vietnam,_Bridge.jpg'),
        license: 'CC BY 4.0',
      },
      {
        src: '/images/seo-can-tho-7-2.jpg',
        alt: 'Thuyền buôn bán trên chợ nổi Cần Thơ',
        credit: 'Vyacheslav Argenberg',
        source: commons('Can_Tho,_Vietnam,_Floating_Market,_Boats.jpg'),
        license: 'CC BY 4.0',
      },
    ],
  },
  'can-tho-16': {
    layout: 'mosaic-low',
    images: [
      {
        src: '/images/seo-can-tho-16-1.jpg',
        alt: 'Cầu Cần Thơ lúc bình minh',
        credit: 'Vyacheslav Argenberg',
        source: commons('Can_Tho,_Vietnam,_Bridge_at_sunrise.jpg'),
        license: 'CC BY 4.0',
      },
      {
        src: '/images/seo-can-tho-16-2.jpg',
        alt: 'Những chiếc ghe tại chợ nổi Cái Răng',
        credit: 'Vyacheslav Argenberg',
        source: commons('Can_Tho,_Vietnam,_Floating_Market,_Boats_2.jpg'),
        license: 'CC BY 4.0',
      },
    ],
  },
  'can-tho-29': {
    layout: 'editorial-left',
    images: [
      {
        src: '/images/seo-can-tho-29-1.jpg',
        alt: 'Cầu Cần Thơ phản chiếu ánh bình minh',
        credit: 'Vyacheslav Argenberg',
        source: commons('Can_Tho,_Vietnam,_Bridge_at_sunrise_2.jpg'),
        license: 'CC BY 4.0',
      },
      {
        src: '/images/seo-can-tho-29-2.jpg',
        alt: 'Hoạt động mua bán trên sông tại Cần Thơ',
        credit: 'Vyacheslav Argenberg',
        source: commons('Can_Tho,_Vietnam,_Floating_Market,_Sale.jpg'),
        license: 'CC BY 4.0',
      },
    ],
  },
  'can-tho-45': {
    layout: 'editorial-right',
    images: [
      {
        src: '/images/seo-can-tho-45-1.jpg',
        alt: 'Chợ nổi Cần Thơ vào sáng sớm',
        credit: 'Vyacheslav Argenberg',
        source: commons('Can_Tho,_Vietnam,_Floating_market,_Early_morning.jpg'),
        license: 'CC BY 4.0',
      },
      {
        src: '/images/seo-can-tho-45-2.jpg',
        alt: 'Người bán hàng trên chợ nổi Cần Thơ',
        credit: 'Vyacheslav Argenberg',
        source: commons('Can_Tho,_Vietnam,_Floating_Market,_Woman.jpg'),
        license: 'CC BY 4.0',
      },
    ],
  },
  'nha-trang-7': {
    layout: 'cinema',
    images: [
      {
        src: '/images/seo-nha-trang-7-1.jpg',
        alt: 'Bờ biển Nha Trang nhìn từ trên cao',
        credit: 'Rayrayokocha',
        source: commons('Coast_of_Nha_Trang,_Vietnam._June_2025.jpg'),
        license: 'CC BY 4.0',
      },
      {
        src: '/images/seo-nha-trang-7-2.jpg',
        alt: 'Vịnh Nha Trang và dãy núi ven biển',
        credit: 'Quangpraha',
        source: commons('Nha-trang-3039566.jpg'),
        license: 'CC0',
      },
    ],
  },
  'nha-trang-16': {
    layout: 'postcard',
    images: [
      {
        src: '/images/seo-nha-trang-16-1.jpg',
        alt: 'Biển và đô thị Nha Trang trong ngày nắng',
        credit: 'Leonid',
        source: commons('Nha_Trang,_Vietnam_-_53119835077.jpg'),
        license: 'CC BY-SA 2.0',
      },
      {
        src: '/images/seo-nha-trang-16-2.jpg',
        alt: 'Cảnh quan ven biển Nha Trang',
        credit: 'Leonid',
        source: commons('Nha_Trang,_Vietnam_-_53120927853.jpg'),
        license: 'CC BY-SA 2.0',
      },
    ],
  },
  'nha-trang-29': {
    layout: 'diagonal',
    images: [
      {
        src: '/images/seo-nha-trang-29-1.jpg',
        alt: 'Bãi biển Nha Trang và hàng dừa ven bờ',
        credit: 'Kaz Ish',
        source: commons('Nha_Trang_,_Vietnam_-_panoramio_(39).jpg'),
        license: 'CC BY-SA 3.0',
      },
      {
        src: '/images/seo-nha-trang-29-2.jpg',
        alt: 'Đường bờ biển Nha Trang nhìn từ xa',
        credit: 'Kaz Ish',
        source: commons('Nha_Trang_,_Vietnam_-_panoramio_(40).jpg'),
        license: 'CC BY-SA 3.0',
      },
    ],
  },
  'nha-trang-45': {
    layout: 'gallery-band',
    images: [
      {
        src: '/images/seo-nha-trang-45-1.jpg',
        alt: 'Bãi biển Nha Trang trong ánh nắng ban ngày',
        credit: 'Ken Eckert',
        source: commons('Nha_Trang_Beach,_Vietnam.jpg'),
        license: 'CC BY-SA 4.0',
      },
      {
        src: '/images/universe.jpg',
        alt: 'Ảnh minh họa xe Hyundai Universe 45 chỗ cho hành trình Nha Trang',
        credit: 'Hyundai',
        source: 'https://www.hyundai.com/ng/en/find-a-car/universe/highlights',
        license: 'Ảnh hãng',
      },
    ],
  },
};

export function seatRouteMediaFor(seats: SeatRouteCount, destinationSlug: string) {
  return seatRouteMedia[`${destinationSlug}-${seats}`];
}
