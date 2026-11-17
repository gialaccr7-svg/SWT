import assert from 'node:assert/strict';
import http from 'node:http';
import { assertSeoHead } from './seo-head.mjs';
const origin = process.env.CHECK_URL || 'http://127.0.0.1:5173';
const expectedOrigin =
  process.env.CHECK_CANONICAL_ORIGIN || process.env.SITE_URL || 'https://hanhtrinhphuongnam.vn';
const indexable = process.env.CHECK_INDEXABLE === 'true';
if (indexable && origin.startsWith('http:')) {
  // Use node:http: undici fetch does not reliably honor a custom Host header.
  const canonical = new URL(expectedOrigin);
  for (const host of [canonical.host, `www.${canonical.host}`]) {
    await new Promise((resolve, reject) => {
      const request = http.get(origin + '/doi-xe?seats=7', { headers: { host } }, (response) => {
        try {
          assert.equal(response.statusCode, 308, host);
          assert.equal(response.headers.location, expectedOrigin + '/doi-xe?seats=7', host);
          response.resume();
          resolve();
        } catch (error) {
          response.resume();
          reject(error);
        }
      });
      request.setTimeout(5000, () => request.destroy(new Error('Redirect check timeout')));
      request.on('error', reject);
    });
  }
}
const routes = [
  '/',
  '/doi-xe',
  '/dich-vu',
  '/xe-cuoi',
  '/kinh-nghiem',
  '/gioi-thieu',
  '/chinh-sach',
  '/bao-mat',
  '/doi-xe/toyota-camry',
  '/doi-xe/mercedes-benz-e-class',
  '/doi-xe/hyundai-universe',
  '/thue-xe/4-cho',
  '/thue-xe/45-cho',
  '/kinh-nghiem/chuan-bi-thue-xe-cuoi',
];
for (const route of routes) {
  const r = await fetch(origin + route);
  assert.equal(r.status, 200, route);
  const html = await r.text();
  const head = assertSeoHead(html, route);
  if (route === '/') {
    const icons = head.match(/<link\b[^>]*\brel="(?:shortcut )?icon"[^>]*>/g) ?? [];
    assert.equal(icons.length, 1, 'Homepage must declare one primary favicon');
    assert.match(icons[0], /\bhref="\/favicon-192x192\.png"/);
    assert.match(icons[0], /\bsizes="192x192"/);

    const icon = await fetch(origin + '/favicon-192x192.png', { redirect: 'manual' });
    assert.equal(icon.status, 200);
    assert.match(icon.headers.get('content-type') ?? '', /^image\/png\b/);
    const png = Buffer.from(await icon.arrayBuffer());
    assert.equal(png.toString('ascii', 12, 16), 'IHDR');
    assert.equal(png.readUInt32BE(16), 192);
    assert.equal(png.readUInt32BE(20), 192);
  }
  assert.match(html, /<h1[\s>]/, route);
  assert.match(html, /name="description"/, route);
  assert.match(html, /rel="canonical"/, route);
  assert.match(html, /https:\/\/zalo.me\/0899473333/, route);
  assert.match(html, /Thuê Xe Hành Trình Phương Nam/, route);
  assert.match(html, /Công ty TNHH Dịch vụ Vận chuyển Hiệp Phát/, route);
  assert(!html.includes('An Việt Travel'), route);
  assert(!html.includes('Starter Project'), route);
}
const about = await (await fetch(origin + '/gioi-thieu')).text();
const pricePage = await (await fetch(origin + '/bang-gia')).text();
assert.equal([...pricePage.matchAll(/data-price-row=/g)].length, 166);
for (const [query, expectedCount, expectedText] of [
  ['q=can+tho&seats=7', 5, '2.700.000đ'],
  ['q=Long+Xuyen&seats=29', 1, 'Liên hệ'],
  ['q=Da+Nang&seats=4', 1, '12.100.000đ'],
  ['q=not-a-destination', 0, 'Chưa có tuyến phù hợp'],
]) {
  const response = await fetch(origin + '/bang-gia?' + query);
  assert.equal(response.status, 200);
  const html = await response.text();
  assertSeoHead(html, query);
  assert.equal([...html.matchAll(/data-price-row=/g)].length, expectedCount, query);
  assert(html.includes(expectedText), query);
  assert.match(html, /name="robots" content="noindex/);
  assert.equal(
    html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1],
    expectedOrigin + '/bang-gia',
  );
}
assert.equal((await fetch(origin + '/tuyen-xe/not-a-destination')).status, 404);
const schemas = Array.from(
  about.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs),
  (m) => JSON.parse(m[1]),
);
const organization = schemas.find((s) => [s['@type']].flat().includes('Organization'));
assert.equal(organization.name, 'Thuê Xe Hành Trình Phương Nam');
assert.equal(organization.legalName, 'Công ty TNHH Dịch vụ Vận chuyển Hiệp Phát');
assert.equal(organization.taxID, '0318868479');
assert.equal(organization.address.streetAddress, '448/1 Phạm Văn Chiêu, Phường Thông Tây Hội');
assert.equal(organization.address['@type'], 'PostalAddress');
assert.equal(organization.address.addressLocality, 'Thành phố Hồ Chí Minh');
assert.equal(organization.address.addressCountry, 'VN');
assert([organization['@type']].flat().includes('LocalBusiness'));
for (const route of ['/', '/gioi-thieu']) {
  const html = await (await fetch(origin + route)).text();
  assert.match(html, /0318868479/, route);
  assert.match(
    html,
    /448\/1 Phạm Văn Chiêu, Phường Thông Tây Hội, Thành phố Hồ Chí Minh, Việt Nam/,
    route,
  );
}
const api = await fetch(origin + '/api/vehicles?seats=7&brand=Toyota');
assert.equal(api.status, 200);
const body = await api.json();
assert.equal(body.total, 2);
assert(body.data.every((v) => v.seats === 7 && v.brand === 'Toyota'));
assert.match(api.headers.get('cache-control'), /s-maxage/);
for (const query of [
  'seats=3',
  'seats=abc',
  'brand=unknown',
  'wedding=yes',
  'admin=true',
  'seats=07',
  'seats=4&seats=7',
  'seats=7&seats=4',
  'brand=Toyota&brand=Hyundai',
  'wedding=true&wedding=false',
])
  assert.equal((await fetch(origin + '/api/vehicles?' + query)).status, 400, query);
const allVehicles = await (await fetch(origin + '/api/vehicles')).json();
const weddingVehicles = await (await fetch(origin + '/api/vehicles?wedding=true')).json();
const otherVehicles = await (await fetch(origin + '/api/vehicles?wedding=false')).json();
assert.equal(allVehicles.total, 8);
assert.equal(weddingVehicles.total, 1);
assert.equal(otherVehicles.total, 7);
assert(weddingVehicles.data.every((v) => v.wedding === true));
assert(otherVehicles.data.every((v) => !v.wedding));
assert.equal(allVehicles.total, weddingVehicles.total + otherVehicles.total);
assert.equal((await fetch(origin + '/doi-xe/not-a-vehicle')).status, 404);
assert.equal((await fetch(origin + '/thue-xe/3-cho')).status, 404);
const sitemapResponse = await fetch(origin + '/sitemap.xml');
assert.equal(sitemapResponse.status, 200, 'Sitemap must respond successfully');
assert.match(sitemapResponse.headers.get('content-type') || '', /xml/);
const sitemap = await sitemapResponse.text();
assert.match(sitemap, /\/thue-xe\/45-cho/);
assert.match(sitemap, /\/kinh-nghiem\/chuan-bi-thue-xe-cuoi/);
assert.match(sitemap, /\/gioi-thieu/);
const sitemapUrls = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g), (m) => m[1]);
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, 'Duplicate sitemap URLs');
const seatRoutes = [4, 7, 16, 29, 45];
for (const [slug, name, row, amounts] of [
  [
    'vung-tau',
    'Vũng Tàu',
    'vung-tau-thanh-pho-vung-tau',
    [1700000, 1900000, 2000000, 3300000, 4500000],
  ],
  ['nha-trang', 'Nha Trang', 'khanh-hoa-nha-trang', [4000000, 4500000, 5400000, 7600000, 11500000]],
  ['can-tho', 'Cần Thơ', 'can-tho-tp-can-tho', [2300000, 2700000, 2700000, 4400000, 6900000]],
]) {
  const routePage = await (await fetch(origin + '/tuyen-xe/' + slug)).text();
  const summary = (html) =>
    html
      .replaceAll('<!-- -->', '')
      .match(/<\/h1>\s*<div[^>]*data-route-price="([^"]+)"[^>]*>(.*?)<\/div>/s);
  const general = summary(routePage);
  assert.equal(general?.[1], row, slug);
  assert(general[2].includes(`đến ${name} · 1 ngày`), slug);
  for (const [index, seats] of seatRoutes.entries()) {
    const category = `/thue-xe/${seats}-cho`;
    const path = `${category}/di-${slug}`;
    const label = `Thuê xe ${seats} chỗ đi ${name} từ TP.HCM`;
    const price = new Intl.NumberFormat('vi-VN').format(amounts[index]) + 'đ';
    assert(sitemapUrls.includes(expectedOrigin + path), path);
    const categoryHtml = await (await fetch(origin + category)).text();
    for (const source of [pricePage, general[2], categoryHtml]) {
      assert(source.includes(`href="${path}"`), `${path}: missing internal link`);
    }
    assert(general[2].includes(`Xe ${seats} chỗ: ${price}`), path);
    const html = await (await fetch(origin + path)).text();
    assert(html.includes(`<h1>${label}</h1>`) && html.includes(`<title>${label}`), path);
    const featured = summary(html);
    assert.equal(featured?.[1], row, path);
    assert(featured[2].includes(`đến ${name} · 1 ngày`), path);
    assert(featured[2].includes(`Xe ${seats} chỗ: ${price}/chuyến`), path);
    assert(featured[2].includes('href="https://zalo.me/0899473333"'), path);
  }
}
const titles = new Set();
const descriptions = new Set();
const internalLinks = new Set();
const optimizedImages = new Set();
for (const canonical of sitemapUrls) {
  const path = new URL(canonical).pathname;
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assertSeoHead(html, path);
  const logos = [...html.matchAll(/<img\b[^>]*alt="Logo Hành Trình Phương Nam"[^>]*>/g)];
  assert(logos.length >= 2, `${path}: header and footer logos are required`);
  for (const [tag] of logos)
    assert.match(tag, /src="\/images\/logo321-192\.png"/, `${path}: unapproved logo`);
  assert(!html.includes('/images/brand-mark.svg'), `${path}: former logo remains`);
  assert.equal(Array.from(html.matchAll(/<h1[\s>]/g)).length, 1, `${path}: exactly one H1`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert(title && !titles.has(title), `${path}: missing or duplicate title`);
  titles.add(title);
  if (path.startsWith('/kinh-nghiem/')) {
    const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
    const sectionIds = [...markup.matchAll(/<section\b[^>]*\bid="(article-section-\d+)"/g)].map(
      (match) => match[1],
    );
    const toc = markup.match(/<nav\b[^>]*class="article-toc"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    if (sectionIds.length >= 3) {
      assert(toc, `${path}: missing article table of contents`);
      for (const id of sectionIds)
        assert(toc.includes(`href="#${id}"`), `${path}: missing section link`);
    }
    const ids = [...markup.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${path}: duplicate IDs`);
    for (const match of markup.matchAll(/href="#([^"]+)"/g))
      assert(ids.includes(match[1]), `${path}: broken article anchor`);
    const relatedList = markup.match(/<h2>Bài viết liên quan<\/h2>\s*<ul>([\s\S]*?)<\/ul>/)?.[1];
    assert(relatedList, `${path}: missing related articles`);
    const relatedLinks = [...relatedList.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
    assert(relatedLinks.length > 0 && relatedLinks.length <= 4, `${path}: too many related links`);
    assert(!relatedLinks.includes(path), `${path}: self recommendation`);
  }
  const description = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/)?.[1];
  assert(
    description && !descriptions.has(description),
    `${path}: missing or duplicate description`,
  );
  descriptions.add(description);
  const href = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  assert(href, `${path}: missing canonical`);
  assert.equal(
    new URL(href).href,
    new URL(canonical).href,
    `${path}: canonical differs from sitemap`,
  );
  assert.equal(new URL(href).origin, expectedOrigin, `${path}: unexpected canonical domain`);
  assert.match(html, /property="og:image"/, path);
  assert.match(html, /property="og:image:width"/, path);
  assert.match(html, /property="og:image:height"/, path);
  assert.match(html, /name="twitter:card"/, path);
  assert.match(html, /<html[^>]*lang="vi"/, path);
  const robots = html.match(/<meta[^>]*name="robots"[^>]*content="([^"]+)"/)?.[1] || '';
  assert.equal(robots.includes('noindex'), !indexable, `${path}: wrong indexing state`);
  if (!indexable)
    assert.match(
      response.headers.get('x-robots-tag') || '',
      /noindex/,
      `${path}: missing preview header`,
    );
  if (process.env.CHECK_PUBLIC === 'true')
    assert(
      !/noindex/.test(response.headers.get('x-robots-tag') || ''),
      `${path}: public launch blocked by response header`,
    );
  for (const match of html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs,
  )) {
    const schema = JSON.parse(match[1]);
    if (schema['@type'] === 'Article') {
      assert(
        schema.image?.length && schema.author?.url && schema.publisher?.['@id'],
        `${path}: incomplete Article schema`,
      );
      assert.equal(new URL(schema.mainEntityOfPage['@id']).href, canonical);
      assert(
        html.includes(schema.author.url.replace(expectedOrigin, '')),
        `${path}: missing visible author link`,
      );
    }
  }
  for (const match of html.matchAll(/<a[^>]*href="([^"]+)"/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), expectedOrigin);
    if (url.origin === expectedOrigin && !url.search) internalLinks.add(url.pathname);
  }
  for (const match of html.matchAll(/\/images\/optimized\/[a-z0-9-]+\.webp/g))
    optimizedImages.add(match[0]);
  assert(
    !html.includes('fonts.googleapis.com') && !html.includes('fonts.gstatic.com'),
    `${path}: external font request remains`,
  );
  if (/^\/(doi-xe|kinh-nghiem|thue-xe)\/.+/.test(path)) assert.match(html, /BreadcrumbList/, path);
}
const fleetHtml = await (await fetch(origin + '/doi-xe?seats=7&purpose=travel')).text();
assertSeoHead(fleetHtml, 'Filtered fleet');
assert.equal(
  fleetHtml.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1],
  sitemapUrls.find((url) => new URL(url).pathname === '/doi-xe'),
);
assert.match(fleetHtml, /noindex/, 'Filtered URLs should not be indexed');
assert(!fleetHtml.includes('NaN'), 'Invalid seats must never render NaN');
for (const query of [
  'seats=abc',
  'seats=3',
  'seats=07',
  'seats=4&seats=7',
  'purpose=unknown',
  'purpose=travel&purpose=wedding',
  'seats=7&purpose=wedding',
  'brand=unknown',
  'brand=Toyota&brand=Hyundai',
  'seats=45&brand=Toyota',
]) {
  const response = await fetch(origin + '/doi-xe?' + query);
  assert.equal(response.status, 404, query);
  assert.match(await response.text(), /noindex/, query);
}
for (const path of ['/kinh-nghiem/not-an-article', '/thue-xe/07-cho', '/unknown-route']) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 404, path);
  assert.match(await response.text(), /noindex/, `${path}: missing noindex`);
}
for (const query of [
  'brand=Toyota',
  'brand=Toyota&seats=7',
  'utm_source=test',
  'unknown=value',
  'utm_source=a&utm_source=b',
]) {
  const response = await fetch(origin + '/doi-xe?' + query);
  assert.equal(response.status, 200, query);
  const html = await response.text();
  assertSeoHead(html, query);
  assert.equal(
    html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1],
    expectedOrigin + '/doi-xe',
  );
  if (query.includes('brand=')) {
    assert.match(html, /noindex/);
    assert.match(html, /<option[^>]*selected[^>]*>Toyota/);
  }
}
const robotsResponse = await fetch(origin + '/robots.txt');
assert.equal(robotsResponse.status, 200, 'robots.txt must respond successfully');
const robotsText = await robotsResponse.text();
assert.equal(
  robotsText.includes('Sitemap:'),
  indexable,
  'Robots sitemap advertisement must match indexing mode',
);
for (const url of sitemapUrls)
  assert(internalLinks.has(new URL(url).pathname), `${url}: no internal link`);
for (const path of internalLinks) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, `${path}: broken internal link`);
}
assert(optimizedImages.size > 0, 'No responsive image variants found');
for (const path of optimizedImages) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  assert.match(response.headers.get('content-type') || '', /image\/webp/, path);
  assert.match(response.headers.get('cache-control') || '', /immutable/, path);
  assert.equal(
    (response.headers.get('cache-control') || '').match(/(?:^|[,\s])max-age=/g)?.length,
    1,
    `${path}: conflicting cache directives`,
  );
  assert.match(response.headers.get('cache-control') || '', /max-age=31536000/, path);
}
for (const image of ['hero', 'sedan', 'mpv', 'suv', 'mercedes', 'van', 'bus', 'wedding']) {
  const r = await fetch(origin + `/images/${image}.jpg`);
  assert.equal(r.status, 200, image);
  assert.match(r.headers.get('content-type'), /image/);
  assert.match(r.headers.get('cache-control') || '', /max-age=86400/, image);
  assert((await r.arrayBuffer()).byteLength > 1000, image);
}
console.log(
  'PASS: SSR routes, metadata, Zalo, API validation/cache, 404, sitemap, robots and 8 images.',
);
console.log(
  `PASS: ${sitemapUrls.length} sitemap pages; unique titles, matching canonicals, social metadata, JSON-LD and filtered URLs.`,
);
