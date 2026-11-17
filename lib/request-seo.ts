import { legacyRedirects } from './redirects.ts';
export function requestSeoPolicy(
  requestUrl: string,
  origin: string,
  indexable: boolean,
  redirects: Readonly<Record<string, string>> = legacyRedirects,
) {
  const current = new URL(requestUrl);
  const canonical = new URL(origin);
  const canonicalHost = current.host === canonical.host;
  const aliasHost = canonical.hostname.startsWith('www.')
    ? canonical.host.slice(4)
    : `www.${canonical.host}`;
  const wwwAlias = current.host === aliasHost;
  const replacement = redirects[current.pathname];
  if (
    replacement ||
    (indexable &&
      (canonicalHost || wwwAlias) &&
      (wwwAlias || current.protocol !== canonical.protocol))
  ) {
    const target = new URL(origin);
    target.pathname = replacement ?? current.pathname;
    target.search = current.search;
    return { redirect: target.href, noindex: false };
  }
  return { redirect: undefined, noindex: !indexable || !canonicalHost };
}
