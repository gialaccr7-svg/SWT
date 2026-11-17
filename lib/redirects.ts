/** Add only real retired URLs with an equivalent replacement. Keep targets direct. */
export const legacyRedirects: Readonly<Record<string, string>> = {
  '/doi-xe/hyundai-solati': '/doi-xe/ford-transit',
};
export function validateRedirects(redirects: Readonly<Record<string, string>>) {
  for (const [from, to] of Object.entries(redirects)) {
    const isPath = (value: string) => /^\/(?!\/)/.test(value) && !/[?#\\]/.test(value);
    if (!isPath(from) || !isPath(to) || from === to || redirects[to])
      throw new Error('Invalid, chained or looping redirect: ' + from);
  }
}
validateRedirects(legacyRedirects);
