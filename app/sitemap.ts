import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { publicPages } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages().map(({ path, lastModified }) => ({
    url: absoluteUrl(path),
    ...(lastModified ? { lastModified } : {}),
  }));
}
