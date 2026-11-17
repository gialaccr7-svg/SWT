import assert from 'node:assert/strict';

/** Check actual tags, not matches inside serialized hydration/script data. */
export function assertSeoHead(html, label) {
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const head = markup.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1];
  assert(head, `${label}: missing head`);
  for (const [name, pattern] of [
    ['title', /<title\b[^>]*>[\s\S]*?<\/title>/gi],
    ['description', /<meta\b[^>]*\bname=["']description["'][^>]*>/gi],
    ['canonical', /<link\b[^>]*\brel=["']canonical["'][^>]*>/gi],
    ['robots', /<meta\b[^>]*\bname=["']robots["'][^>]*>/gi],
  ]) {
    assert.equal([...head.matchAll(pattern)].length, 1, `${label}: exactly one ${name} in head`);
    assert.equal(
      [...markup.matchAll(pattern)].length,
      1,
      `${label}: duplicate/outside-head ${name}`,
    );
  }
  return head;
}
