import type { Article } from '../lib/content/articles';

/** Mẫu để sao chép; file này KHÔNG được xuất bản hoặc đưa vào sitemap. */
export const articleExample: Article = {
  slug: 'mau-bai-viet-chua-xuat-ban',
  title: 'Mẫu bài viết: chuẩn bị thông tin thuê xe',
  description:
    'Mẫu kỹ thuật minh họa cách thêm nội dung, danh sách, bảng, ảnh và câu hỏi thường gặp.',
  category: 'Kinh nghiệm thuê xe',
  image: '/images/sedan.jpg',
  imageAlt: 'Xe sedan minh họa',
  date: '2026-10-30',
  sections: [
    {
      heading: 'Thông tin cần chuẩn bị',
      blocks: [
        {
          type: 'paragraph',
          content: [
            { text: 'Tham khảo ' },
            { text: 'bảng giá thuê xe', href: '/bang-gia' },
            { text: ' và gửi lịch trình để được tư vấn.' },
          ],
        },
        {
          type: 'list',
          items: ['Ngày đi và ngày về', 'Điểm đón và điểm trả', 'Số khách và hành lý'],
        },
        {
          type: 'list',
          ordered: true,
          items: ['Gửi lịch trình', 'Kiểm tra báo giá', 'Xác nhận đặt xe'],
        },
        {
          type: 'table',
          caption: 'Mẫu thông tin hỏi giá',
          columns: ['Thông tin', 'Nội dung cần gửi'],
          rows: [
            ['Điểm đón', 'Địa chỉ cụ thể'],
            ['Hành lý', 'Số vali và đồ cồng kềnh'],
          ],
        },
        {
          type: 'image',
          src: '/images/sedan.jpg',
          alt: 'Xe sedan minh họa cho bài viết',
          width: 1200,
          height: 800,
          caption: 'Thay ảnh và kích thước bằng ảnh thực tế trước khi xuất bản.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Tôi có thể xem bảng giá ở đâu?',
      answer: [
        { text: 'Bạn có thể xem ' },
        { text: 'bảng giá tham khảo', href: '/bang-gia' },
        { text: ' và xác nhận lại theo lịch trình thực tế.' },
      ],
    },
  ],
};
