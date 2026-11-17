import { jsonLd } from '@/lib/seo';

/** Server-only markup; schema adds no browser JavaScript or visible UI. */
export function StructuredData({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}
