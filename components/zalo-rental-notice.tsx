import { contact } from '@/lib/contact';
export function ZaloRentalNotice() {
  return (
    <aside className="zalo-rental-notice">
      <div>
        <strong>Thuê từ 2 ngày trở lên hoặc thuê xe cưới?</strong>
        <p>Liên hệ Zalo ngay để được tư vấn xe và báo giá theo lịch trình riêng.</p>
      </div>
      <a className="button" href={contact.zalo} target="_blank" rel="noopener noreferrer">
        Liên hệ Zalo ngay
      </a>
    </aside>
  );
}
