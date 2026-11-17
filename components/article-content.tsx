import type { ArticleBlock, InlineContent } from '@/lib/content/articles';
import { ResponsiveImage } from '@/components/responsive-image';

export function ArticleInline({ content }: { content: InlineContent }) {
  if (typeof content === 'string') return content;
  return content.map((part, index) =>
    part.href ? (
      <a className="text-link" href={part.href} key={index}>
        {part.text}
      </a>
    ) : (
      part.text
    ),
  );
}

export function ArticleContent({ blocks }: { blocks: ArticleBlock[] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index}>
            <ArticleInline content={block.content} />
          </p>
        );
      case 'list': {
        const Tag = block.ordered ? 'ol' : 'ul';
        return (
          <Tag key={index}>
            {block.items.map((item, i) => (
              <li key={i}>
                <ArticleInline content={item} />
              </li>
            ))}
          </Tag>
        );
      }
      case 'table':
        return (
          <div
            className="article-table-scroll"
            role="region"
            aria-label={block.caption}
            tabIndex={0}
            key={index}
          >
            <table className="article-table">
              <caption>{block.caption}</caption>
              <thead>
                <tr>
                  {block.columns.map((column, i) => (
                    <th scope="col" key={i}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>
                        <ArticleInline content={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'image':
        return (
          <figure className="article-figure" key={index}>
            <ResponsiveImage
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              sizes="(max-width: 760px) calc(100vw - 36px), 780px"
              loading="lazy"
              decoding="async"
            />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );
    }
  });
}
