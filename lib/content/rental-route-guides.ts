import type { Article } from './articles';

export type RentalRouteGuide = {
  description: string;
  intro: string;
  vehicleAdvice: string;
  updatedAt: string;
  sections: Article['sections'];
  faq: NonNullable<Article['faq']>;
};

export const rentalRouteGuides: Partial<Record<string, RentalRouteGuide>> = {
  '/thue-xe/16-cho/di-vung-tau': {
    description:
      'Thuê xe 16 chỗ đi Vũng Tàu từ TP.HCM: giá tham khảo, cách tập kết đoàn, hành lý và lịch xe trong ngày hoặc qua đêm. Hỏi giá theo lịch thực tế.',
    intro:
      'Thuê xe 16 chỗ có tài xế đi Vũng Tàu phù hợp để cân nhắc cho đoàn gia đình, nhóm bạn hoặc công ty nhỏ. Bắt đầu từ số khách thực đi, tổng hành lý và danh sách điểm đón tại TP.HCM, sau đó chọn phạm vi dùng xe tại bãi biển, nhà hàng và nơi lưu trú.',
    vehicleAdvice:
      'Tham khảo Ford Transit trong danh mục bên dưới và xác nhận xe sẵn có theo ngày đi. Ví dụ minh họa: đoàn 12 khách có vali riêng cần kiểm tra khoang chứa và cách xếp đồ, không chỉ đếm ghế. Gửi thêm thùng đồ ăn, xe đẩy hoặc dụng cụ hoạt động biển nếu có; hỏi phương án xe lớn hơn khi không đủ chỗ cho người và đồ.',
    updatedAt: '2026-11-14',
    sections: [
      {
        heading: 'Chọn xe đi Vũng Tàu trong ngày hay 2 ngày 1 đêm',
        blocks: [
          {
            type: 'table',
            caption: 'Phạm vi thuê xe 16 chỗ đi Vũng Tàu',
            columns: ['Chuyến', 'Lịch cần gửi', 'Điều cần xác nhận'],
            rows: [
              [
                'Một chiều',
                'Giờ đón tại TP.HCM, điểm trả và số điểm đón.',
                'Chuyến kết thúc sau lượt đưa; giá riêng theo lịch.',
              ],
              [
                'Đi về trong ngày',
                'Điểm đón, bãi biển, nhà hàng, điểm ghé và giờ khởi hành về.',
                'Các lượt di chuyển tại Vũng Tàu, xe chờ và khung giờ phục vụ.',
              ],
              [
                '2 ngày 1 đêm',
                'Khách sạn, lịch từng ngày và các lượt buổi tối nếu có.',
                'Xe ở lại hay đưa đón hai lượt; nơi đỗ và ăn nghỉ tài xế.',
              ],
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Giá phía trên là tham khảo theo thời lượng trong bảng; chuyến một chiều hoặc qua đêm cần xác nhận riêng. Xem ',
              },
              {
                text: 'so sánh xe ở lại và đưa đón hai lượt',
                href: '/kinh-nghiem/di-vung-tau-xe-o-lai-hay-dua-don-hai-luot',
              },
              { text: ' trước khi chọn phương án phục vụ.' },
            ],
          },
        ],
      },
      {
        heading: 'Điểm tập kết và xe chờ cho đoàn',
        paragraphs: [
          'Chọn nơi tập trung có thể dừng đón, gửi ghim và chỉ định một người kiểm đếm khách. Nếu đón nhiều địa chỉ, gửi đầy đủ để nhà xe kiểm tra thứ tự và giờ có mặt từng nơi. Không mặc định xe vào được hẻm hoặc dừng lâu trước mọi cổng.',
          'Tại bãi biển và nhà hàng, hẹn vị trí đón lại thay vì chỉ nói tên điểm đến. Người phụ trách đoàn báo khi mọi người đã tập trung; thay đổi điểm dừng hoặc giờ về cần thông qua đầu mối đã thống nhất để xác nhận phương án và chi phí nếu có.',
        ],
      },
      {
        heading: 'Khung lịch Vũng Tàu cho đoàn trong ngày',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Buổi sáng: tập kết tại TP.HCM, kiểm đếm người và hành lý rồi khởi hành theo giờ đã chốt.',
              'Đến Vũng Tàu: xuống tại điểm hẹn gần bãi biển; xác nhận nơi xe chờ và giờ di chuyển tiếp.',
              'Buổi trưa: xe đưa đến nhà hàng nếu chặng này có trong lịch, hẹn lại vị trí lên xe.',
              'Buổi chiều: ghé điểm đã thống nhất hoặc tập trung về; kiểm đủ khách trước khi rời điểm đón.',
            ],
          },
          {
            type: 'paragraph',
            content:
              'Đây là khung minh họa để hỏi giá, không phải lịch tour hay thời gian chạy xe cố định. Nếu thêm Long Hải hoặc Hồ Tràm, ghi địa chỉ và thứ tự chặng để báo giá cả chuyến.',
          },
        ],
      },
      {
        heading: 'Gửi lịch và kiểm tra tổng giá trước khi đặt',
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Dùng ' },
              { text: 'mẫu lịch có thể điền và sao chép', href: '#hoi-gia-tuyen' },
              {
                text: ' bên dưới để gửi chung danh sách điểm đón, số khách, hành lý và giờ cần xe chờ. Giữ lại bản lịch cuối cùng cùng báo giá để đối chiếu khi xác nhận chuyến.',
              },
            ],
          },
          {
            type: 'paragraph',
            content: [
              {
                text: 'Hỏi rõ nhiên liệu, cầu đường, bãi đỗ, thuế, giờ chờ và ăn nghỉ tài xế nếu qua đêm theo ',
              },
              {
                text: 'bảng kiểm chi phí thuê xe',
                href: '/kinh-nghiem/thue-xe-co-tai-xe-can-kiem-tra-nhung-khoan-phi-nao',
              },
              { text: '. Các khoản này không mặc định thu thêm. Xem ' },
              { text: 'điều kiện dịch vụ', href: '/chinh-sach' },
              { text: ' và yêu cầu xác nhận giữ lịch trước khi chuyển cọc.' },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Xe 16 chỗ có chở đủ khách và vali cho chuyến qua đêm không?',
        answer:
          'Phải kiểm tra cấu hình xe và lượng đồ. Gửi số người, vali theo cỡ và các kiện chung; nếu không phù hợp, hỏi phương án xe lớn hơn.',
      },
      {
        question: 'Có được đón đoàn ở nhiều địa chỉ tại TP.HCM không?',
        answer:
          'Gửi tất cả địa chỉ để kiểm tra khả năng phục vụ, thứ tự đón, thời gian và báo giá. Không mặc định thêm điểm đón được giữ nguyên giá.',
      },
      {
        question: 'Giá một ngày có áp dụng cho xe ở lại hai ngày không?',
        answer:
          'Không tự suy ra từ giá một ngày. Chuyến hai ngày cần báo theo lịch, các lượt dùng xe, thời gian chờ và phương án ăn nghỉ tài xế.',
      },
    ],
  },
  '/thue-xe/7-cho/di-can-tho': {
    description:
      'Thuê xe 7 chỗ đi Cần Thơ từ TP.HCM: giá tham khảo, xe gia đình, hành lý và lịch một chiều, khứ hồi hoặc qua đêm. Tư vấn theo chuyến qua Zalo.',
    intro:
      'Xe 7 chỗ có tài xế là lựa chọn để cân nhắc cho gia đình hoặc nhóm nhỏ đi Cần Thơ từ TP.HCM. Gửi số người lớn, trẻ em, vali và xe đẩy cùng địa chỉ đến; lịch về trong ngày khác với chuyến ngủ lại và ra bến thuyền sáng hôm sau.',
    vehicleAdvice:
      'Danh mục có Innova, Fortuner và Kia Carnival để tham khảo. Dòng xe và giá từng mẫu cần xác nhận theo ngày đi. Ví dụ minh họa: năm khách mang bốn vali và xe đẩy phải kiểm tra cách xếp đồ khi đủ ghế; tên nhóm 7 chỗ không tự bảo đảm mọi lượng hành lý đều vừa. Với trẻ nhỏ, trao đổi riêng nhu cầu ghế trẻ em.',
    updatedAt: '2026-11-14',
    sections: [
      {
        heading: 'Chọn phạm vi chuyến TP.HCM đi Cần Thơ',
        blocks: [
          {
            type: 'table',
            caption: 'Ba cách lên lịch xe 7 chỗ đi Cần Thơ',
            columns: ['Phương án', 'Phạm vi cần mô tả', 'Cách hỏi giá'],
            rows: [
              [
                'Một chiều',
                'Đưa đến khách sạn, nhà riêng hoặc điểm hẹn cụ thể.',
                'Gửi địa chỉ, ngày giờ và các điểm đón; báo riêng lượt đưa.',
              ],
              [
                'Khứ hồi trong ngày',
                'Lượt đi, các chặng tại Cần Thơ và lượt về TP.HCM.',
                'Chốt xe chờ, các điểm ghé và giờ khởi hành về.',
              ],
              [
                '2 ngày 1 đêm',
                'Đưa đến, dùng xe khi lưu trú, đi bến thuyền nếu có rồi về.',
                'Phân biệt xe ở lại với đưa đón hai lượt; báo toàn bộ lịch.',
              ],
            ],
          },
          {
            type: 'paragraph',
            content:
              'Bảng phía trên ghi giá tham khảo theo thời lượng một ngày. Giá một chiều và qua đêm cần được xác nhận riêng; giá theo nhóm số chỗ không mặc định là giá của Innova, Fortuner hay Carnival.',
          },
        ],
      },
      {
        heading: 'Đi chợ nổi: hẹn bến trước, hẹn giờ xe sau',
        paragraphs: [
          'Nếu có chuyến thuyền, hỏi đơn vị thuyền giờ có mặt và ghim bến lên, bến trả. Gửi các thông tin này để hẹn xe theo nơi xuất phát thực tế, tại TP.HCM hoặc khách sạn ở Cần Thơ. Điểm xe dừng có thể khác cổng bến, vì vậy cần chừa phần thời gian tập trung và đi bộ.',
          'Tách rõ tiền xe với tiền thuyền. Khi ngủ lại, hỏi xe có đưa từ khách sạn ra bến và đón sau chuyến thuyền không; hai lượt này cần có trong lịch phục vụ. Làm rõ hành lý để tại khách sạn hay mang lên xe sau khi trả phòng.',
        ],
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Xem ' },
              {
                text: 'cách hẹn xe và thuyền đi Cái Răng',
                href: '/kinh-nghiem/di-cho-noi-cai-rang-tu-tp-hcm',
              },
              { text: ' và ' },
              {
                text: 'lịch Cần Thơ 2 ngày 1 đêm',
                href: '/kinh-nghiem/di-can-tho-2-ngay-1-dem-tu-tphcm-bang-xe-rieng',
              },
              { text: ' để chọn phương án phù hợp cả nhà.' },
            ],
          },
        ],
      },
      {
        heading: 'Thông tin đón trả giúp báo giá sát chuyến',
        blocks: [
          {
            type: 'list',
            items: [
              'Địa chỉ đón tại TP.HCM và nơi xe có thể dừng, số điểm đón bổ sung nếu có.',
              'Địa chỉ trả tại Cần Thơ, không chỉ ghi chung tên thành phố; gửi khách sạn hoặc ghim điểm đến.',
              'Số khách và hành lý; nhu cầu nghỉ hoặc hỗ trợ lên xuống xe khi đi cùng trẻ nhỏ, người lớn tuổi.',
              'Ngày giờ đi về, các chặng tham quan và khoảng thời gian cần xe chờ.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Nếu người và hành lý không phù hợp xe dự kiến, so sánh thêm ' },
              { text: 'xe 16 chỗ đi Cần Thơ', href: '/thue-xe/16-cho/di-can-tho' },
              { text: ' thay vì phải giảm chỗ ngồi để xếp đồ.' },
            ],
          },
        ],
      },
      {
        heading: 'Đối chiếu báo giá xe gia đình đi Cần Thơ',
        paragraphs: [
          'Khi nhận báo giá, kiểm tra xe dự kiến có đủ chỗ cho người và hành lý, địa chỉ khách sạn đã đúng và các lượt đưa đón riêng tại Cần Thơ đã được liệt kê. Phương án xe ở lại và đưa đón hai lượt cần được so sánh trên cùng nhu cầu đi lại của gia đình.',
          'Đối chiếu nhiên liệu, cầu đường, bãi đỗ, thuế, thời gian chờ và ăn nghỉ tài xế khi qua đêm. Một khoản có thể đã nằm trong giá; chỉ cộng thêm khi báo giá xác nhận tính riêng. Không nhân giá một ngày để ước tính toàn chuyến nhiều ngày.',
        ],
      },
    ],
    faq: [
      {
        question: 'Giá xe 7 chỗ đi Cần Thơ trên trang đã gồm thuyền chưa?',
        answer:
          'Không mặc định gồm thuyền. Phải xác nhận dịch vụ đường bộ và thuyền riêng, cùng giờ hẹn và điểm đón tại bến.',
      },
      {
        question: 'Có thể chọn xe Carnival theo giá nhóm 7 chỗ không?',
        answer:
          'Giá nhóm không xác nhận giá của một dòng xe cụ thể. Gửi ngày đi và yêu cầu Carnival để nhận xác nhận xe sẵn có, cấu hình và báo giá.',
      },
      {
        question: 'Đi hai ngày có bắt buộc để xe ở lại không?',
        answer:
          'Có thể hỏi phương án xe ở lại hoặc đưa đi và đón về. Nếu chọn hai lượt, cần tính riêng việc đi lại tại Cần Thơ, bao gồm lượt ra bến thuyền nếu có.',
      },
    ],
  },
  '/thue-xe/16-cho/di-can-tho': {
    description:
      'Thuê xe 16 chỗ đi Cần Thơ từ TP.HCM: giá tham khảo, hành lý đoàn, chia điểm đón, hẹn bến thuyền và lịch 2 ngày 1 đêm. Hỏi giá theo lịch thực tế.',
    intro:
      'Khi thuê xe 16 chỗ đi Cần Thơ, nên chốt danh sách khách, tổng hành lý và một đầu mối điều phối trước. Đoàn công ty, nhóm gia đình hoặc bạn bè cần mô tả cả lượt đưa đón tại TP.HCM lẫn các chặng dùng xe ở Cần Thơ để nhận báo giá đúng phạm vi.',
    vehicleAdvice:
      'Ford Transit là dòng xe 16 chỗ trong danh mục để tham khảo; xe và cấu hình phục vụ được xác nhận theo ngày. Với đoàn có vali riêng, thùng quà hoặc thiết bị chung, gửi tổng số kiện theo kích thước. Nếu khoang chứa không đáp ứng khi đủ ghế cho khách, cần hỏi xe lớn hơn trước khi đặt.',
    updatedAt: '2026-11-14',
    sections: [
      {
        heading: 'Phạm vi giá xe 16 chỗ đi Cần Thơ',
        blocks: [
          {
            type: 'table',
            caption: 'Thông tin báo giá cho đoàn đi Cần Thơ',
            columns: ['Loại chuyến', 'Cần thống nhất', 'Lưu ý giá'],
            rows: [
              [
                'Một chiều',
                'Điểm đón, điểm trả, thứ tự đón và giờ có mặt.',
                'Báo theo lượt đưa; không chia đôi giá một ngày.',
              ],
              [
                'Đi và về trong ngày',
                'Các điểm tại Cần Thơ, thời gian chờ, giờ khởi hành về.',
                'Đối chiếu phạm vi với mức tham khảo trong bảng.',
              ],
              [
                '2 ngày 1 đêm',
                'Nơi lưu trú, lượt ra bến, lịch từng ngày và ăn nghỉ tài xế.',
                'Nhận báo giá riêng cho cả lịch, không nhân giá một ngày.',
              ],
            ],
          },
          {
            type: 'paragraph',
            content:
              'Nhiên liệu, cầu đường, bãi đỗ, thuế, giờ chờ và các khoản ngoài lịch cần được ghi rõ đã gồm hay tính riêng. Giá theo nhóm số chỗ chưa xác nhận thay cho báo giá của chiếc xe và chuyến cụ thể.',
          },
        ],
      },
      {
        heading: 'Tập kết đoàn và đón nhiều điểm ở TP.HCM',
        paragraphs: [
          'Ưu tiên một điểm tập trung thuận tiện nếu đoàn có thể tự sắp xếp. Với nhiều điểm đón, gửi toàn bộ ghim, số khách từng điểm và người phụ trách để nhà xe kiểm tra đường vào và thứ tự. Giờ tập trung của khách cần thống nhất với giờ xe dự kiến có mặt, tránh hẹn mọi điểm cùng một giờ.',
          'Ví dụ minh họa: đoàn 12 khách chia hai nhóm đón, mỗi nhóm có người báo đã đủ khách và đồ. Một đầu mối chung cập nhật thay đổi cho nhà xe; khi có khách đổi điểm đón, sửa cả số lượng tại điểm cũ và điểm mới.',
        ],
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Dùng ' },
              {
                text: 'checklist điều phối đoàn đi Cần Thơ',
                href: '/kinh-nghiem/di-can-tho-theo-doan-checklist-dat-xe-diem-don-ben-thuyen',
              },
              { text: ' để tổng hợp người, hành lý và các mốc cần xác nhận.' },
            ],
          },
        ],
      },
      {
        heading: 'Hẹn xe với bến thuyền và khách sạn',
        blocks: [
          {
            type: 'list',
            ordered: true,
            items: [
              'Xin giờ tập trung, ghim bến lên thuyền và ghim bến trả từ đơn vị thuyền.',
              'Gửi nhà xe địa chỉ khách sạn hoặc điểm xuất phát để thống nhất giờ đón và nơi dừng xuống khách.',
              'Chốt xe có chờ và đón lại sau chuyến thuyền không, cùng đầu mối báo thay đổi giờ cập bến.',
              'Kiểm đủ khách sau khi trở lại; nếu trả phòng trước chuyến thuyền, xác nhận phương án để hành lý.',
            ],
          },
          {
            type: 'paragraph',
            content: [
              { text: 'Xe đường bộ và thuyền là hai phạm vi cần đối chiếu riêng. Xem ' },
              {
                text: 'hướng dẫn hẹn xe đi Cái Răng',
                href: '/kinh-nghiem/di-cho-noi-cai-rang-tu-tp-hcm',
              },
              { text: '. Với chuyến ngủ lại, tham khảo ' },
              {
                text: 'lịch Cần Thơ 2 ngày 1 đêm',
                href: '/kinh-nghiem/di-can-tho-2-ngay-1-dem-tu-tphcm-bang-xe-rieng',
              },
              { text: '.' },
            ],
          },
        ],
      },
      {
        heading: 'Gửi yêu cầu báo giá cho cả đoàn',
        paragraphs: [
          'Dùng mẫu lịch có thể điền và sao chép bên dưới để tổng hợp yêu cầu của cả đoàn trong một tin nhắn. Ghi rõ số khách ở từng điểm, tổng hành lý, giờ xe phục vụ và đầu mối thuyền nếu có, thay vì gửi các thay đổi rời rạc cho nhiều người.',
          'Trước khi đặt, đối chiếu bản lịch cuối, số tiền cọc nếu có, cách xác nhận giữ xe và thời điểm cung cấp thông tin tài xế. Nếu thêm điểm hoặc đổi giờ, yêu cầu cập nhật báo giá để cả hai bên có cùng nội dung.',
        ],
        blocks: [
          {
            type: 'paragraph',
            content: [
              { text: 'Đọc ' },
              {
                text: 'các bước xác nhận trước khi đặt cọc',
                href: '/kinh-nghiem/dat-coc-thue-xe-can-xac-nhan-gi',
              },
              { text: ' và ' },
              { text: 'điều kiện dịch vụ', href: '/chinh-sach' },
              { text: ' trước khi chuyển tiền.' },
            ],
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Xe 16 chỗ có thể đón sát bến thuyền không?',
        answer:
          'Cần kiểm tra bến cụ thể, đường vào và nơi dừng đón trả. Xin ghim của đơn vị thuyền, gửi nhà xe và chốt điểm tập kết phù hợp; không mặc định xe vào sát mọi bến.',
      },
      {
        question: 'Đi Cần Thơ hai ngày có bao gồm xe đưa đi ăn tối không?',
        answer:
          'Chỉ khi các lượt và giờ phục vụ buổi tối có trong phạm vi báo giá. Gửi địa chỉ nhà hàng, giờ đi và giờ đón về để xác nhận.',
      },
      {
        question: 'Khách thay đổi điểm đón sát ngày đi thì làm gì?',
        answer:
          'Báo đầu mối điều xe sớm, gửi địa chỉ mới và số khách thay đổi. Xác nhận lại thứ tự đón, thời gian và phần chênh lệch nếu có trước khi thông báo cho đoàn.',
      },
    ],
  },
};
