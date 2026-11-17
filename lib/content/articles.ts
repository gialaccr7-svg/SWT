import { tripPlanningArticles } from './trip-planning-articles.ts';
import { travelGuides } from './travel-guides-2026-11.ts';

export type InlineContent = string | { text: string; href?: string }[];
export type ArticleBlock =
  | { type: 'paragraph'; content: InlineContent }
  | { type: 'list'; ordered?: boolean; items: InlineContent[] }
  | { type: 'table'; caption: string; columns: string[]; rows: InlineContent[][] }
  | { type: 'image'; src: string; alt: string; width: number; height: number; caption?: string };

export type Article = {
  slug: string;
  title: string;
  seoTitle?: string;
  topics?: string[];
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  date: string;
  updatedAt?: string;
  sections: { heading: string; paragraphs?: string[]; blocks?: ArticleBlock[] }[];
  faq?: { question: string; answer: InlineContent }[];
};
/** Add an article here: list, detail route, metadata and sitemap update automatically. */
export const articles: Article[] = [
  ...travelGuides,
  ...tripPlanningArticles,
  {
    slug: 'di-cho-noi-cai-rang-tu-tp-hcm',
    topics: ['can-tho'],
    title: 'Đi chợ nổi Cái Răng từ TP.HCM: cách hẹn xe và thuyền',
    description:
      'Lên lịch đi chợ nổi Cái Răng từ TP.HCM. Xem cách chọn chuyến trong ngày hoặc qua đêm, hẹn bến đón và tách chi phí xe với thuyền.',
    category: 'Lịch trình Cần Thơ',
    date: '2026-11-10',
    image: '/images/seo-can-tho-7-2.jpg',
    imageAlt: 'Các ghe chở hàng và thuyền nhỏ tại chợ nổi Cái Răng ở Cần Thơ',
    imageCaption: 'Chợ nổi Cái Răng. Ảnh của Vyacheslav Argenberg, giấy phép CC BY 4.0.',
    sections: [
      {
        heading: 'Chốt chuyến thuyền trước khi hẹn giờ xe',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Theo ' },
              {
                text: 'hướng dẫn du lịch Cần Thơ của Cục Du lịch Quốc gia Việt Nam',
                href: 'https://vietnam.travel/place-to-go/mekong-delta/can-tho/',
              },
              {
                text: ', nên đi chợ nổi Cái Răng vào buổi sớm. Hãy hỏi đơn vị thuyền giờ có mặt, địa chỉ hoặc ghim bản đồ của bến lên thuyền và bến trả khách. Dùng những mốc đó để hẹn xe đón tại TP.HCM hoặc tại khách sạn ở Cần Thơ.',
              },
            ],
          },
          {
            type: 'list',
            items: [
              'Gửi tài xế ghim bản đồ và tên cổng hoặc điểm xuống khách. Đoàn đông nên hỏi trước xe có thể dừng ở đâu và còn phải đi bộ bao xa tới bến.',
              'Hỏi bến trả khách có trùng bến xuất phát không. Nếu khác, gửi ghim của cả hai bến và chốt điểm đón lại sau chuyến thuyền.',
              'Hẹn một người trong đoàn báo giờ cập bến dự kiến cho tài xế. Nếu có lịch ăn sáng hoặc tham quan tiếp, ghi rõ điểm tiếp theo và thời gian cần đến.',
            ],
          },
        ],
      },
      {
        heading: 'Đi trong ngày hay ngủ lại Cần Thơ?',
        blocks: [
          {
            type: 'table',
            caption: 'Hai cách lên lịch từ TP.HCM đi chợ nổi Cái Răng',
            columns: ['Phương án', 'Lịch trình gợi ý', 'Thông tin cần chốt'],
            rows: [
              [
                'Đi và về trong ngày',
                'Đón tại TP.HCM, đến bến đúng giờ đã hẹn, đi thuyền, ghé ăn hoặc tham quan rồi về TP.HCM.',
                'Xác nhận giờ khởi hành dựa trên địa chỉ đón và giờ thuyền. Cộng thời gian tập trung, đi bộ từ điểm xuống xe và chờ lên thuyền.',
              ],
              [
                'Ngủ lại một đêm',
                'Đến Cần Thơ ngày đầu, đi chợ nổi sáng hôm sau. Nếu ghé bến Ninh Kiều hoặc ăn trưa trước khi về, đưa các điểm này vào lịch xe.',
                'Ghi địa chỉ khách sạn, giờ đón buổi sáng và giờ trả phòng. Hỏi cách bố trí xe, thời gian phục vụ và chi phí liên quan đến tài xế.',
              ],
            ],
          },
          {
            type: 'paragraph',
            content:
              'Nếu gia đình có trẻ nhỏ hoặc người lớn tuổi và khó tập trung sớm tại TP.HCM, ngủ lại một đêm giúp tách chặng đường bộ khỏi buổi tham quan. Nếu đi trong ngày, ưu tiên các điểm chính và chừa thời gian cho việc lên xuống thuyền.',
          },
        ],
      },
      {
        heading: 'Chọn xe và tách báo giá xe với thuyền',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Gia đình đi ít người có thể xem ' },
              { text: 'xe 7 chỗ đi Cần Thơ', href: '/thue-xe/7-cho/di-can-tho' },
              { text: '. Đoàn có nhiều khách hoặc nhiều hành lý có thể hỏi thêm phương án ' },
              { text: 'xe 16 chỗ đi Cần Thơ', href: '/thue-xe/16-cho/di-can-tho' },
              {
                text: '. Gửi số người lớn, trẻ em, vali và xe đẩy để xác nhận sức chứa theo xe dự kiến.',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Tra dòng điểm đến và số chỗ trên ' },
              { text: 'bảng giá tuyến TP.HCM đi Cần Thơ', href: '/tuyen-xe/can-tho' },
              {
                text: '. Mức niêm yết cho chuyến một ngày là giá tham khảo. Nếu ngủ lại, hãy hỏi báo giá theo toàn bộ lịch trình. Xác nhận riêng giá thuyền, điểm đón tại bến, giờ xe chờ, phí bãi đỗ và các khoản đã gồm trong tiền xe.',
              },
            ],
          },
        ],
      },
      {
        heading: 'Mẫu tin nhắn hỏi xe đi chợ nổi',
        blocks: [
          {
            type: 'list',
            items: [
              'Ngày đi và về […] · Số người lớn […], trẻ em […] · Vali và xe đẩy […].',
              'Đón lúc […] tại [địa chỉ TP.HCM]. Lên thuyền lúc […] tại [ghim bến].',
              'Xe đón lại lúc […] tại [ghim bến trả khách]. Sau đó ghé […] và trả khách tại […] lúc […].',
              'Nếu ngủ lại, khách sạn tại […] và cần xe vào các khung giờ […]. Nhờ xác nhận xe phù hợp, phạm vi phục vụ và các khoản tính riêng.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Nguồn ảnh chợ nổi Cái Răng trên Wikimedia Commons',
                href: 'https://commons.wikimedia.org/wiki/File:Can_Tho,_Vietnam,_Floating_Market,_Boats.jpg',
              },
              { text: ' · ' },
              { text: 'Giấy phép CC BY 4.0', href: 'https://creativecommons.org/licenses/by/4.0/' },
              { text: '. Ảnh đã được tối ưu để hiển thị trên web.' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao',
    topics: ['chi-phi', 'dat-xe'],
    title: 'Thuê xe có tài xế: cần kiểm tra những khoản phí nào?',
    description:
      'Kiểm tra tiền xe, phí cầu đường, bãi đỗ, thời gian chờ và chi phí qua đêm trước khi chốt báo giá thuê xe có tài xế từ TP.HCM.',
    category: 'Chi phí thuê xe',
    date: '2026-11-02',
    image: '/images/chi-phi-thue-xe-bao-gia.jpg',
    imageAlt: 'Đối chiếu giấy tờ và các khoản chi phí bằng máy tính cầm tay',
    sections: [
      {
        heading: 'Trước khi so giá, hãy so cùng một lịch trình',
        paragraphs: [
          'Khi thuê xe có tài xế, con số cuối tin nhắn chỉ có ý nghĩa nếu bạn biết giá đó phục vụ chuyến đi nào. Cùng là xe 7 chỗ đi tỉnh, chuyến đưa khách một chiều sẽ khác chuyến có xe chờ, đưa đi ăn rồi đón về TP.HCM. Số điểm đón, giờ kết thúc và dòng xe cũng cần được ghi rõ.',
          'Cách kiểm tra dễ nhất là gửi một lịch trình thống nhất cho các bên báo giá, sau đó tách ba nhóm: khoản đã nằm trong tiền xe, khoản khách thanh toán riêng và khoản chỉ phát sinh khi đổi kế hoạch. Đừng mặc định cụm từ “trọn gói” có cùng phạm vi ở mọi đơn vị.',
        ],
      },
      {
        heading: 'Bảng kiểm các khoản cần hỏi trong báo giá',
        blocks: [
          {
            type: 'table',
            caption: 'Các khoản cần xác nhận khi thuê xe có tài xế',
            columns: ['Khoản chi phí', 'Câu hỏi cần làm rõ'],
            rows: [
              [
                'Tiền xe và tài xế',
                'Giá áp dụng cho dòng xe nào, ngày nào, một chiều hay khứ hồi?',
              ],
              ['Nhiên liệu', 'Đã nằm trong giá theo lịch trình hay có điều kiện tính riêng?'],
              [
                'Cầu đường và cao tốc',
                'Đã gồm toàn bộ chặng dự kiến chưa; đổi đường có làm thay đổi giá?',
              ],
              [
                'Bãi đỗ và phí vào điểm đón',
                'Tính trong gói hay theo thực tế; ai thanh toán và đối chiếu thế nào?',
              ],
              [
                'Giờ chờ và sử dụng ngoài lịch',
                'Khung giờ phục vụ kết thúc lúc nào; nếu muộn hơn thì tính ra sao?',
              ],
              [
                'Thêm điểm dừng hoặc quãng đường',
                'Điểm nào đã có trong báo giá; đổi lịch cần xác nhận chi phí với ai?',
              ],
              [
                'Ăn nghỉ tài xế khi qua đêm',
                'Bên nào sắp xếp, chi phí đã gồm chưa và yêu cầu chỗ nghỉ ra sao?',
              ],
              [
                'Hóa đơn và tổng thanh toán',
                'Giá đã bao gồm thuế theo báo giá chưa; cần cung cấp thông tin gì?',
              ],
            ],
          },
          {
            type: 'paragraph',
            content:
              'Đây là danh sách để kiểm tra phạm vi dịch vụ, không phải danh sách phụ phí bắt buộc. Một khoản có thể đã nằm trong gói của bạn. Chỉ cộng vào ngân sách khi hai bên xác nhận khoản đó được tính riêng.',
          },
        ],
      },
      {
        heading: 'Phí cầu đường và bãi đỗ: hỏi theo từng chặng',
        blocks: [
          {
            type: 'paragraph',
            content:
              'Một chuyến đi có thể gồm đón trong thành phố, di chuyển liên tỉnh, ghé điểm tham quan và trả khách. Hãy hỏi phí đường đã tính cho cả lượt đi và lượt về chưa. Nếu bạn dự kiến ghé thêm một nơi ngoài lộ trình, gửi địa chỉ trước để đơn vị vận chuyển kiểm tra lại.',
          },
          {
            type: 'image',
            src: '/images/chi-phi-thue-xe-cau-duong.jpg',
            alt: 'Khu vực cổng thu phí với nhiều làn xe trên đường bộ',
            width: 1600,
            height: 1067,
          },
          {
            type: 'paragraph',
            content:
              'Với bãi đỗ, cần phân biệt phí đỗ tại nhà hàng, khách sạn, điểm tham quan và phí xe vào khu vực đón trả. Nếu tính theo thực tế, thống nhất cách thông báo và đối chiếu khoản chi. Không nên suy từ báo giá chuyến trước sang chuyến mới có điểm đến khác.',
          },
        ],
      },
      {
        heading: 'Giờ chờ, thêm điểm đón và thay đổi hành trình',
        paragraphs: [
          '“Thuê một ngày” cần được gắn với giờ bắt đầu và giờ kết thúc cụ thể. Bạn nên hỏi xe có chờ trong thời gian đoàn tham quan hay chỉ thực hiện các lượt đón trả đã hẹn. Nếu tiệc kết thúc muộn, cần biết cách tính phần thời gian vượt lịch trước khi đặt.',
          'Chẳng hạn, lịch ban đầu là đón một điểm tại TP.HCM, đưa đến khách sạn rồi quay về. Nếu sau đó đoàn thêm hai điểm đón, ăn tối ở một nơi khác và đổi giờ về, hãy gửi lại toàn bộ lịch mới để nhận xác nhận giá. Yêu cầu báo chi phí bổ sung trước khi thực hiện chặng phát sinh, tránh chỉ trao đổi khi thanh toán cuối chuyến.',
        ],
      },
      {
        heading: 'Chuyến qua đêm và yêu cầu riêng cần được ghi riêng',
        blocks: [
          {
            type: 'paragraph',
            content:
              'Với chuyến nhiều ngày, ghi rõ xe có phục vụ đoàn trong suốt thời gian lưu trú hay không. Trao đổi phương án ăn nghỉ của tài xế, nơi xe đỗ qua đêm và lịch di chuyển từng ngày. Giá chương trình hai ngày không nên được tự tính bằng cách nhân đôi giá một ngày.',
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Nếu cần ' },
              { text: 'xe 7 chỗ cho gia đình', href: '/thue-xe/7-cho' },
              { text: ' hoặc ' },
              { text: 'xe 16 chỗ cho đoàn nhỏ', href: '/thue-xe/16-cho' },
              { text: ', gửi số khách và số kiện hành lý để kiểm tra cấu hình xe phù hợp. Với ' },
              { text: 'Ford Transit', href: '/doi-xe/ford-transit' },
              {
                text: ', cũng cần xác nhận xe thực tế, không chỉ tên dòng xe. Xe đẩy, đồ sự kiện hoặc yêu cầu trang trí cần được trao đổi từ đầu.',
              },
            ],
          },
          {
            type: 'image',
            src: '/images/chi-phi-thue-xe-doi-chieu.jpg',
            alt: 'Các bên cùng xem giấy tờ và đối chiếu nội dung trên bàn làm việc',
            width: 1600,
            height: 1067,
          },
        ],
      },
      {
        heading: 'Mẫu tin nhắn để nhận báo giá rõ ràng',
        blocks: [
          {
            type: 'paragraph',
            content:
              '“Tôi cần xe có tài xế ngày [ngày đi], đón lúc [giờ] tại [địa chỉ], đi [điểm đến], về [địa chỉ] lúc [giờ/ngày]. Đoàn có [số người], [số kiện hành lý], dừng tại [các điểm]. Vui lòng xác nhận dòng xe, tổng giá, khoản đã gồm/chưa gồm, giờ phục vụ và cách tính nếu thêm điểm hoặc về muộn. Tôi [có/không] cần hóa đơn.”',
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Bạn có thể đối chiếu ' },
              { text: 'bảng giá thuê xe theo điểm đến', href: '/bang-gia' },
              {
                text: ' trước khi gửi lịch trình qua Zalo của Hành Trình Phương Nam. Giá cho chuyến cụ thể cần được xác nhận trực tiếp. Trước khi chuyển tiền, đọc thêm ',
              },
              {
                text: 'những điều cần xác nhận khi đặt cọc thuê xe',
                href: '/kinh-nghiem/dat-coc-thue-xe-can-xac-nhan-gi',
              },
              { text: '.' },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Giá thuê xe có tài xế đã gồm xăng và phí cao tốc chưa?',
        answer:
          'Cần xem báo giá của chính chuyến đi. Hãy yêu cầu ghi rõ nhiên liệu, phí cầu đường, cao tốc và bãi đỗ là khoản đã gồm hay thanh toán riêng; không mặc định từ chữ “trọn gói”.',
      },
      {
        question: 'Đoàn về muộn có chắc chắn bị tính thêm tiền không?',
        answer:
          'Điều này phụ thuộc khung giờ và điều kiện hai bên đã thống nhất. Hỏi trước cách xử lý khi vượt giờ, rồi báo sớm nếu lịch có khả năng thay đổi.',
      },
      {
        question: 'Có thể dùng giá một ngày để tính chuyến hai ngày không?',
        answer:
          'Không nên tự nhân giá. Chuyến qua đêm có phạm vi sử dụng xe, lịch trình và phương án ăn nghỉ tài xế khác nhau, nên cần báo giá riêng.',
      },
    ],
  },
  {
    slug: 'dat-coc-thue-xe-can-xac-nhan-gi',
    topics: ['chi-phi', 'dat-xe'],
    seoTitle: 'Đặt cọc thuê xe: cần xác nhận gì?',
    title: 'Đặt cọc thuê xe: những điều cần xác nhận trước khi chuyển tiền',
    description:
      'Checklist đặt cọc thuê xe có tài xế: xác nhận đơn vị nhận tiền, xe, lịch trình, số tiền, điều kiện đổi hủy và thông báo đã nhận cọc.',
    category: 'Đặt xe và thanh toán',
    date: '2026-11-02',
    image: '/images/dat-coc-thue-xe-xac-nhan.jpg',
    imageAlt: 'Kiểm tra và ký nội dung thỏa thuận trên bàn có máy tính xách tay',
    sections: [
      {
        heading: 'Chốt thông tin chuyến đi trước khi chốt tiền cọc',
        paragraphs: [
          'Trước khi đặt cọc thuê xe có tài xế, bạn cần một nội dung xác nhận đủ để đối chiếu: ai cung cấp dịch vụ, xe nào, phục vụ ngày nào, đi đâu và tổng chi phí ra sao. Một tin nhắn chỉ có số tài khoản cùng lời nhắc “chuyển tiền giữ xe” vẫn thiếu những thông tin quan trọng cho chuyến đi.',
          'Hãy phân biệt việc đang hỏi giá, đã nhận báo giá và đã được xác nhận đặt xe. Ảnh chụp chuyển khoản là một phần thông tin thanh toán; bạn vẫn cần đơn vị cung cấp xác nhận đã nhận tiền và giữ lịch theo thỏa thuận cụ thể. Bài viết này là bảng kiểm đặt dịch vụ, không công bố một mức cọc hay điều kiện hoàn tiền chung cho mọi chuyến.',
        ],
      },
      {
        heading: '1. Kiểm tra đơn vị cung cấp và người nhận tiền',
        blocks: [
          {
            type: 'paragraph',
            content: [
              {
                text: 'Đối chiếu tên đơn vị, kênh liên hệ và người phụ trách đặt xe. Với Hành Trình Phương Nam, bạn có thể kiểm tra ',
              },
              { text: 'thông tin doanh nghiệp', href: '/gioi-thieu' },
              {
                text: ' và liên hệ hotline công bố trên website: 0899 473 333. Nếu đang trao đổi qua một tài khoản khác hoặc nhận thông báo đổi tài khoản thanh toán, xác minh lại qua kênh đã biết trước khi chuyển.',
              },
            ],
          },
          {
            type: 'paragraph',
            content:
              'Yêu cầu xác nhận tên người thụ hưởng, số tài khoản, ngân hàng và mối liên hệ với bên cung cấp dịch vụ. Nếu tên tài khoản khác tên đơn vị báo giá, cần được giải thích và xác nhận rõ. Không cung cấp mã OTP, mật khẩu hay cho người khác điều khiển điện thoại để “hoàn tất giữ xe”.',
          },
        ],
      },
      {
        heading: '2. Ghi đúng xe, ngày sử dụng và phạm vi phục vụ',
        blocks: [
          {
            type: 'list',
            items: [
              'Ngày đi, ngày về, giờ có mặt, địa chỉ đón và địa chỉ trả khách.',
              'Số khách, lượng hành lý, nhóm số chỗ và dòng xe đã thống nhất.',
              'Các điểm dừng, thời gian chờ và việc xe có phục vụ đoàn trong thời gian lưu trú hay không.',
              'Yêu cầu riêng như màu xe cưới, trang trí, đón nhiều điểm hoặc mang đồ cồng kềnh.',
              'Người liên hệ của hai bên và thời điểm cung cấp thông tin tài xế, xe phục vụ.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Nếu chọn ' },
              { text: 'Toyota Innova', href: '/doi-xe/toyota-innova' },
              { text: ' hoặc ' },
              { text: 'xe 16 chỗ', href: '/thue-xe/16-cho' },
              {
                text: ', hãy hỏi phương án thay xe nếu mẫu đã trao đổi không thể phục vụ. Cần thống nhất tiêu chí xe thay thế và cách thông báo, đặc biệt khi dòng xe hoặc cấu hình là yêu cầu quan trọng của đoàn.',
              },
            ],
          },
          {
            type: 'image',
            src: '/images/dat-coc-thue-xe-kiem-tra.jpg',
            alt: 'Người cầm bút đọc lại các nội dung trong văn bản thỏa thuận',
            width: 1600,
            height: 1067,
          },
        ],
      },
      {
        heading: '3. Tách rõ tổng giá, tiền cọc và phần còn lại',
        blocks: [
          {
            type: 'table',
            caption: 'Thông tin thanh toán nên có trong xác nhận đặt xe',
            columns: ['Nội dung', 'Điều cần ghi rõ'],
            rows: [
              ['Tổng giá chuyến', 'Phạm vi áp dụng, khoản đã bao gồm và chưa bao gồm.'],
              ['Số tiền đặt cọc', 'Số tiền cụ thể và hạn thanh toán đã thống nhất.'],
              [
                'Cách tính vào tiền chuyến',
                'Tiền cọc được đối trừ vào tổng thanh toán như thế nào.',
              ],
              ['Phần còn lại', 'Số tiền, thời điểm và phương thức thanh toán.'],
              ['Khoản ngoài lịch trình', 'Cách báo và xác nhận trước khi phát sinh thêm chi phí.'],
              [
                'Chứng từ cần nhận',
                'Xác nhận nhận tiền, thông tin đặt xe và hóa đơn nếu có yêu cầu.',
              ],
            ],
          },
          {
            type: 'paragraph',
            content:
              'Không nên tự áp dụng một tỷ lệ cọc lấy từ chuyến khác. Nếu có nhiều xe hoặc nhiều đợt thanh toán, yêu cầu tách số tiền theo từng phần để tránh hiểu nhầm. Khi báo giá thay đổi do bạn sửa lịch trình, cần chốt lại tổng giá và số dư phải trả trước khi tiếp tục thanh toán.',
          },
        ],
      },
      {
        heading: '4. Hỏi điều kiện đổi lịch, hủy và xử lý tiền đã chuyển',
        paragraphs: [
          'Các tình huống cần hỏi gồm khách đổi ngày, giảm số xe, hủy chuyến, đổi điểm đến hoặc đơn vị không cung cấp được xe như đã hẹn. Với mỗi tình huống, cần rõ cách thông báo, mốc thời gian, khoản được xử lý và thời hạn phản hồi hoặc hoàn tiền nếu áp dụng.',
          'Không suy ra rằng báo sớm thì chắc chắn được hoàn toàn bộ, hoặc mọi khoản đã chuyển đều tự động mất khi thay đổi. Hãy yêu cầu điều kiện cụ thể bằng văn bản trước khi đặt cọc. Nếu nội dung bạn nhận có chỗ chưa rõ, hỏi lại trước khi chuyển tiền thay vì đợi đến ngày đi.',
        ],
      },
      {
        heading: '5. Sau khi chuyển tiền, cần nhận lại những gì?',
        blocks: [
          {
            type: 'image',
            src: '/images/dat-coc-thue-xe-thanh-toan.jpg',
            alt: 'Người dùng kiểm tra thông tin thanh toán trên điện thoại',
            width: 1600,
            height: 900,
          },
          {
            type: 'paragraph',
            content:
              'Lưu báo giá cuối, nội dung đặt xe, điều kiện đổi hủy và chứng từ giao dịch. Đề nghị bên nhận xác nhận số tiền, ngày nhận, chuyến được giữ lịch và phần còn lại. Nếu đoàn có người đứng ra đặt thay, lưu thêm thông tin người liên hệ trực tiếp trong ngày khởi hành.',
          },
          {
            type: 'paragraph',
            content:
              'Trước ngày đi, đối chiếu lại giờ đón, địa chỉ có thể dừng xe và đầu mối liên hệ tài xế. Khi thay đổi người phụ trách đoàn, gửi cập nhật cho bên vận chuyển để thông tin không bị ngắt quãng. Chỉ chia sẻ chứng từ với người cần xử lý; tránh đăng công khai thông tin tài khoản hoặc dữ liệu cá nhân.',
          },
        ],
      },
      {
        heading: 'Mẫu yêu cầu xác nhận trước khi đặt cọc',
        blocks: [
          {
            type: 'paragraph',
            content:
              '“Nhờ bên mình xác nhận chuyến ngày [ngày], xe [nhóm/dòng xe], đón [giờ, địa chỉ], đi [các điểm], trả [giờ, địa chỉ]. Tổng giá là [số tiền], gồm [các khoản], chưa gồm [các khoản]. Tôi đặt cọc [số tiền], còn lại [số tiền], thanh toán vào [thời điểm]. Xin xác nhận tài khoản nhận tiền, điều kiện đổi/hủy và gửi xác nhận giữ lịch sau khi nhận cọc.”',
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Tham khảo ' },
              { text: 'bảng giá theo tuyến', href: '/bang-gia' },
              { text: ' và ' },
              { text: 'điều kiện dịch vụ', href: '/chinh-sach' },
              {
                text: ' trước khi trao đổi trực tiếp với Hành Trình Phương Nam. Nếu chưa hiểu khoản nào trong báo giá, xem ',
              },
              {
                text: 'bảng kiểm chi phí thuê xe có tài xế',
                href: '/kinh-nghiem/thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao',
              },
              {
                text: ' rồi yêu cầu làm rõ. Website không nhận thanh toán trực tuyến và không công bố mức cọc mặc định.',
              },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Thuê xe có tài xế phải đặt cọc bao nhiêu phần trăm?',
        answer:
          'Không có tỷ lệ mặc định được công bố trên website. Số tiền và thời điểm đặt cọc được xác nhận theo chuyến, sau khi hai bên thống nhất xe, lịch trình và điều kiện dịch vụ.',
      },
      {
        question: 'Chuyển tiền xong có nghĩa là đã đặt xe thành công chưa?',
        answer:
          'Bạn cần nhận xác nhận đã nhận tiền và giữ lịch cho chuyến cụ thể từ bên cung cấp. Lưu cả chứng từ giao dịch và nội dung xác nhận đặt xe.',
      },
      {
        question: 'Đổi ngày đi có được chuyển cọc sang ngày mới không?',
        answer:
          'Cần kiểm tra điều kiện đã thống nhất và khả năng cung cấp xe vào ngày mới. Liên hệ sớm và yêu cầu xác nhận phương án cùng phần chênh lệch chi phí nếu có.',
      },
    ],
  },
  {
    slug: 'di-vung-tau-trong-ngay-hay-2-ngay-1-dem',
    topics: ['vung-tau', 'lich-trinh'],
    title: 'Đi Vũng Tàu trong ngày hay 2 ngày 1 đêm?',
    description:
      'So sánh hai lịch trình đi Vũng Tàu từ TP.HCM, cách chọn giữa xe ở lại và đưa đón hai lượt, kèm mẫu tin nhắn hỏi giá.',
    category: 'Lịch trình đi tỉnh',
    date: '2026-11-02',
    image: '/images/vung-tau-bien-nui-nho.jpg',
    imageAlt: 'Biển Vũng Tàu và tượng Chúa Kitô trên đỉnh đồi xanh nhìn từ xa',
    sections: [
      {
        heading: 'Chọn thời lượng theo cách cả đoàn muốn đi chơi',
        paragraphs: [
          'Đi Vũng Tàu trong ngày phù hợp khi cả đoàn muốn ra biển, dùng bữa và trở về mà không sắp xếp lưu trú. Chuyến 2 ngày 1 đêm có thêm thời gian nghỉ, nhưng cần xác định rõ xe sẽ phục vụ xuyên suốt hay chỉ đưa đi và đón về. Chính sự khác nhau về phạm vi phục vụ này ảnh hưởng trực tiếp đến báo giá.',
          'Trước khi hỏi “xe đi Vũng Tàu bao nhiêu tiền”, bạn nên chốt số khách, ngày đi, nơi đón tại TP.HCM, địa chỉ đến và giờ về dự kiến. Không cần lịch trình kín từng phút; một kế hoạch đủ rõ, có đánh dấu phần chưa chốt, sẽ giúp nhận báo giá sát nhu cầu hơn.',
        ],
      },
      {
        heading: 'So sánh chuyến trong ngày và 2 ngày 1 đêm',
        blocks: [
          {
            type: 'table',
            caption: 'Những khác biệt cần cân nhắc trước khi hỏi xe đi Vũng Tàu',
            columns: ['Tiêu chí', 'Đi trong ngày', '2 ngày 1 đêm'],
            rows: [
              [
                'Nhịp di chuyển',
                'Nên chọn ít điểm, giữ giờ về rõ ràng.',
                'Có thể chia hoạt động sang hai ngày và có thời gian nghỉ.',
              ],
              [
                'Hành lý',
                'Ghi đồ tắm biển, đồ trẻ nhỏ và các kiện lớn.',
                'Ghi thêm vali lưu trú, xe đẩy hoặc đồ dùng của đoàn.',
              ],
              [
                'Phạm vi dùng xe',
                'Xác nhận thời gian chờ và các chặng trong ngày.',
                'Chốt xe ở lại phục vụ hay chỉ đưa đi, đón về.',
              ],
              [
                'Thông tin cần thêm',
                'Nơi tắm, dùng bữa và điểm tập kết lúc về.',
                'Địa chỉ lưu trú, lịch ngày hai, nơi đỗ xe và ăn nghỉ tài xế nếu xe ở lại.',
              ],
              [
                'Cách lấy giá',
                'Báo giá theo giờ, điểm đón trả và lịch đã gửi.',
                'Báo giá riêng cho cả chương trình; không tự nhân giá một ngày.',
              ],
            ],
          },
          {
            type: 'paragraph',
            content:
              'Nếu đoàn có trẻ nhỏ hoặc người lớn tuổi, cân nhắc thời gian nghỉ và số lần lên xuống xe. Thời gian di chuyển thực tế còn tùy vị trí xuất phát, điều kiện giao thông, thời tiết và điểm dừng; không nên xếp các cuộc hẹn sát nhau dựa trên một mốc thời gian cố định.',
          },
        ],
      },
      {
        heading: 'Mẫu lịch trình trong ngày để gửi đơn vị thuê xe',
        blocks: [
          {
            type: 'paragraph',
            content:
              'Bạn có thể dùng khung sau rồi điền ngày và giờ phù hợp. Đây là kế hoạch trao đổi để tính phạm vi phục vụ, không phải lịch tour hay cam kết thời gian chạy xe.',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Đón đoàn: ghi ngày, giờ có mặt, địa chỉ tại TP.HCM và số điểm đón.',
              'Chặng đi: ghi điểm nghỉ dự kiến nếu cần; báo trước khi có người cần nghỉ thường xuyên.',
              'Tại Vũng Tàu: ghi điểm xuống gần biển, nơi dùng bữa và điểm tham quan dự kiến.',
              'Trong lúc đoàn vui chơi: xác nhận xe chờ ở đâu và có cần chở giữa các điểm hay không.',
              'Chặng về: ghi giờ tập kết, điểm đón lại, địa chỉ trả tại TP.HCM và các điểm trả bổ sung.',
            ],
          },
          {
            type: 'image',
            src: '/images/vung-tau-doi-ven-bien.jpg',
            alt: 'Đồi ven biển Vũng Tàu với công trình nhỏ và lá cờ trên cao',
            width: 1600,
            height: 1082,
          },
          {
            type: 'paragraph',
            content:
              'Đừng ghi chung “tham quan tự do” nếu bạn vẫn muốn xe đưa đến nhiều nơi. Ví dụ, lịch xuống biển, ghé nhà hàng rồi đi thêm một điểm ngắm cảnh cần được liệt kê ngay từ đầu. Với xe đoàn lớn, kiểm tra nơi dừng đón trả và bãi đỗ phù hợp, thay vì mặc định xe vào được sát mọi điểm.',
          },
        ],
      },
      {
        heading: 'Mẫu lịch trình 2 ngày 1 đêm: tách rõ hai phương án xe',
        paragraphs: [
          'Ngày đầu: ghi giờ đón, điểm đến, địa chỉ lưu trú, các chặng trước và sau khi nhận phòng. Nếu có bữa tối hoặc hoạt động buổi tối cần xe đưa đón, nêu riêng giờ dự kiến kết thúc. Giờ nhận phòng cần được xác nhận với nơi lưu trú, không mặc định xe hay tài xế sẽ xử lý phần chờ ngoài lịch.',
          'Ngày thứ hai: ghi hoạt động buổi sáng, giờ trả phòng, nơi dùng bữa, giờ tập kết để về và các điểm trả khách. Nếu còn chặng tham quan sau khi trả phòng, báo trước việc hành lý sẽ mang trên xe trong thời gian đó.',
          'Phương án thứ nhất là xe ở lại, phục vụ theo lịch hai ngày đã thống nhất; khi đó cần hỏi nơi đỗ và phương án ăn nghỉ của tài xế. Phương án thứ hai là đưa đi rồi hẹn đón về; cần rõ ngày giờ hai lượt và việc di chuyển trong thời gian lưu trú do ai sắp xếp. Hãy yêu cầu báo giá đúng phương án, không xem hai cách phục vụ là tương đương.',
        ],
      },
      {
        heading: 'Chọn xe theo số khách và lượng đồ thực tế',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Gia đình hoặc nhóm nhỏ có thể bắt đầu từ ' },
              { text: 'xe 7 chỗ đi Vũng Tàu', href: '/thue-xe/7-cho/di-vung-tau' },
              { text: '; đoàn đông hơn có thể tham khảo ' },
              { text: 'xe 16 chỗ đi Vũng Tàu', href: '/thue-xe/16-cho/di-vung-tau' },
              { text: '. Khi hỏi dòng ' },
              { text: 'Toyota Innova', href: '/doi-xe/toyota-innova' },
              {
                text: ', gửi cả số người và số vali để kiểm tra cấu hình thực tế. Tên nhóm số chỗ không tự xác nhận số khách cùng lượng hành lý có thể chở.',
              },
            ],
          },
          {
            type: 'paragraph',
            content:
              'Đồ đi biển, thùng đồ ăn, xe đẩy và hành lý qua đêm cần được tính cùng nhau. Với nhóm công ty, ghi thêm đồ dùng chung hoặc thiết bị sự kiện. Cung cấp địa chỉ cụ thể ở Vũng Tàu; nếu đổi sang Long Hải, Hồ Tràm hay Hồ Cốc thì cần hỏi lại đúng tuyến, không dùng báo giá đến trung tâm Vũng Tàu để suy ra.',
          },
          {
            type: 'image',
            src: '/images/vung-tau-thanh-pho-ve-chieu.jpg',
            alt: 'Toàn cảnh đô thị Vũng Tàu nhìn từ trên đồi qua những tán cây',
            width: 1600,
            height: 1067,
          },
        ],
      },
      {
        heading: 'Những khoản cần xác nhận trong báo giá tuyến Vũng Tàu',
        blocks: [
          {
            type: 'list',
            items: [
              'Tiền xe áp dụng cho ngày nào, nhóm xe nào và phương án phục vụ nào.',
              'Nhiên liệu, phí cầu đường, cao tốc, phí vào điểm đón và bãi đỗ đã gồm hay chưa.',
              'Thời gian chờ, giờ kết thúc và cách xử lý khi đoàn về muộn hoặc thêm điểm.',
              'Với chuyến qua đêm: các chặng trong thời gian lưu trú, nơi đỗ xe và chi phí ăn nghỉ tài xế nếu áp dụng.',
              'Tiền cọc, phần thanh toán còn lại, yêu cầu hóa đơn và điều kiện đổi ngày hoặc hủy chuyến.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Xem ' },
              { text: 'trang tuyến TP.HCM đi Vũng Tàu', href: '/tuyen-xe/vung-tau' },
              { text: ' và ' },
              { text: 'bảng giá thuê xe', href: '/bang-gia' },
              {
                text: ' để tham khảo trước. Mốc một ngày trong bảng không thay thế báo giá chương trình hai ngày. Bạn cũng có thể dùng ',
              },
              {
                text: 'bảng kiểm các khoản phí thuê xe',
                href: '/kinh-nghiem/thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao',
              },
              { text: ' khi đối chiếu các phương án.' },
            ],
          },
        ],
      },
      {
        heading: 'Mẫu tin nhắn hỏi giá xe đi Vũng Tàu',
        blocks: [
          {
            type: 'paragraph',
            content:
              '“Tôi cần xe từ TP.HCM đi Vũng Tàu ngày [ngày/giờ đi], về [ngày/giờ về]. Đoàn có [số người lớn, trẻ em] và [số vali, xe đẩy hoặc đồ cồng kềnh]. Đón tại [địa chỉ từng điểm], đến [địa chỉ/khách sạn], trả tại [địa chỉ khi về]. Ngày đầu ghé [các điểm]. Nếu qua đêm, ngày sau ghé [các điểm] và cần xe [ở lại phục vụ/đưa đi rồi đón về]. Nhờ xác nhận giờ xe phục vụ, tổng giá và các khoản đã gồm hoặc tính riêng.”',
          },
          {
            type: 'paragraph',
            content:
              'Nếu chưa quyết định đi trong ngày hay qua đêm, gửi hai phương án cùng số khách và nhóm xe để Hành Trình Phương Nam kiểm tra riêng từng lịch. Khi đã chọn, chốt lại một lịch trình cuối cùng qua Zalo 0899 473 333 trước khi đặt xe.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Giá xe đi Vũng Tàu 2 ngày 1 đêm có bằng hai lần giá một ngày không?',
        answer:
          'Không nên tự tính như vậy. Giá phụ thuộc lịch từng ngày, việc xe ở lại hay chỉ đưa đón và các khoản liên quan đã thống nhất. Cần báo giá riêng cho toàn bộ chương trình.',
      },
      {
        question: 'Chưa chọn khách sạn có hỏi giá xe được không?',
        answer:
          'Có thể gửi khu vực lưu trú dự kiến và ghi rõ chưa chốt địa chỉ. Khi chọn được nơi ở hoặc đổi khu vực, gửi lại để đơn vị vận chuyển xác nhận phạm vi phục vụ và giá.',
      },
      {
        question: 'Đi trong ngày có thể ghé thêm Hồ Tràm không?',
        answer:
          'Bạn cần gửi đầy đủ các điểm và thứ tự di chuyển để được kiểm tra lịch, thời gian phục vụ và giá tương ứng. Không mặc định chuyến đến Vũng Tàu đã bao gồm chặng Hồ Tràm.',
      },
    ],
  },
  {
    slug: 'chon-xe-du-lich-theo-so-nguoi',
    topics: ['chon-xe', 'gia-dinh', 'doan'],
    image: '/images/mpv.jpg',
    imageAlt: 'Xe MPV dùng để minh họa nhóm xe gia đình',
    imageCaption: 'Xe thực tế được xác nhận khi tư vấn.',
    title: 'Chọn xe du lịch theo số người và hành lý',
    description:
      'Từ xe 4 chỗ đến 45 chỗ: cách cân đối quy mô đoàn, hành lý và lịch trình để chọn xe phù hợp.',
    category: 'Kinh nghiệm thuê xe',
    date: '2026-10-08',
    updatedAt: '2026-11-10',
    sections: [
      {
        heading: 'Đếm số khách trước, kiểm tra hành lý sau',
        paragraphs: [
          'Số chỗ là bước khởi đầu, nhưng không phải yếu tố duy nhất. Một nhóm nhỏ mang nhiều vali có thể cần dòng xe rộng hơn nhóm có cùng số người chỉ mang túi xách. Khi hỏi xe, hãy gửi cả số khách và số kiện hành lý.',
          'Cấu hình chỗ ngồi của từng xe cần được xác nhận với đơn vị cho thuê. Đừng chỉ dựa vào tên dòng xe hoặc hình ảnh.',
        ],
      },
      {
        heading: 'Chọn xe khi đoàn mang nhiều hành lý',
        blocks: [
          {
            type: 'table',
            caption: 'Tình huống minh họa để hỏi đúng xe',
            columns: ['Đoàn và hành lý', 'Xe nên hỏi', 'Chi tiết cần xác nhận'],
            rows: [
              [
                'Hai người, hai vali cỡ vừa',
                [{ text: 'Toyota Camry 4 chỗ', href: '/doi-xe/toyota-camry' }],
                'Gửi kích thước vali nếu còn có túi golf hoặc đồ cồng kềnh.',
              ],
              [
                'Năm khách, bốn vali và một xe đẩy gấp',
                [
                  { text: 'Toyota Innova', href: '/doi-xe/toyota-innova' },
                  { text: ' hoặc ' },
                  { text: 'Kia Carnival', href: '/doi-xe/kia-carnival' },
                ],
                'Yêu cầu xác nhận cách xếp hành lý khi tất cả khách có ghế. Nếu cần gập ghế để đủ khoang đồ, hỏi thêm xe lớn hơn.',
              ],
              [
                'Mười hai khách có vali riêng',
                [{ text: 'Ford Transit 16 chỗ', href: '/doi-xe/ford-transit' }],
                'Gửi số vali theo kích thước và hỏi khoang chứa của xe dự kiến. So sánh phương án 29 chỗ nếu có nhiều vali lớn.',
              ],
              [
                'Đoàn công ty mang thiết bị sự kiện',
                [
                  { text: 'Xe 29 chỗ', href: '/thue-xe/29-cho' },
                  { text: ' hoặc ' },
                  { text: 'xe 45 chỗ', href: '/thue-xe/45-cho' },
                ],
                'Gửi kích thước kiện lớn nhất, số kiện chung và thông tin nơi xe có thể dừng, quay đầu hoặc đỗ.',
              ],
            ],
          },
          {
            type: 'paragraph',
            content:
              'Các phương án trên dùng để bắt đầu trao đổi. Hãy xác nhận số ghế dành cho khách, cách bố trí ghế và khoang chứa của chiếc xe được bố trí. Khi có trẻ nhỏ, gửi thêm nhu cầu ghế trẻ em và kích thước xe đẩy sau khi gấp.',
          },
        ],
      },
      {
        heading: 'Lập lịch trình đủ rõ để báo giá',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Gửi số khách, hành lý và điểm đón theo ' },
              {
                text: 'mẫu tin nhắn hỏi báo giá thuê xe',
                href: '/kinh-nghiem/thong-tin-can-co-khi-hoi-bao-gia',
              },
              {
                text: '. Với khách sạn trong hẻm hoặc đoàn có nhiều điểm đón, hãy thống nhất điểm tập kết trước. Có thể tra chi phí tham khảo trên ',
              },
              { text: 'bảng giá thuê xe theo tuyến', href: '/bang-gia' },
              { text: '.' },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'chuan-bi-thue-xe-cuoi',
    topics: ['xe-cuoi', 'dat-xe'],
    image: '/images/wedding.jpg',
    imageAlt: 'Xe hoa minh họa dịch vụ đưa đón trong ngày cưới',
    imageCaption: 'Xe thực tế được xác nhận khi tư vấn.',
    title: 'Những điều cần chuẩn bị khi thuê xe cưới',
    description:
      'Lập lịch xe đón dâu, hẹn giờ lắp hoa, bố trí xe cho hai họ và chốt người liên hệ trong ngày cưới.',
    category: 'Xe cưới',
    date: '2026-10-08',
    updatedAt: '2026-11-10',
    sections: [
      {
        heading: 'Chốt mốc giờ quan trọng',
        paragraphs: [
          'Giờ đón dâu, giờ làm lễ và giờ đến nhà hàng là những mốc cần cung cấp trước tiên. Chừa khoảng thời gian đệm cho trang trí xe, chụp ảnh và tình huống giao thông.',
          'Thống nhất xe cần có mặt tại đâu, ai là người liên hệ và số điện thoại người phụ trách trong ngày cưới.',
        ],
      },
      {
        heading: 'Trao đổi dòng xe và hoa trang trí',
        paragraphs: [
          'Gửi phong cách lễ cưới, màu xe mong muốn và mẫu hoa tham khảo. Xác nhận bên nào chuẩn bị hoa, thời điểm lắp đặt và chi phí liên quan.',
          'Ảnh tham khảo không thay thế xác nhận xe thực tế. Yêu cầu đơn vị tư vấn xác nhận dòng xe, màu xe và tình trạng sẵn có vào ngày cưới.',
        ],
      },
      {
        heading: 'Dự tính xe cho gia đình hai bên',
        paragraphs: [
          'Ngoài xe cô dâu chú rể, gia đình có thể cần xe 7, 16, 29 hoặc 45 chỗ. Lập danh sách số khách và các điểm tập kết để tránh thiếu xe hoặc nhiều lượt đón không cần thiết.',
          'Cuối cùng, thống nhất số giờ thuê, thời gian chờ, phụ phí vượt lịch trình và điều kiện đổi hoặc hủy bằng văn bản.',
        ],
      },
      {
        heading: 'Bảng kiểm xe hoa và xe đưa đón trong ngày cưới',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Lập lịch theo thứ tự các điểm. Ghi giờ xe có mặt để lắp hoa, giờ khởi hành, giờ đến nhà gái, giờ về nhà trai và chặng đến nhà hàng nếu có.',
              'Gửi ghim bản đồ từng điểm và xác nhận cổng vào. Nếu đường hẹp, hẹn một điểm để xe đoàn dừng đón khách và chỉ định người hướng dẫn.',
              'Chốt ai chuẩn bị hoa, lắp ở đâu và cần xe đến trước bao lâu. Thống nhất với đơn vị xe về vị trí và cách gắn hoa trước ngày cưới.',
              'Chỉ định đầu mối nhà trai và nhà gái. Gửi lịch cho cả hai và xác nhận ai báo tài xế khi nghi thức hoặc chụp ảnh kéo dài.',
              'Xác nhận giờ kết thúc, số điểm dừng và cách tính thời gian chờ. Ghi riêng lịch của xe hoa và lịch của xe chở khách nếu hai xe đi khác giờ.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Khi gửi lịch, bạn có thể xem trước ' },
              { text: 'dịch vụ xe cưới và xe hoa', href: '/xe-cuoi' },
              { text: ' rồi chọn xe đưa đón theo ' },
              {
                text: 'số khách và lượng hành lý',
                href: '/kinh-nghiem/chon-xe-du-lich-theo-so-nguoi',
              },
              {
                text: '. Ví dụ, nếu xe hoa chờ chụp ảnh còn khách cần tới nhà hàng trước, ghi hai giờ xuất phát riêng để bên điều xe báo giá đúng lịch.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'thong-tin-can-co-khi-hoi-bao-gia',
    topics: ['dat-xe', 'chi-phi'],
    image: '/images/sedan.jpg',
    imageAlt: 'Xe sedan minh họa một phương án thuê xe cho nhóm nhỏ',
    imageCaption: 'Xe thực tế được xác nhận khi tư vấn.',
    title: 'Mẫu tin nhắn hỏi báo giá thuê xe theo lịch trình',
    description:
      'Sao chép mẫu hỏi báo giá thuê xe. Điền ngày giờ, điểm đón trả, số khách, hành lý và nhu cầu xe chờ để nhận báo giá theo chuyến.',
    category: 'Lên kế hoạch',
    date: '2026-10-08',
    updatedAt: '2026-11-10',
    sections: [
      {
        heading: 'Sao chép mẫu tin nhắn này và điền lịch của bạn',
        blocks: [
          {
            type: 'list',
            items: [
              'Chào anh/chị, em cần xe [một chiều / khứ hồi / phục vụ theo lịch] cho chuyến đi từ […] đến […].',
              'Đón lúc […] ngày […] tại [địa chỉ và ghim bản đồ]. Nếu có thêm điểm đón, thứ tự là […].',
              'Các điểm cần ghé theo thứ tự là […]. Em dự kiến về lúc […] ngày […] và trả khách tại […].',
              'Đoàn có […] người lớn, […] trẻ em, […] vali và [xe đẩy hoặc đồ cồng kềnh nếu có].',
              'Em cần xe [chờ trong chuyến / chỉ đưa đi rồi quay lại đón]. Nhờ anh/chị xác nhận dòng xe phù hợp và gửi báo giá theo lịch trên.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'Nếu giờ về hoặc địa chỉ lưu trú còn dự kiến, ghi rõ mốc nào có thể đổi. Nếu đang phân vân hai lịch, ghi riêng phương án A và B để nhận giá cho từng phương án.',
          },
        ],
      },
      {
        heading: 'Thêm thông tin theo loại chuyến',
        paragraphs: [
          'Đón sân bay cần mã chuyến bay, nhà ga nếu đã biết, số hành lý và đầu mối liên hệ. Với chuyến qua đêm, gửi giờ xe cần có mặt từng ngày và địa chỉ lưu trú.',
          'Ví dụ minh họa cho chuyến Vũng Tàu trong ngày. Sáu khách và ba vali, đón tại một điểm ở TP.HCM lúc 06:30, ghé bãi biển và nhà hàng, tập trung về lúc 16:00. Bổ sung ghim điểm đón và điểm trả, đồng thời ghi rõ xe có cần chở từ bãi biển đến nhà hàng hay không.',
        ],
      },
      {
        heading: 'Sau khi gửi lịch, kiểm tra phản hồi',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Có thể đối chiếu giá tham khảo trên ' },
              { text: 'bảng giá thuê xe', href: '/bang-gia' },
              { text: '. Khi nhận báo giá, dùng ' },
              {
                text: 'bảng kiểm các khoản phí khi thuê xe có tài xế',
                href: '/kinh-nghiem/thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao',
              },
              {
                text: ' để rà phạm vi phục vụ và khoản tính thêm. Trước khi đặt, yêu cầu xác nhận lại phiên bản lịch trình mới nhất, dòng xe và giờ đón bằng văn bản.',
              },
            ],
          },
        ],
      },
    ],
  },
];
