'use client';
import { contact } from '@/lib/contact';
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main id="main" className="section container">
      <h1>Chưa thể tải nội dung</h1>
      <p style={{ margin: '20px 0' }}>
        Vui lòng thử lại sau giây lát hoặc liên hệ Zalo {contact.phoneDisplay}.
      </p>
      <button className="button" onClick={reset}>
        Thử lại
      </button>
    </main>
  );
}
