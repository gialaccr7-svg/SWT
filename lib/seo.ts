import type { Metadata } from 'next';
import { site, absoluteUrl } from './site';
import imageManifest from './image-manifest.json';

type SeoOptions = { image?: string; article?: { published: string; modified?: string } };

/** All indexable pages use this factory, including the homepage. */
export function seo(
  title: string,
  description: string,
  path: string,
  options: SeoOptions = {},
): Metadata {
  const imagePath = options.image ?? '/images/hero.jpg';
  const image = absoluteUrl(imagePath);
  const dimensions = (imageManifest as Record<string, { width: number; height: number }>)[
    imagePath
  ];
  return {
    title,
    description,
    robots: { index: site.indexable, follow: true, 'max-image-preview': 'large' },
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      type: options.article ? 'article' : 'website',
      locale: 'vi_VN',
      siteName: site.name,
      images: [
        {
          url: image,
          alt: title,
          ...(dimensions ? { width: dimensions.width, height: dimensions.height } : {}),
        },
      ],
      ...(options.article
        ? {
            publishedTime: options.article.published,
            modifiedTime: options.article.modified ?? options.article.published,
          }
        : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
/** Escape '<' so stored editorial strings can never terminate the script element. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
