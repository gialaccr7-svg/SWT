import { articlePath } from '@/lib/paths';
import { PageBanner } from '@/components/page-banner';
import { listArticles } from '@/lib/services/article-service';
import { seo } from '@/lib/seo';
export const metadata = seo(
  'Kinh nghiệm thuê xe du lịch & xe cưới',
  'Hướng dẫn chọn xe, chuẩn bị thuê xe cưới và hỏi báo giá theo lịch trình.',
  '/kinh-nghiem',
);
export default function Blog() {
  return (
    <main id="main">
      <PageBanner
        title="Chuẩn bị tốt, đi thảnh thơi"
        description="Những hướng dẫn thực tế giúp bạn chọn xe, lên lịch trình và trao đổi dịch vụ rõ ràng hơn."
      />
      <section className="section container">
        <div className="editorial-grid">
          {listArticles().map((a, i) => (
            <article className="editorial-card" key={a.slug}>
              <span className="eyebrow">
                {String(i + 1).padStart(2, '0')} · {a.category}
              </span>
              <h2>
                <a href={articlePath(a.slug)}>{a.title}</a>
              </h2>
              <p>{a.description}</p>
              <a className="text-link" href={articlePath(a.slug)}>
                Đọc bài viết
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
