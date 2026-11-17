export const metadata = { title: 'Trang không tồn tại', robots: { index: false, follow: true } };
export default function NotFound() {
  return (
    <main id="main" className="section container">
      <p className="eyebrow">404</p>
      <h1 style={{ fontSize: 36, fontWeight: 700 }}>Trang này không còn ở đây.</h1>
      <p style={{ margin: '20px 0' }}>Bạn có thể quay về trang chủ hoặc khám phá danh mục xe.</p>
      <a className="button" href="/doi-xe">
        Xem đội xe
      </a>
    </main>
  );
}
