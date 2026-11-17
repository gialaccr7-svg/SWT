import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
// Allow HTML crawling so Google can read preview noindex tags. API is not content.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    ...(site.indexable ? { sitemap: site.origin + '/sitemap.xml' } : {}),
  };
}
