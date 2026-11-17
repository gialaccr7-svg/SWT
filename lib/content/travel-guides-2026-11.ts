import type { Article, ArticleBlock, InlineContent } from './articles';

const paragraph = (content: InlineContent): ArticleBlock => ({ type: 'paragraph', content });
const checklist = (items: InlineContent[]): ArticleBlock => ({ type: 'list', items });
const table = (caption: string, columns: string[], rows: InlineContent[][]): ArticleBlock => ({
  type: 'table',
  caption,
  columns,
  rows,
});

export const travelGuides: Article[] = [
  {
    slug: 'di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng',
    title: 'Đi Nha Trang 3 ngày 2 đêm từ TP.HCM bằng xe riêng: cách lên lịch',
    seoTitle: 'Nha Trang 3 ngày 2 đêm bằng xe riêng',
    topics: ['nha-trang', 'lich-trinh', 'gia-dinh'],
    description:
      'Gợi ý lịch đi Nha Trang 3 ngày 2 đêm từ TP.HCM bằng xe riêng: chia ngày di chuyển, chọn điểm tham quan và chốt phạm vi dùng xe.',
    category: 'Lịch trình Nha Trang',
    date: '2026-11-17',
    image: '/images/seo-nha-trang-7-2.jpg',
    imageAlt: 'Hàng dừa và ô che nắng bên bãi biển Nha Trang',
    imageCaption: 'Ảnh Nha Trang của Quangpraha, CC0; dùng minh họa điểm đến.',
    sections: [
      {
        heading: 'Ba ngày nên dành bao nhiêu thời gian cho di chuyển?',
        blocks: [
          paragraph(
            'Với chuyến xe riêng từ TP.HCM, nên xem ngày đầu và ngày cuối là hai ngày có chặng đường dài. Dành ngày giữa cho hoạt động chính tại Nha Trang giúp lịch trình có khoảng nghỉ, thay vì xếp điểm tham quan nối tiếp ngay sau khi đến. Mốc giờ cụ thể cần được nhà xe tính theo điểm đón, điểm nghỉ, tình hình đường và địa chỉ khách sạn.',
          ),
          paragraph(
            'Trước khi đặt phòng, hãy đối chiếu giờ nhận phòng với giờ đến dự kiến. Nếu đến sớm, hỏi nơi gửi đồ và phương án nghỉ trong lúc chờ; nếu về muộn ngày cuối, hỏi cách gửi hành lý sau khi trả phòng. Không nên tự mặc định tài xế phục vụ xuyên đêm hoặc mọi lượt đi trong thành phố đều nằm trong báo giá.',
          ),
          paragraph([
            { text: 'Theo ' },
            {
              text: 'giới thiệu Nha Trang của Cục Du lịch Quốc gia Việt Nam',
              href: 'https://vietnam.travel/place-to-go/south-central-coast-central-highlands/nha-trang/',
            },
            {
              text: ', biển và các chuyến tham quan đảo là những trải nghiệm nổi bật. Khi chọn hoạt động trên đảo, cần đặt riêng phương tiện đường thủy và hẹn lại điểm xe đón trên bờ.',
            },
          ]),
        ],
      },
      {
        heading: 'Lịch trình 3 ngày 2 đêm để tham khảo',
        blocks: [
          table(
            'Khung lịch minh họa, chưa phải chương trình tour hoặc lịch xe đã xác nhận',
            ['Ngày', 'Gợi ý sắp xếp', 'Điều cần chốt với nhà xe'],
            [
              [
                'Ngày 1',
                'Đón tại TP.HCM, nghỉ dọc đường, đến khách sạn; buổi tối ăn gần nơi ở nếu đoàn còn mệt.',
                'Thứ tự điểm đón, điểm ăn nghỉ, giờ đến dự kiến và có cần xe buổi tối không.',
              ],
              [
                'Ngày 2',
                'Chọn một chương trình chính: tham quan trên bờ hoặc dành phần lớn ngày cho chuyến biển đảo.',
                'Địa chỉ đón, điểm trả, giờ kết thúc, nơi xe chờ; chuyến thuyền đặt riêng nếu có.',
              ],
              [
                'Ngày 3',
                'Ăn sáng, trả phòng, lấy đủ hành lý và về TP.HCM; chỉ thêm điểm ghé khi lịch đường bộ cho phép.',
                'Giờ rời khách sạn, các điểm trả ở TP.HCM và thời điểm kết thúc dự kiến.',
              ],
            ],
          ),
          paragraph(
            'Đoàn có trẻ nhỏ hoặc người lớn tuổi có thể giữ buổi chiều ngày đầu nhẹ hơn và chọn hoạt động gần khách sạn. Nếu muốn thêm nhiều điểm tham quan, nên cắt bớt điểm hoặc tăng số ngày sau khi trao đổi với nhà xe. Không dùng khung lịch này để suy ra thời gian lái liên tục hay cam kết giờ đến.',
          ),
        ],
      },
      {
        heading: 'Chọn xe theo người và đồ của cả chuyến',
        blocks: [
          paragraph(
            'Đếm số người thực đi rồi lập danh sách vali, xe đẩy và đồ dùng chung. Với chuyến hai đêm, hành lý thường khác chuyến đi trong ngày; ảnh chụp các kiện lớn giúp nhà xe tư vấn cụ thể hơn. Số chỗ của nhóm xe không tự thể hiện số ghế hành khách còn dùng được và sức chứa khoang đồ trên chiếc xe được bố trí.',
          ),
          paragraph([
            { text: 'Gia đình có thể tham khảo ' },
            { text: 'xe 7 chỗ đi Nha Trang', href: '/thue-xe/7-cho/di-nha-trang' },
            { text: '; đoàn đông hơn hoặc cần thêm không gian hành lý nên đối chiếu ' },
            { text: 'xe 16 chỗ đi Nha Trang', href: '/thue-xe/16-cho/di-nha-trang' },
            {
              text: '. Hãy yêu cầu xác nhận mẫu xe, số ghế cho khách và cách bố trí đồ trước khi đặt cọc.',
            },
          ]),
        ],
      },
      {
        heading: 'Tách rõ giá xe, lưu trú và hoạt động tham quan',
        blocks: [
          checklist([
            'Báo đủ ba ngày sử dụng, điểm xuất phát, khách sạn và các lượt xe tại Nha Trang.',
            'Hỏi báo giá gồm những khoản nào: cầu đường, bãi đỗ, thời gian chờ và chi phí liên quan đến tài xế.',
            'Xác nhận ăn nghỉ của tài xế khi xe ở lại; ghi điều kiện điều chỉnh nếu đổi khách sạn hoặc thêm điểm.',
            'Tách phòng nghỉ, ăn uống, vé tham quan và thuyền khỏi giá xe nếu các khoản đó không được báo gồm.',
          ]),
          paragraph([
            { text: 'Xem ' },
            { text: 'trang tuyến Nha Trang', href: '/tuyen-xe/nha-trang' },
            {
              text: ' để đối chiếu thời lượng trong bảng giá. Giá tham khảo cho thời lượng khác không nên được nhân hoặc chia máy móc thành giá 3 ngày 2 đêm.',
            },
          ]),
        ],
      },
      {
        heading: 'Mẫu lịch gửi hỏi xe',
        blocks: [
          paragraph(
            '“Đoàn tôi đi Nha Trang từ ngày … đến ngày …, gồm … người lớn và … trẻ em; có … vali, … xe đẩy. Đón tại …, khách sạn dự kiến …. Ngày thứ hai muốn …. Ngày về cần trả tại …. Nhờ tư vấn xe và báo rõ phạm vi phục vụ, thời gian chờ, các khoản gồm/chưa gồm và điều kiện thay đổi lịch.”',
          ),
          paragraph([
            { text: 'Có thể dùng thêm ' },
            {
              text: 'mẫu hỏi báo giá theo lịch trình',
              href: '/kinh-nghiem/thong-tin-can-co-khi-hoi-bao-gia',
            },
            {
              text: ' để điền đủ điểm đón, giờ đi và giờ về trước khi trao đổi với Hành Trình Phương Nam.',
            },
          ]),
          paragraph([
            { text: 'Nguồn ảnh minh họa: ' },
            {
              text: 'Nha-trang-3039566.jpg trên Wikimedia Commons',
              href: 'https://commons.wikimedia.org/wiki/File:Nha-trang-3039566.jpg',
            },
            { text: ', tác giả Quangpraha, CC0.' },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Đi 3 ngày 2 đêm có bắt buộc xe ở lại cùng đoàn không?',
        answer:
          'Không nên mặc định. Gửi lịch dùng xe từng ngày để hỏi phương án ở lại hoặc các lượt đưa đón riêng; so sánh theo cùng phạm vi phục vụ và chi phí tổng.',
      },
      {
        question: 'Có thể ghép tham quan đảo vào ngày về không?',
        answer:
          'Chỉ nên chốt sau khi đối chiếu giờ tàu/thuyền, thời gian lên bờ, lấy đồ và hành trình về. Nếu khó có khoảng dự phòng, chuyển hoạt động biển đảo sang ngày giữa.',
      },
    ],
  },
  {
    slug: 'di-nha-trang-nen-chon-xe-7-hay-16-cho',
    title: 'Đi Nha Trang nên chọn xe 7 hay 16 chỗ?',
    seoTitle: 'Đi Nha Trang: chọn xe 7 hay 16 chỗ?',
    topics: ['nha-trang', 'chon-xe', 'gia-dinh'],
    description:
      'So sánh xe 7 và 16 chỗ đi Nha Trang theo số khách, vali, điểm đón và lịch sử dụng. Checklist thông tin cần xác nhận trước khi đặt xe.',
    category: 'Chọn xe đi Nha Trang',
    date: '2026-11-17',
    image: '/images/van.jpg',
    imageAlt: 'Ford Transit 16 chỗ trong bộ ảnh do Hành Trình Phương Nam cung cấp',
    imageCaption: 'Ảnh xe do doanh nghiệp cung cấp; xe phục vụ cần xác nhận theo ngày đi.',
    sections: [
      {
        heading: 'Bắt đầu bằng danh sách khách và hành lý',
        blocks: [
          paragraph(
            'Xe 7 chỗ có thể là phương án cho gia đình hoặc nhóm nhỏ; xe 16 chỗ đáng cân nhắc khi đoàn đông hơn hoặc cần kiểm tra thêm không gian cho người và đồ. Không nên quyết định chỉ bằng tên nhóm xe: hãy hỏi số ghế dành cho khách, cấu hình ghế và khoang chứa của chiếc xe thực tế. Trẻ em cũng phải được báo đầy đủ khi tư vấn chỗ ngồi.',
          ),
          paragraph(
            'Lập một danh sách chung thay vì để từng người báo hành lý vào ngày đi. Ghi số vali, kích cỡ, túi mềm, xe đẩy và thùng đồ; đồ dài hoặc khó gấp cần gửi kích thước. Một đoàn ít người nhưng nhiều kiện lớn có thể cần phương án khác với đoàn cùng số khách chỉ mang túi nhỏ.',
          ),
        ],
      },
      {
        heading: 'Bảng so sánh để hỏi đúng nhu cầu',
        blocks: [
          table(
            'So sánh nhu cầu thuê xe, không thay thế thông số chiếc xe thực tế',
            ['Tiêu chí', 'Nhóm xe 7 chỗ', 'Nhóm xe 16 chỗ'],
            [
              [
                'Khách đi',
                'Gia đình hoặc nhóm nhỏ; hỏi số ghế khách sử dụng được.',
                'Đoàn nhỏ nhiều thành viên; chốt danh sách và người phụ trách.',
              ],
              [
                'Hành lý',
                'Khi dùng nhiều hàng ghế, cần kiểm tra lại chỗ để vali.',
                'Kiểm tra khoang đồ riêng; thêm ghế không đồng nghĩa chứa đủ mọi vali.',
              ],
              [
                'Điểm đón',
                'Gửi địa chỉ và điều kiện đường vào, nhất là nhà trong hẻm.',
                'Ưu tiên điểm tập kết đủ chỗ dừng, thống nhất lượt gom khách.',
              ],
              [
                'Lịch tại Nha Trang',
                'Chốt các lượt đưa đón gia đình, khách sạn và điểm ăn uống.',
                'Chốt giờ tập trung, nơi đỗ và thời gian lên xuống của cả đoàn.',
              ],
              [
                'Báo giá',
                'So sánh cùng số ngày, điểm đến và phạm vi chờ.',
                'Cũng cần cùng điều kiện; không chỉ chia tổng tiền cho số ghế ghi trên tên xe.',
              ],
            ],
          ),
          paragraph(
            'Nếu đang phân vân, gửi cùng một lịch cho hai phương án và đề nghị báo cả giá lẫn điều kiện phục vụ. Cách này giúp thấy rõ chênh lệch chi phí thực tế mà không phải đoán sức chứa hay tự suy ra mức giá từ một tuyến khác.',
          ),
        ],
      },
      {
        heading: 'Ba tình huống minh họa khi chọn xe',
        blocks: [
          checklist([
            'Gia đình ít người có xe đẩy: gửi ảnh khi xe đẩy đã gấp cùng số vali, hỏi cách xếp đồ và chỗ ngồi trên nhóm 7 chỗ trước.',
            'Hai gia đình đi cùng: báo tổng số người lớn và trẻ em, không chỉ số hộ; hỏi cả phương án 7 và 16 chỗ nếu số khách/hành lý chưa chốt.',
            'Nhóm bạn đi nhiều đêm: chốt số kiện lớn của từng người, giờ tập kết và điểm trả; nếu cần xe lớn hơn, hỏi trước khi đặt cọc.',
          ]),
          paragraph(
            'Đây là ví dụ lập kế hoạch, không phải mô tả chuyến đã thực hiện. Với chặng đường dài, nên trao đổi nhu cầu dừng nghỉ, hỗ trợ lên xuống và những đồ cần lấy giữa đường để bố trí thuận tiện. Không dùng lối đi hoặc khu vực cần thoát ra vào làm chỗ chứa đồ.',
          ),
        ],
      },
      {
        heading: 'Đối chiếu xe và lịch trình trước khi đặt',
        blocks: [
          paragraph([
            { text: 'Xem phương án ' },
            { text: 'thuê xe 7 chỗ đi Nha Trang', href: '/thue-xe/7-cho/di-nha-trang' },
            { text: ' và ' },
            { text: 'thuê xe 16 chỗ đi Nha Trang', href: '/thue-xe/16-cho/di-nha-trang' },
            {
              text: '. Các trang này giúp chuẩn bị câu hỏi, còn chiếc xe sẵn có và trang bị phải được xác nhận theo ngày đi.',
            },
          ]),
          checklist([
            'Mẫu xe dự kiến, ảnh xe nếu cần và số ghế có thể bố trí cho toàn đoàn.',
            'Tổng hành lý, đồ cồng kềnh và những món cần lấy ở điểm nghỉ.',
            'Điểm đón/trả, giờ khởi hành, số đêm lưu trú và các lượt dùng xe tại điểm đến.',
            'Giá tổng, phạm vi chờ, khoản phát sinh và cách xử lý khi số khách thay đổi.',
          ]),
          paragraph([
            { text: 'Nếu chưa có lịch từng ngày, tham khảo ' },
            {
              text: 'khung Nha Trang 3 ngày 2 đêm bằng xe riêng',
              href: '/kinh-nghiem/di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng',
            },
            {
              text: ' rồi điều chỉnh theo đoàn của bạn. Chỉ đặt cọc sau khi hai bên cùng hiểu một phạm vi chuyến.',
            },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Ít người nhưng nhiều vali có nên chọn xe 16 chỗ không?',
        answer:
          'Có thể cân nhắc, nhưng cần kiểm tra số kiện và kích thước khoang chứa thực tế. Hãy gửi ảnh/kích thước hành lý để so sánh các phương án thay vì suy ra từ số chỗ.',
      },
      {
        question: 'Có thể đổi từ xe 7 lên 16 chỗ sát ngày đi không?',
        answer:
          'Phải hỏi lại tình trạng xe, giá và điều kiện thay đổi. Nếu số khách chưa chắc chắn, nên thống nhất thời hạn chốt và cách xử lý ngay khi đặt.',
      },
    ],
  },
  {
    slug: 'thue-xe-di-vung-tau-long-hai-ho-tram-khac-gi-khi-hoi-gia',
    title: 'Thuê xe đi Vũng Tàu, Long Hải hay Hồ Tràm: khác gì khi hỏi giá?',
    seoTitle: 'Vũng Tàu, Long Hải, Hồ Tràm: hỏi giá xe',
    topics: ['vung-tau', 'ho-tram', 'chi-phi'],
    description:
      'Phân biệt điểm trả Vũng Tàu, Long Hải và Hồ Tràm khi hỏi giá xe. Chuẩn bị địa chỉ lưu trú, điểm ghé và thời lượng để đối chiếu đúng báo giá.',
    category: 'Tuyến biển và báo giá',
    date: '2026-11-17',
    image: '/images/mpv.jpg',
    imageAlt: 'Ảnh minh họa xe Toyota Innova cho nhu cầu thuê xe đi biển',
    imageCaption: 'Ảnh minh họa dòng xe; không phải ảnh ghi nhận một chuyến đi Hồ Tràm.',
    sections: [
      {
        heading: 'Tên điểm đến ảnh hưởng trực tiếp đến phạm vi báo giá',
        blocks: [
          paragraph(
            'Khi hỏi xe đi biển, hãy ghi rõ Vũng Tàu, Long Hải hay Hồ Tràm cùng tên khách sạn và ghim vị trí. Đây là những điểm đến riêng trong dữ liệu bảng giá của website; báo giá đến một điểm không tự áp dụng cho điểm còn lại. Nếu chỉ nói “đi Vũng Tàu” nhưng trả tại resort Hồ Tràm, hai bên có thể hiểu khác hành trình.',
          ),
          paragraph(
            'Tên thương mại của khu nghỉ dưỡng cũng có thể giống hoặc dễ nhầm. Gửi địa chỉ đặt phòng và ghim cổng đón trả sẽ rõ hơn chỉ gửi ảnh quảng cáo. Khi chương trình có nhiều điểm, ghi theo thứ tự thực đi và đánh dấu nơi xe kết thúc chuyến, nơi chỉ dừng ăn hoặc tham quan.',
          ),
          paragraph([
            { text: 'Tham khảo thêm ' },
            {
              text: 'bài giới thiệu Hồ Tràm của Báo ảnh Việt Nam',
              href: 'https://vietnam.vnanet.vn/english/english/long-form/ho-tram-a-tourism-paradise-318614.html',
            },
            {
              text: ' để hình dung khu vực ven biển. Khi đặt xe, vẫn dùng địa chỉ cụ thể trong xác nhận lưu trú để chốt điểm trả.',
            },
          ]),
        ],
      },
      {
        heading: 'Thông tin cần gửi cho từng phương án',
        blocks: [
          table(
            'Cách mô tả điểm đến để nhận báo giá rõ ràng',
            ['Phương án', 'Thông tin chính', 'Điểm dễ bỏ sót'],
            [
              [
                'Vũng Tàu',
                'Tên khách sạn/địa chỉ, điểm ăn và các bãi biển muốn ghé.',
                'Lượt di chuyển giữa khách sạn, nhà hàng và điểm tham quan.',
              ],
              [
                'Long Hải',
                'Cơ sở lưu trú, giờ đến và có ghé điểm khác trước/sau không.',
                'Nhầm tên khu vực với một cơ sở lưu trú khác; thiếu ghim điểm trả.',
              ],
              [
                'Hồ Tràm',
                'Tên resort, cổng đón trả, ngày nhận/trả phòng và giờ xe cần có mặt.',
                'Chỉ báo tên tuyến chung, chưa ghi nhu cầu ra ngoài resort.',
              ],
              [
                'Ghép nhiều điểm',
                'Toàn bộ thứ tự điểm ghé, thời gian dừng và nơi kết thúc.',
                'So sánh giá chuyến ghép với giá chỉ đưa đến một nơi.',
              ],
            ],
          ),
          paragraph(
            'Với xe đoàn lớn, hỏi cơ sở lưu trú hoặc nhà hàng về vị trí xe dừng và bãi đỗ. Nếu cần tập kết ngoài cổng rồi đi bộ vào, nên biết trước để báo cho đoàn, đặc biệt khi mang nhiều hành lý hoặc có người cần hỗ trợ lên xuống.',
          ),
        ],
      },
      {
        heading: 'Một chiều, trong ngày và qua đêm là các phạm vi khác nhau',
        blocks: [
          paragraph(
            'Chuyến một chiều kết thúc sau khi trả khách theo thỏa thuận; chuyến đi về trong ngày cần thêm giờ đón lại và các lượt sử dụng giữa hai chặng. Với hai ngày một đêm, phải làm rõ xe có ở lại và đoàn có dùng xe buổi tối hoặc sáng hôm sau không. Cùng điểm trả nhưng phạm vi phục vụ khác thì giá không còn tương đương.',
          ),
          paragraph(
            'Ví dụ minh họa: đoàn A chỉ cần đưa tới resort rồi đón về hôm sau; đoàn B muốn thêm xe đi ăn tối và ghé Long Hải trước khi về. Hãy gửi hai lịch riêng để nhận hai phương án, không lấy giá của đoàn A làm chuẩn cho đoàn B. Chi phí liên quan đến tài xế, bãi đỗ và thời gian chờ cần được xác nhận bằng văn bản.',
          ),
        ],
      },
      {
        heading: 'Cách đối chiếu bảng giá và khoản chưa gồm',
        blocks: [
          paragraph([
            { text: 'Mở ' },
            { text: 'bảng giá thuê xe', href: '/bang-gia' },
            { text: ' và tìm đúng điểm đến. ' },
            { text: 'Trang tuyến Vũng Tàu', href: '/tuyen-xe/vung-tau' },
            {
              text: ' cũng tập hợp các dòng trong khu vực để tham khảo. Đối chiếu cả số chỗ và thời lượng, không chỉ con số tiền.',
            },
          ]),
          checklist([
            'Hai báo giá có cùng ngày đi, số khách, số điểm đón và điểm trả không?',
            'Đã gồm cầu đường, bãi đỗ, thời gian chờ và các lượt tại điểm đến chưa?',
            'Chuyến qua đêm bố trí ăn nghỉ tài xế như thế nào?',
            'Nếu thêm một điểm hoặc lùi giờ về, cách tính điều chỉnh và xác nhận ra sao?',
          ]),
          paragraph([
            { text: 'Nếu đã chọn resort, xem ' },
            {
              text: 'cách chốt lịch Hồ Tràm 2 ngày 1 đêm',
              href: '/kinh-nghiem/di-ho-tram-2-ngay-1-dem-bang-xe-rieng',
            },
            { text: '. Để kiểm tra báo giá đầy đủ, đọc thêm ' },
            {
              text: 'các khoản phí cần hỏi khi thuê xe có tài xế',
              href: '/kinh-nghiem/thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao',
            },
            { text: '.' },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Giá đi Vũng Tàu có áp dụng cho resort Hồ Tràm không?',
        answer:
          'Không tự động áp dụng. Gửi tên resort và ghim vị trí để nhận báo giá theo đúng điểm trả, thời lượng và phạm vi dùng xe.',
      },
      {
        question: 'Muốn ghé Long Hải trên đường về từ Hồ Tràm cần báo trước không?',
        answer:
          'Nên ghi ngay trong lịch hỏi xe, gồm địa chỉ, thời gian dừng và giờ về dự kiến. Nhà xe cần kiểm tra lộ trình và xác nhận khoản điều chỉnh nếu có.',
      },
    ],
  },
  {
    slug: 'thue-xe-29-hay-45-cho-cho-doan-cong-ty',
    title: 'Thuê xe 29 hay 45 chỗ cho đoàn công ty?',
    seoTitle: 'Đoàn công ty: chọn xe 29 hay 45 chỗ?',
    topics: ['chon-xe', 'doan', 'dat-xe'],
    description:
      'Chọn xe 29 hay 45 chỗ cho đoàn công ty theo số khách, hành lý, thiết bị và bãi đỗ. Có checklist lịch đưa đón và cách so sánh báo giá.',
    category: 'Xe đoàn và sự kiện',
    date: '2026-11-17',
    image: '/images/bus.jpg',
    imageAlt: 'Ảnh minh họa xe khách du lịch cho chương trình đưa đón đoàn công ty',
    imageCaption: 'Ảnh minh họa xe đoàn; mẫu xe phục vụ cần xác nhận khi đặt.',
    sections: [
      {
        heading: 'Chọn theo đoàn thực đi, không chỉ theo tên nhóm xe',
        blocks: [
          paragraph(
            'Xe 29 chỗ và 45 chỗ là hai nhóm để tham khảo khi tổ chức du lịch, hội nghị hoặc đưa đón nhân sự. Quyết định nên bắt đầu từ số khách ở lượt đông nhất, danh sách người phụ trách và tổng hành lý. Hỏi lại số ghế dành cho khách trên xe dự kiến, thay vì suy ra mọi ghế ghi trong tên xe đều có thể phân cho đoàn.',
          ),
          paragraph(
            'Nếu chương trình có thiết bị âm thanh, thùng quà, phông nền hoặc đồ teambuilding, cần gửi kích thước và cách đóng kiện. Không xem ghế trống là nơi mặc định để xếp đồ lớn. Trường hợp đồ không phù hợp khoang chứa, hỏi phương án vận chuyển riêng trước khi quyết định tăng cỡ xe.',
          ),
        ],
      },
      {
        heading: 'Bảng đối chiếu xe 29 và 45 chỗ',
        blocks: [
          table(
            'Các câu hỏi cần dùng để chọn xe cho chương trình công ty',
            ['Tiêu chí', 'Nhóm 29 chỗ', 'Nhóm 45 chỗ'],
            [
              [
                'Quy mô',
                'Cân nhắc cho đoàn vừa khi khách và đồ phù hợp xe được bố trí.',
                'Cân nhắc cho đoàn lớn hoặc nhu cầu bố trí khác; xác nhận sức chứa thực tế.',
              ],
              [
                'Đường vào',
                'Kiểm tra cổng, chỗ dừng và đường tới khách sạn/nhà hàng.',
                'Cần làm rõ đường tiếp cận, vị trí quay đầu và bãi đỗ cho xe lớn.',
              ],
              [
                'Hành lý',
                'Thống kê vali và đồ chương trình; hỏi khoang chứa.',
                'Cũng phải kiểm tra kích thước kiện và phương án xếp, không chỉ tổng số túi.',
              ],
              [
                'Nhiều lượt',
                'Có thể phù hợp chia lượt nếu giờ giấc cho phép.',
                'Cân nhắc gom đoàn, nhưng vẫn phải tính thời gian tập kết và di chuyển.',
              ],
              [
                'So giá',
                'Dùng cùng tuyến, thời gian chờ và lượt đưa đón để hỏi.',
                'Đối chiếu tổng chi phí cùng phạm vi, gồm điều kiện thay đổi số khách.',
              ],
            ],
          ),
          paragraph(
            'Nếu cả hai phương án đều đáp ứng, đánh giá thêm việc tập trung đoàn, chỗ đỗ và nhu cầu di chuyển tại điểm đến. Phương án ít tiền hơn ở một lượt chưa chắc phù hợp cả ngày nếu phải chạy thêm nhiều lượt hoặc mất nhiều thời gian chờ. Các điều kiện đó cần được ghi trong báo giá.',
          ),
        ],
      },
      {
        heading: 'Lập lịch sự kiện theo từng lượt đón trả',
        blocks: [
          checklist([
            'Ghi giờ đoàn phải có mặt tại sự kiện, thời gian lên xuống xe và khoảng dự phòng tập trung.',
            'Mỗi lượt có điểm đón, giờ đón, số khách, người phụ trách và nơi trả cụ thể.',
            'Nếu khách đến bằng nhiều chuyến bay hoặc nghỉ ở nhiều khách sạn, tách thành từng nhóm.',
            'Hỏi nơi xe được chờ, phí bãi đỗ và ai liên hệ khi chương trình kéo dài.',
            'Chốt lượt kết thúc, các điểm trả cuối ngày và cách thông báo khi lịch thay đổi.',
          ]),
          paragraph(
            'Ví dụ minh họa: buổi sáng đoàn đi chung đến hội nghị, buổi chiều một nhóm về khách sạn còn nhóm khác đi ăn tối. Đây là hai nhu cầu trả khách khác nhau; người đặt nên gửi cả lịch chiều ngay từ đầu. Nếu sự kiện kết thúc không cố định, trao đổi khung chờ và cách xác nhận phát sinh trước khi chốt xe.',
          ),
        ],
      },
      {
        heading: 'Thông tin để chốt xe và hồ sơ thanh toán',
        blocks: [
          paragraph([
            { text: 'Đối chiếu ' },
            { text: 'nhóm xe 29 chỗ', href: '/thue-xe/29-cho' },
            { text: ' và ' },
            { text: 'nhóm xe 45 chỗ', href: '/thue-xe/45-cho' },
            { text: '; có thể xem thêm ' },
            { text: 'Samco 29 chỗ', href: '/doi-xe/samco-29-cho' },
            { text: ' và ' },
            { text: 'Hyundai Universe', href: '/doi-xe/hyundai-universe' },
            {
              text: ' trong danh mục. Không mặc định mẫu minh họa là xe chắc chắn có vào ngày tổ chức.',
            },
          ]),
          paragraph(
            'Khi làm việc qua công ty, hãy gửi thông tin đơn vị nhận hóa đơn, đầu mối duyệt lịch và yêu cầu hồ sơ thanh toán để hỏi khả năng đáp ứng. Đối chiếu giá đã gồm/chưa gồm thuế và các khoản phục vụ. Người phụ trách đoàn nên giữ cùng bản lịch đã xác nhận với nhà xe, tránh mỗi bộ phận dùng một phiên bản.',
          ),
          paragraph([
            { text: 'Trước khi chuyển tiền, xem ' },
            {
              text: 'những điều cần xác nhận khi đặt cọc',
              href: '/kinh-nghiem/dat-coc-thue-xe-can-xac-nhan-gi',
            },
            {
              text: '. Nếu số người chưa chốt, đề nghị ghi rõ hạn cập nhật và điều kiện đổi nhóm xe.',
            },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Đoàn chưa chốt số người có nên đặt xe ngay không?',
        answer:
          'Có thể hỏi và giữ phương án theo thỏa thuận, nhưng phải thống nhất hạn chốt số khách, điều kiện đặt cọc và khả năng đổi xe. Không coi việc hỏi xe là đã bảo đảm có xe.',
      },
      {
        question: 'Thiết bị sự kiện có được tính như hành lý cá nhân không?',
        answer:
          'Cần báo riêng số kiện, kích thước và yêu cầu vận chuyển. Nhà xe phải xác nhận có thể bố trí hay cần phương án khác; không mặc định khoang hành lý nhận mọi loại thiết bị.',
      },
    ],
  },
  {
    slug: 'thue-xe-don-san-bay-tan-son-nhat-cho-doan',
    title: 'Thuê xe đón sân bay Tân Sơn Nhất cho đoàn: thông tin cần gửi',
    seoTitle: 'Đón đoàn tại Tân Sơn Nhất: cách đặt xe',
    topics: ['san-bay', 'doan', 'dat-xe'],
    description:
      'Checklist đặt xe đón đoàn ở Tân Sơn Nhất: mã chuyến bay, nhà ga, hành lý, điểm gặp và cách thống nhất thời gian chờ khi chuyến bay thay đổi.',
    category: 'Đưa đón sân bay',
    date: '2026-11-17',
    image: '/images/ford-transit-2.jpg',
    imageAlt: 'Ảnh xe Ford Transit do doanh nghiệp cung cấp để tham khảo khi đặt xe đoàn',
    imageCaption:
      'Ảnh xe do doanh nghiệp cung cấp; không phải ảnh một lượt đón sân bay đã thực hiện.',
    sections: [
      {
        heading: 'Gửi mã chuyến bay và xác nhận đúng nhà ga',
        blocks: [
          paragraph(
            'Để đặt xe đón đoàn tại Tân Sơn Nhất, cần gửi mã chuyến bay, ngày đến, giờ hạ cánh dự kiến và nhà ga thể hiện trên thông tin chuyến bay. Chỉ nói tên hãng hoặc “ga nội địa” có thể chưa đủ để hẹn đúng nơi. Trước ngày đi, kiểm tra lại thông báo của hãng và cập nhật cho đầu mối nhà xe nếu nhà ga hoặc lịch bay thay đổi.',
          ),
          paragraph([
            { text: 'Cục Hàng không Việt Nam đã có ' },
            {
              text: 'lưu ý dành cho hành khách đến và đi nhà ga T3',
              href: 'https://caa.gov.vn/hanh-khach-can-biet/luu-y-danh-cho-hanh-khach-di-va-den-nha-ga-hanh-khach-t3-cang-hkqt-tan-son-nhat-20250423085137159.htm',
            },
            {
              text: '. Thông tin khai thác có thể thay đổi theo chuyến và thời điểm; hãy dùng xác nhận mới nhất của hãng thay vì áp dụng một danh sách hãng/nhà ga cố định trong bài viết.',
            },
          ]),
          paragraph(
            'Giờ hạ cánh không phải giờ toàn đoàn sẵn sàng ra xe. Khách còn cần xuống máy bay, nhận hành lý và làm các thủ tục liên quan. Khi hỏi xe, nêu chuyến nội địa hay quốc tế và tình trạng hành lý để thống nhất giờ xe có mặt, cách báo đã ra ngoài và điểm tập trung.',
          ),
        ],
      },
      {
        heading: 'Checklist thông tin cho một lượt đón',
        blocks: [
          table(
            'Thông tin nên gửi trong một tin nhắn chung',
            ['Nhóm thông tin', 'Nội dung cần ghi', 'Mục đích'],
            [
              [
                'Chuyến bay',
                'Mã chuyến, ngày, giờ đến và nhà ga đã kiểm tra.',
                'Hẹn đúng lượt và đúng nơi đón.',
              ],
              [
                'Khách',
                'Tổng số người lớn, trẻ em và nhóm đi cùng.',
                'Tư vấn số ghế và cách tập trung đoàn.',
              ],
              [
                'Hành lý',
                'Vali ký gửi, túi xách, xe đẩy, kiện lớn kèm kích thước.',
                'Kiểm tra khoang đồ trên xe thực tế.',
              ],
              [
                'Liên hệ',
                'Một người chính, số điện thoại dùng được sau khi hạ cánh và người dự phòng.',
                'Tránh tài xế phải liên hệ nhiều nhóm cùng lúc.',
              ],
              [
                'Điểm trả',
                'Tên khách sạn/địa chỉ, các điểm trả và thứ tự mong muốn.',
                'Lập đúng hành trình và báo giá đủ các lượt.',
              ],
            ],
          ),
          paragraph(
            'Nếu đoàn đến bằng nhiều chuyến, lập bảng riêng cho từng chuyến và số khách của chuyến đó. Không gom thành một giờ đón chung khi thời gian đến khác nhau mà chưa tính phương án chờ hoặc chia lượt. Với đoàn có thiết bị, báo kiện lớn tách khỏi số vali thông thường.',
          ),
        ],
      },
      {
        heading: 'Hẹn điểm gặp và xử lý khi chuyến bay đổi giờ',
        blocks: [
          paragraph(
            'Thống nhất ai chủ động gọi, khi nào gọi và vị trí gặp theo hướng dẫn hiện hành tại nhà ga. Đừng mặc định xe có thể chờ lâu ở làn đón hoặc vào mọi khu vực. Trưởng đoàn nên gom khách, kiểm đủ đồ rồi báo tình trạng sẵn sàng; nếu có người còn chờ hành lý, cập nhật để hai bên phối hợp.',
          ),
          checklist([
            'Hỏi thời gian chờ trong báo giá bắt đầu tính từ mốc nào và đã gồm bao lâu.',
            'Hỏi cách xử lý khi chuyến bay trễ, đổi nhà ga hoặc khách ra muộn.',
            'Xác nhận khoản đỗ/chờ và điều kiện điều chỉnh nếu phải chia thêm lượt.',
            'Lưu số liên hệ và gửi thay đổi cho đúng đầu mối, không tự hiểu nhà xe luôn theo dõi mọi cập nhật.',
          ]),
          paragraph(
            'Một tin nhắn cập nhật nên có mã chuyến, giờ mới và thay đổi về khách/đồ. Nếu đổi sang chuyến khác, cần nhà xe xác nhận lại khả năng bố trí; lịch mới không tự thay thế lịch cũ khi chưa có phản hồi. Không gửi hộ chiếu hoặc thông tin cá nhân không cần thiết chỉ để hỏi giá xe.',
          ),
        ],
      },
      {
        heading: 'Chọn xe và gửi mẫu hỏi giá đầy đủ',
        blocks: [
          paragraph([
            { text: 'Tham khảo ' },
            { text: 'xe 7 chỗ', href: '/thue-xe/7-cho' },
            { text: ' cho nhóm nhỏ hoặc ' },
            { text: 'xe 16 chỗ', href: '/thue-xe/16-cho' },
            {
              text: ' cho đoàn; cần xác nhận theo số người và hành lý thực tế. Bạn cũng có thể xem phạm vi dịch vụ tại ',
            },
            { text: 'trang dịch vụ thuê xe', href: '/dich-vu' },
            { text: '.' },
          ]),
          paragraph(
            '“Nhờ tư vấn xe đón chuyến … ngày …, dự kiến hạ cánh lúc … tại nhà ga … theo xác nhận hãng. Đoàn có … người, … vali và … kiện lớn. Người liên hệ là …; trả tại …. Vui lòng báo giá, điểm gặp, cách liên hệ tài xế, thời gian chờ đã gồm và điều kiện khi chuyến bay trễ.”',
          ),
          paragraph(
            'Trước khi xác nhận, đối chiếu báo giá có đủ số điểm trả, phí đỗ/chờ và nhu cầu hỗ trợ đã trao đổi. Chỉ chọn phương án sau khi nhà xe xác nhận chiếc xe phù hợp; tên nhóm xe không bảo đảm đủ khoang chứa cho mọi đoàn có cùng số khách.',
          ),
        ],
      },
    ],
    faq: [
      {
        question: 'Cứ gửi giờ hạ cánh là đủ để hẹn xe chưa?',
        answer:
          'Chưa đủ. Cần mã chuyến, ngày đến, nhà ga, hành lý và đầu mối liên hệ; đồng thời thống nhất khoảng thời gian ra ngoài và điểm gặp.',
      },
      {
        question: 'Chuyến bay trễ có được miễn tiền chờ không?',
        answer:
          'Điều này phụ thuộc báo giá và điều kiện hai bên đã xác nhận. Hãy hỏi mốc tính chờ, phần đã gồm và cách điều chỉnh trước khi đặt xe.',
      },
    ],
  },
  {
    slug: 'thue-xe-cuoi-mercedes-hay-camry',
    title: 'Thuê xe cưới Mercedes hay Camry: chọn theo lịch đón dâu',
    seoTitle: 'Xe cưới Mercedes hay Camry: cách chọn',
    topics: ['xe-cuoi', 'chon-xe'],
    description:
      'So sánh nhu cầu thuê xe cưới Mercedes và Camry theo lịch đón dâu, đồ lễ, trang trí và điểm dừng. Checklist xác nhận xe trước ngày cưới.',
    category: 'Chọn xe cưới',
    date: '2026-11-17',
    image: '/images/mercedes.jpg',
    imageAlt: 'Ảnh minh họa dòng Mercedes-Benz trong danh mục xe tham khảo',
    imageCaption: 'Ảnh minh họa dòng xe; đời xe, màu xe và trang bị cần được xác nhận khi đặt.',
    sections: [
      {
        heading: 'Chọn dòng xe sau khi chốt vai trò trong đoàn cưới',
        blocks: [
          paragraph(
            'Khi phân vân Mercedes hay Camry làm xe cưới, hãy xác định trước xe chở ai, có mang đồ lễ hoặc váy cưới cồng kềnh không và xe cần xuất hiện ở những điểm nào. Hai tên dòng xe chỉ là bước đầu tham khảo; đời xe, màu xe, nội thất và chiếc xe sẵn có cần được xác nhận theo ngày cưới.',
          ),
          paragraph(
            'Xe hoa chở cô dâu chú rể và xe đưa đón người thân là hai nhu cầu nên tách riêng. Không để lịch của xe hoa phải kiêm nhiều lượt gom khách nếu làm ảnh hưởng giờ làm lễ. Khi hỏi xe, gửi số người ở từng chặng thay vì chỉ ghi “thuê xe cưới một ngày”.',
          ),
        ],
      },
      {
        heading: 'So sánh bằng những điều có thể kiểm tra',
        blocks: [
          table(
            'Bảng câu hỏi dùng khi so sánh hai phương án xe cưới',
            ['Tiêu chí', 'Mercedes-Benz E-Class', 'Toyota Camry'],
            [
              [
                'Hình thức',
                'Yêu cầu ảnh xe dự kiến; xác nhận đời, màu và kiểu nội thất.',
                'Cũng cần ảnh xe dự kiến; không dựa riêng vào ảnh minh họa.',
              ],
              [
                'Chỗ ngồi và đồ',
                'Kiểm tra lên xuống khi mặc trang phục cưới và vị trí đồ lễ.',
                'Kiểm tra cùng nhu cầu để so sánh công bằng.',
              ],
              [
                'Trang trí',
                'Hỏi vật liệu, vị trí gắn và ai thực hiện/tháo trang trí.',
                'Xác nhận cách gắn phù hợp với chiếc xe được phục vụ.',
              ],
              [
                'Phạm vi thuê',
                'Ghi số giờ, tuyến đón dâu, điểm chụp ảnh và nơi kết thúc.',
                'Dùng cùng lịch, thời gian chờ và các điểm dừng để hỏi giá.',
              ],
              [
                'Xác nhận',
                'Hỏi điều kiện thay xe nếu xe dự kiến không thể phục vụ.',
                'Cũng thống nhất phương án thay thế và cách thông báo.',
              ],
            ],
          ),
          paragraph(
            'Không có lựa chọn tốt hơn cho mọi đám cưới. Phương án phù hợp là xe đáp ứng nhu cầu đã xác nhận, xuất hiện đúng trong lịch và có điều kiện rõ ràng. Nếu màu xe là yêu cầu quan trọng của buổi lễ, ghi điều đó trong xác nhận trước khi đặt cọc, không chỉ trao đổi miệng.',
          ),
        ],
      },
      {
        heading: 'Lập lịch đón dâu theo các mốc bắt buộc',
        blocks: [
          checklist([
            'Giờ xe tới nơi trang trí và thời gian hoàn tất, nếu trang trí trước khi đón.',
            'Địa chỉ nhà trai, nhà gái và giờ cần có mặt để chuẩn bị làm lễ.',
            'Điểm chụp ảnh, thời gian dừng và vị trí xe có thể chờ.',
            'Lượt tới nhà hàng, khách sạn hoặc nơi tổ chức tiệc; ai đi cùng ở từng chặng.',
            'Địa chỉ kết thúc, giờ trả xe dự kiến và người báo khi chương trình kéo dài.',
          ]),
          paragraph(
            'Nếu đường vào nhà hẹp, gửi ghim đầu hẻm và trao đổi nơi xe có thể dừng. Gia đình cần biết có phải đi bộ một đoạn hay không để chuẩn bị trang phục và đồ lễ. Khoảng dự phòng nên được đặt giữa các mốc quan trọng; không giải quyết lịch quá sát bằng cách yêu cầu tài xế rút ngắn thời gian di chuyển.',
          ),
        ],
      },
      {
        heading: 'Trang trí và báo giá cần xác nhận riêng',
        blocks: [
          paragraph(
            'Hỏi rõ giá xe đã gồm hoa trang trí chưa, đơn vị nào làm, ai duyệt mẫu và ai chịu trách nhiệm tháo sau chuyến. Nếu dùng đơn vị hoa riêng, gửi vật liệu và vị trí gắn để nhà xe xác nhận phù hợp. Không mặc định mọi kiểu băng dính, phụ kiện hoặc đồ trang trí đều có thể gắn lên xe.',
          ),
          paragraph(
            'Đối chiếu số giờ phục vụ, điểm dừng, thời gian chờ, chi phí cầu đường/bãi đỗ và cách xử lý khi thêm chặng. Nếu cần xe cho người thân, hỏi báo giá riêng theo số người và các lượt đưa đón. Không suy ra xe đi kèm miễn phí từ việc đã thuê xe hoa.',
          ),
          paragraph([
            { text: 'Tham khảo ' },
            { text: 'dịch vụ xe cưới', href: '/xe-cuoi' },
            { text: ', ' },
            { text: 'Mercedes-Benz E-Class', href: '/doi-xe/mercedes-benz-e-class' },
            { text: ' và ' },
            { text: 'Toyota Camry', href: '/doi-xe/toyota-camry' },
            { text: '. Bài ' },
            { text: 'chuẩn bị thuê xe cưới', href: '/kinh-nghiem/chuan-bi-thue-xe-cuoi' },
            { text: ' giúp rà lại lịch và các thông tin trước khi trao đổi.' },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Có chắc được đúng màu xe như hình trên website không?',
        answer:
          'Cần nhà xe xác nhận màu và chiếc xe dự kiến theo ngày cưới. Ảnh minh họa trên website không thay thế xác nhận đặt xe.',
      },
      {
        question: 'Nên hỏi giá theo giờ hay theo ngày?',
        answer:
          'Gửi đầy đủ giờ bắt đầu/kết thúc và các điểm dừng, rồi yêu cầu báo phạm vi cụ thể. Tên gói theo giờ hay ngày cần đi kèm điều kiện chờ, thêm giờ và thêm chặng.',
      },
    ],
  },
  {
    slug: 'di-ho-tram-2-ngay-1-dem-bang-xe-rieng',
    title: 'Đi Hồ Tràm 2 ngày 1 đêm bằng xe riêng: chốt lịch đón và xe chờ',
    seoTitle: 'Hồ Tràm 2 ngày 1 đêm: chốt lịch xe',
    topics: ['ho-tram', 'vung-tau', 'lich-trinh', 'gia-dinh'],
    description:
      'Lên lịch xe đi Hồ Tràm 2 ngày 1 đêm theo giờ nhận trả phòng, nhu cầu ra ngoài resort và phương án xe ở lại hoặc đón về hôm sau.',
    category: 'Lịch nghỉ Hồ Tràm',
    date: '2026-11-17',
    image: '/images/kia-carnival-1.jpg',
    imageAlt:
      'Xe Kia Carnival trong bộ ảnh doanh nghiệp cung cấp để tham khảo chuyến nghỉ gia đình',
    imageCaption: 'Ảnh xe do doanh nghiệp cung cấp; không phải ảnh ghi nhận một chuyến đi Hồ Tràm.',
    sections: [
      {
        heading: 'Lấy giờ nhận và trả phòng làm hai mốc chính',
        blocks: [
          paragraph(
            'Với chuyến nghỉ Hồ Tràm hai ngày một đêm, nên chốt tên resort, giờ nhận phòng và giờ trả phòng trước khi hẹn xe. Từ hai mốc đó, trao đổi giờ đón tại nơi xuất phát, điểm ăn trưa và thời gian rời resort hôm sau. Đừng mặc định đến sớm là có phòng hoặc xe luôn chờ tới lúc cả đoàn quyết định về.',
          ),
          paragraph(
            'Nếu xuất phát từ khu vực nội đô TP.HCM, gửi đầy đủ các địa chỉ đón để nhà xe tính thứ tự. Khi gọi một tuyến là “đi Hồ Tràm từ TP.HCM”, địa chỉ cụ thể vẫn quan trọng hơn tên tuyến, nhất là khi có nhiều điểm đón. Gia đình có trẻ nhỏ nên hỏi trước nơi gửi đồ hoặc nghỉ tạm nếu đến trước giờ nhận phòng.',
          ),
          paragraph([
            { text: 'Có thể xem ' },
            {
              text: 'giới thiệu du lịch Hồ Tràm của Vietnam Airlines',
              href: 'https://www.vietnamairlines.com/vn/en/plan-book/travel/travel-guide/bai-bien-ho-tram',
            },
            {
              text: ' để tham khảo điểm đến. Giờ phục vụ, hoạt động và điều kiện lưu trú phải kiểm tra trực tiếp với cơ sở bạn đặt.',
            },
          ]),
        ],
      },
      {
        heading: 'Khung lịch hai ngày để điều chỉnh theo gia đình',
        blocks: [
          table(
            'Lịch gợi ý cho chuyến nghỉ dưỡng, không phải chương trình đã đặt',
            ['Mốc', 'Gợi ý', 'Thông tin xe cần biết'],
            [
              [
                'Ngày 1: khởi hành',
                'Tập trung, kiểm hành lý, di chuyển và dừng ăn nếu đã thống nhất.',
                'Thứ tự điểm đón và địa chỉ điểm ăn; không thêm điểm sát giờ mà chưa báo.',
              ],
              [
                'Ngày 1: nhận phòng',
                'Xuống đồ tại cổng/sảnh được cơ sở hướng dẫn rồi nhận phòng.',
                'Chỗ trả khách và việc xe còn phục vụ sau khi đoàn vào resort hay không.',
              ],
              [
                'Ngày 1: buổi tối',
                'Nghỉ tại resort hoặc đi ăn ngoài theo lịch riêng.',
                'Nếu ra ngoài, cần giờ đón, nhà hàng và giờ quay lại.',
              ],
              [
                'Ngày 2: trả phòng',
                'Kiểm đồ, làm thủ tục và tập kết trước giờ xe đón.',
                'Giờ có mặt, lượng hành lý và nhu cầu ghé thêm trước khi về.',
              ],
            ],
          ),
          paragraph(
            'Nếu mục tiêu là nghỉ dưỡng, giữ lịch đơn giản sẽ dễ phối hợp hơn lịch ghé nhiều nơi. Nếu muốn kết hợp Hồ Cốc hoặc Long Hải, gửi luôn thứ tự điểm và thời gian dừng để nhà xe kiểm tra. Chương trình ghép điểm cần báo riêng, không tự tính bằng giá đưa đến resort.',
          ),
        ],
      },
      {
        heading: 'Xe ở lại hay chỉ đưa đi và đón về?',
        blocks: [
          paragraph(
            'Phương án xe ở lại phù hợp để hỏi khi đoàn cần di chuyển ngoài resort trong thời gian lưu trú. Phương án đưa đi rồi đón về hôm sau cần chốt hai mốc rõ ràng và không mặc định có xe phục vụ giữa hai lượt. Không có phương án luôn rẻ hơn; so sánh theo lịch thực tế và điều kiện phục vụ.',
          ),
          checklist([
            'Có ra ngoài ăn uống, tham quan hoặc đón thêm khách giữa chuyến không?',
            'Nếu xe ở lại, thời gian phục vụ và các khoản ăn nghỉ tài xế được bố trí thế nào?',
            'Nếu đón hai lượt, ai liên hệ và bao giờ cần chốt lại giờ về?',
            'Thay đổi giờ trả phòng hoặc thêm chặng được xác nhận và tính chi phí ra sao?',
          ]),
          paragraph([
            { text: 'Có thể đọc ' },
            {
              text: 'so sánh xe ở lại và đưa đón hai lượt',
              href: '/kinh-nghiem/di-vung-tau-xe-o-lai-hay-dua-don-hai-luot',
            },
            {
              text: ' để hiểu cách tách phạm vi, rồi hỏi báo giá riêng cho đúng resort Hồ Tràm. Ví dụ và giá tuyến Vũng Tàu không tự chuyển thành báo giá Hồ Tràm.',
            },
          ]),
        ],
      },
      {
        heading: 'Mẫu hỏi xe đi resort và kiểm tra báo giá',
        blocks: [
          paragraph(
            '“Gia đình tôi có … người lớn, … trẻ em và … vali/xe đẩy. Đi ngày …, về ngày …; đón tại …. Resort …, ghim …. Giờ nhận phòng …, trả phòng …. Chúng tôi cần/không cần xe đi ăn tối; muốn ghé …. Nhờ báo phương án xe phù hợp, các lượt phục vụ và chi phí gồm/chưa gồm.”',
          ),
          paragraph([
            { text: 'Đối chiếu đúng dòng Hồ Tràm trong ' },
            { text: 'bảng giá', href: '/bang-gia' },
            { text: ' hoặc ' },
            { text: 'trang các điểm tuyến biển', href: '/tuyen-xe/vung-tau' },
            {
              text: '. Thời lượng bảng giá có thể khác chuyến nghỉ qua đêm của bạn, vì vậy cần báo lại đủ hai ngày và các lượt dùng xe.',
            },
          ]),
          paragraph(
            'Khi nhận xác nhận đặt xe, kiểm tra số ghế cho khách, khoang đồ, nơi dừng đón tại resort và điều kiện đặt cọc. Lưu cùng một bản lịch cho cả gia đình và người liên hệ nhà xe; thay đổi nên được thống nhất trước khi khởi hành.',
          ),
        ],
      },
    ],
    faq: [
      {
        question: 'Ở resort suốt chuyến có cần thuê xe chờ qua đêm không?',
        answer:
          'Hãy hỏi cả phương án chỉ đưa đi/đón về và xe ở lại, dựa trên lịch gia đình. So sánh tổng chi phí và điều kiện giờ đón lại trước khi chọn.',
      },
      {
        question: 'Trả phòng xong mới quyết định giờ về có được không?',
        answer:
          'Cần thỏa thuận khung giờ và điều kiện chờ trước. Nếu muốn linh hoạt, nêu rõ khi hỏi giá thay vì mặc định xe rảnh cả ngày.',
      },
    ],
  },
  {
    slug: 'thue-xe-di-tinh-cung-nguoi-lon-tuoi',
    title: 'Thuê xe đi tỉnh cùng người lớn tuổi: bố trí lịch nghỉ và hành lý',
    seoTitle: 'Đi tỉnh cùng người lớn tuổi: chuẩn bị xe',
    topics: ['gia-dinh', 'chon-xe', 'lich-trinh'],
    description:
      'Chuẩn bị xe đi tỉnh cùng người lớn tuổi: trao đổi nhu cầu lên xuống, chọn điểm nghỉ, bố trí hành lý và thống nhất lịch đón trả cho gia đình.',
    category: 'Chuyến đi gia đình',
    date: '2026-11-17',
    image: '/images/kia-carnival-2.jpg',
    imageAlt: 'Ảnh xe Kia Carnival do doanh nghiệp cung cấp để tham khảo khi chọn xe gia đình',
    imageCaption:
      'Ảnh xe do doanh nghiệp cung cấp; nhu cầu hỗ trợ cần được trao đổi cho từng chuyến.',
    sections: [
      {
        heading: 'Trao đổi nhu cầu sinh hoạt trước khi chọn xe',
        blocks: [
          paragraph(
            'Khi đi tỉnh cùng người lớn tuổi, nên bắt đầu từ việc lên xuống xe, đồ dùng mang theo và khả năng tham gia lịch trình của từng người. Hỏi người thân điều gì giúp chuyến đi thuận tiện, rồi gửi các nhu cầu đó cho nhà xe. Đừng chỉ chọn xe lớn hơn mà chưa kiểm tra bậc lên xuống, vị trí ngồi và khoang chứa trên xe thực tế.',
          ),
          paragraph(
            'Bài viết tập trung vào tổ chức chuyến đi, không đưa hướng dẫn y tế. Nếu người thân cần đánh giá sức khỏe trước chuyến hoặc hỗ trợ y tế chuyên biệt, gia đình nên hỏi người có chuyên môn và chuẩn bị phương tiện phù hợp; xe du lịch thông thường không thay thế phương tiện y tế.',
          ),
        ],
      },
      {
        heading: 'Chọn xe dựa trên thao tác lên xuống và đồ mang theo',
        blocks: [
          checklist([
            'Báo số người đi, người đi cùng hỗ trợ và nhu cầu chỗ ngồi của cả đoàn.',
            'Nếu có gậy, khung hỗ trợ đi lại hoặc xe lăn gấp, gửi kích thước khi xếp cùng ảnh minh họa.',
            'Hỏi bậc lên xuống, cửa xe và vị trí ngồi trên mẫu xe dự kiến; nếu cần, đề nghị xem ảnh hoặc kiểm tra trước.',
            'Tách túi đồ dùng giữa đường khỏi vali để không phải dỡ nhiều kiện ở mỗi điểm nghỉ.',
          ]),
          paragraph(
            'Không nên mặc định mọi xe 7 hoặc 16 chỗ có cùng cách lên xuống, ghế ngồi hoặc không gian để đồ. Nếu cần giữ nguyên vị trí xe lăn khi di chuyển hoặc thiết bị cố định chuyên dụng, phải hỏi khả năng đáp ứng riêng; không suy ra từ việc xe còn ghế trống.',
          ),
          paragraph([
            { text: 'Gia đình có thể tham khảo ' },
            { text: 'nhóm xe 7 chỗ', href: '/thue-xe/7-cho' },
            { text: ' và ' },
            { text: 'nhóm xe 16 chỗ', href: '/thue-xe/16-cho' },
            { text: ', sau đó xác nhận trên chiếc xe được bố trí. Bài ' },
            {
              text: 'chọn xe theo số người và hành lý',
              href: '/kinh-nghiem/chon-xe-du-lich-theo-so-nguoi',
            },
            { text: ' giúp lập danh sách đồ chung.' },
          ]),
        ],
      },
      {
        heading: 'Đặt các điểm nghỉ vào lịch từ đầu',
        blocks: [
          table(
            'Checklist chọn điểm dừng cho chuyến gia đình',
            ['Nhu cầu', 'Thông tin cần hỏi', 'Cách đưa vào lịch'],
            [
              [
                'Lên xuống thuận tiện',
                'Nơi xe có thể dừng, mặt bằng và khoảng đi bộ tới khu nghỉ.',
                'Hẹn vị trí cụ thể thay vì chỉ ghi tên khu vực.',
              ],
              [
                'Ăn uống',
                'Giờ phục vụ, khả năng tiếp đoàn và yêu cầu riêng của gia đình.',
                'Đặt khoảng thời gian nghỉ thực tế, không nối sát một điểm tham quan.',
              ],
              [
                'Nghỉ giữa đường',
                'Vị trí nghỉ phù hợp trên tuyến và nơi có thể đỗ xe.',
                'Trao đổi điểm dự kiến và cách báo khi cần dừng thêm.',
              ],
              [
                'Đến nơi lưu trú',
                'Cổng trả khách, chỗ dỡ đồ và hỗ trợ từ cơ sở lưu trú.',
                'Báo trước giờ đến dự kiến, giữ đầu mối liên hệ.',
              ],
            ],
          ),
          paragraph(
            'Không có một khoảng nghỉ cố định phù hợp mọi người và mọi tuyến. Hãy trao đổi nhu cầu với người thân và nhà xe rồi chọn lịch có khoảng dự phòng. Nếu có nhiều điểm muốn ghé, phân biệt điểm bắt buộc với điểm có thể bỏ để không khiến ngày đi quá dài.',
          ),
        ],
      },
      {
        heading: 'Phân công người liên hệ và kiểm đồ',
        blocks: [
          paragraph(
            'Chọn một người thống nhất lịch với tài xế, một người kiểm đồ dùng chung nếu cần và một người hỗ trợ người thân lên xuống. Trước khi xe rời mỗi điểm, kiểm đủ người và các túi đã lấy ra. Những đồ cần dùng trong chuyến nên được sắp gọn, không cản lối đi hoặc đặt ở nơi dễ rơi khi xe di chuyển.',
          ),
          paragraph(
            'Giờ đón nên tính cả thời gian chuẩn bị và đưa hành lý ra điểm tập kết. Nếu nhà trong hẻm hoặc nơi xe không thể dừng lâu, trao đổi điểm gặp phù hợp từ trước; không đợi tới giờ xe đến mới quyết định. Khi tới khách sạn, nên có người làm thủ tục trong khi người còn lại cùng người thân nghỉ ở nơi thuận tiện.',
          ),
        ],
      },
      {
        heading: 'Mẫu trao đổi nhu cầu với nhà xe',
        blocks: [
          paragraph(
            '“Gia đình tôi đi … ngày …, có … người và … người lớn tuổi. Nhu cầu hỗ trợ khi lên xuống là …. Có … vali, … đồ hỗ trợ gấp với kích thước …. Đón tại …, muốn nghỉ ở … nếu phù hợp tuyến; các điểm bắt buộc là …. Nhờ kiểm tra mẫu xe, cách bố trí người/đồ và báo giá theo lịch có điểm nghỉ.”',
          ),
          paragraph([
            { text: 'Xem ' },
            { text: 'dịch vụ thuê xe', href: '/dich-vu' },
            {
              text: ' và gửi lịch để kiểm tra khả năng đáp ứng. Nếu có thay đổi về người đi hoặc đồ hỗ trợ, báo lại trước chuyến để nhà xe xác nhận phương án, không tự coi xe đã đặt chắc chắn phù hợp với nhu cầu mới.',
            },
          ]),
        ],
      },
    ],
    faq: [
      {
        question: 'Xe càng lớn thì người lớn tuổi lên xuống càng dễ phải không?',
        answer:
          'Không thể kết luận chỉ từ số chỗ. Cần kiểm tra cửa, bậc lên xuống, vị trí ghế và nhu cầu thực tế của người đi trên mẫu xe dự kiến.',
      },
      {
        question: 'Có thể mang xe lăn gấp trên xe du lịch không?',
        answer:
          'Cần gửi kích thước khi gấp và tổng hành lý để nhà xe kiểm tra khoang chứa. Nếu cần thiết bị cố định hoặc phương tiện hỗ trợ chuyên dụng, phải hỏi khả năng đáp ứng riêng.',
      },
    ],
  },
];
