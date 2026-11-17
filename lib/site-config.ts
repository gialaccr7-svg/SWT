// Provisional only. Set SITE_URL to the owner's final domain before publishing.
export const plannedOrigin = 'https://hanhtrinhphuongnam.vn';

/** Preview builds are safe by default; indexing requires explicit configuration. */
export function resolveSiteConfig(env: { SITE_URL?: string; SITE_INDEXABLE?: string }) {
  if (env.SITE_INDEXABLE !== undefined && !['true', 'false'].includes(env.SITE_INDEXABLE)) {
    throw new Error('SITE_INDEXABLE must be true or false.');
  }
  const indexable = env.SITE_INDEXABLE === 'true';
  if (indexable && !env.SITE_URL) throw new Error('SITE_URL is required when SITE_INDEXABLE=true.');
  const url = new URL(env.SITE_URL || plannedOrigin);
  if (
    !['https:', 'http:'].includes(url.protocol) ||
    url.pathname !== '/' ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(
      'SITE_URL must be an HTTP(S) origin without a path, credentials, query or fragment.',
    );
  }
  if (
    indexable &&
    (url.protocol !== 'https:' ||
      url.hostname === 'localhost' ||
      url.hostname.endsWith('.chatgpt.site') ||
      /^[\d.]+$/.test(url.hostname) ||
      url.port)
  ) {
    throw new Error('Indexable websites require a public HTTPS domain without a custom port.');
  }
  return { origin: url.origin, indexable };
}
