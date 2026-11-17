'use client';

import { useRef, useState } from 'react';
import { contact } from '@/lib/contact';

export function RentalRequest({ template }: { template: string }) {
  const field = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState('');

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(field.current?.value ?? template);
      setMessage('Đã sao chép. Mở Zalo và dán lịch để trao đổi báo giá.');
    } catch {
      field.current?.focus();
      field.current?.select();
      setMessage('Hãy sao chép phần đã chọn rồi dán vào Zalo.');
    }
  }

  return (
    <div className="rental-request">
      <label htmlFor="rental-request">Điền lịch của bạn vào mẫu hỏi giá</label>
      <p id="rental-request-help">
        Thay phần […] bằng thông tin chuyến đi, sao chép rồi gửi qua Zalo. Nội dung trong ô chưa
        được gửi cho nhà xe.
      </p>
      <textarea
        ref={field}
        id="rental-request"
        aria-describedby="rental-request-help"
        defaultValue={template}
        rows={11}
        onChange={() => setMessage('')}
      />
      <div className="rental-request-actions">
        <button type="button" className="button" onClick={copyRequest}>
          Sao chép lịch hỏi giá
        </button>
        <a className="text-link" href={contact.zalo} target="_blank" rel="noopener noreferrer">
          Mở Zalo {contact.phoneDisplay}
        </a>
      </div>
      <p role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
