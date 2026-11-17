import { articlePath } from '@/lib/paths';
import { ArticleContent, ArticleInline } from '@/components/article-content';
import { notFound } from 'next/navigation';
import { StructuredData } from '@/components/structured-data';
import { ResponsiveImage } from '@/components/responsive-image';
import { breadcrumbSchema, seo } from '@/lib/seo';
import { getArticle, listArticles } from '@/lib/services/article-service';
import { PageBanner } from '@/components/page-banner';
import { site, absoluteUrl } from '@/lib/site';
import { articleSectionId, relatedArticles } from '@/lib/content/article-navigation';

type Props = { params: Promise<{ slug: string }> };
const displayDate = (date: string) => date.split('-').reverse().join('/');

export function generateStaticParams() {
  return listArticles().map((article) => ({ slug: article.slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return seo(article.seoTitle ?? article.title, article.description, articlePath(slug), {
    image: article.image,
    article: { published: article.date, modified: article.updatedAt },
  });
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const url = absoluteUrl(articlePath(slug));
  const related = relatedArticles(article, listArticles());
  return (
    <main id="main">
      <StructuredData
        data={breadcrumbSchema([
          { name: 'Trang chủ', path: '/' },
          { name: 'Kinh nghiệm', path: '/kinh-nghiem' },
          { name: article.title, path: articlePath(slug) },
        ])}
      />
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `${url}#article`,
          headline: article.title,
          description: article.description,
          image: [absoluteUrl(article.image)],
          datePublished: article.date,
          dateModified: article.updatedAt ?? article.date,
          inLanguage: 'vi-VN',
          author: {
            '@type': 'Organization',
            '@id': `${site.origin}/#organization`,
            name: site.name,
            url: absoluteUrl('/gioi-thieu'),
          },
          publisher: {
            '@type': 'Organization',
            '@id': `${site.origin}/#organization`,
            name: site.name,
            url: site.origin,
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
          url,
        }}
      />
      <PageBanner
        title={article.title}
        description={article.description}
        parent={{ title: 'Kinh nghiệm', href: '/kinh-nghiem' }}
      />
      <div className="container">
        <article className="article-layout">
          <p className="eyebrow">
            {article.category} · <time dateTime={article.date}>{displayDate(article.date)}</time>
          </p>
          <p>
            Biên soạn bởi{' '}
            <a className="text-link" href="/gioi-thieu">
              {site.name}
            </a>
            {article.updatedAt && (
              <>
                {' '}
                · Cập nhật{' '}
                <time dateTime={article.updatedAt}>{displayDate(article.updatedAt)}</time>
              </>
            )}
          </p>
          <figure className="article-figure">
            <ResponsiveImage
              src={article.image}
              alt={article.imageAlt}
              sizes="(max-width: 760px) calc(100vw - 36px), 780px"
              fetchPriority="high"
            />
            {article.imageCaption && <figcaption>{article.imageCaption}</figcaption>}
          </figure>
          {article.sections.length >= 3 && (
            <nav className="article-toc" aria-labelledby="article-toc-title">
              <h2 id="article-toc-title">Trong bài viết này</h2>
              <ol>
                {article.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a href={`#${articleSectionId(index)}`}>{section.heading}</a>
                  </li>
                ))}
                {!!article.faq?.length && (
                  <li>
                    <a href="#article-faq-title">Câu hỏi thường gặp</a>
                  </li>
                )}
              </ol>
            </nav>
          )}
          {article.sections.map((section, index) => (
            <section
              key={section.heading}
              id={articleSectionId(index)}
              aria-labelledby={`${articleSectionId(index)}-title`}
            >
              <h2 id={`${articleSectionId(index)}-title`}>{section.heading}</h2>
              {section.paragraphs?.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.blocks && <ArticleContent blocks={section.blocks} />}
            </section>
          ))}
          {!!article.faq?.length && (
            <section className="article-faq" aria-labelledby="article-faq-title">
              <h2 id="article-faq-title">Câu hỏi thường gặp</h2>
              {article.faq.map((item) => (
                <div key={item.question}>
                  <h3>{item.question}</h3>
                  <p>
                    <ArticleInline content={item.answer} />
                  </p>
                </div>
              ))}
            </section>
          )}
          <h2>Tìm xe cho lịch trình của bạn</h2>
          <p>
            Tham khảo{' '}
            <a className="text-link" href="/doi-xe">
              danh mục xe
            </a>{' '}
            hoặc gửi lịch trình để nhận tư vấn.
          </p>
          <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
            Trao đổi qua Zalo
          </a>
          {related.length > 0 && (
            <>
              <h2>Bài viết liên quan</h2>
              <ul>
                {related.map((related) => (
                  <li key={related.slug}>
                    <a href={articlePath(related.slug)}>{related.title}</a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </article>
      </div>
    </main>
  );
}
