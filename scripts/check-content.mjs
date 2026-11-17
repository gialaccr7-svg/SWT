import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { vehicles } from '../lib/content/vehicles.ts';
import { articles } from '../lib/content/articles.ts';
import { relatedArticles } from '../lib/content/article-navigation.ts';
import { seatCounts, vehicleBrands } from '../lib/catalog.ts';
import { rentalCategoryGuides } from '../lib/content/rental-categories.ts';
import { validateSections, validateInline } from './article-validation.mjs';
import { destinations } from '../lib/content/destinations.ts';
import {
  seatRouteCounts,
  seatRouteDestinations,
  seatRouteMediaFor,
  seatRoutePath,
} from '../lib/content/seat-routes.ts';
import { articleExample } from '../docs/article-example.ts';

const articlePaths = new Set([
  '/',
  '/doi-xe',
  '/bang-gia',
  '/dich-vu',
  '/xe-cuoi',
  '/kinh-nghiem',
  '/gioi-thieu',
  '/chinh-sach',
  '/bao-mat',
  ...vehicles.map((item) => `/doi-xe/${item.slug}`),
  ...articles.map((item) => `/kinh-nghiem/${item.slug}`),
  ...destinations.map((item) => `/tuyen-xe/${item.slug}`),
  ...seatCounts.map((seats) => `/thue-xe/${seats}-cho`),
  ...seatRouteDestinations.flatMap((destination) =>
    seatRouteCounts.map((seats) => seatRoutePath(seats, destination.slug)),
  ),
]);

// Catch editorial mistakes before they become broken routes or invalid sitemap entries.
for (const [name, items] of [
  ['vehicles', vehicles],
  ['articles', articles],
]) {
  const slugs = new Set();
  for (const item of items) {
    assert.match(item.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${name}: invalid slug`);
    assert(!slugs.has(item.slug), `${name}: duplicate slug ${item.slug}`);
    slugs.add(item.slug);
    assert(item.description.trim(), `${item.slug}: missing description`);
  }
}
for (const vehicle of vehicles) {
  assert(seatCounts.includes(vehicle.seats), `${vehicle.slug}: unsupported seats`);
  assert(vehicleBrands.includes(vehicle.brand), `${vehicle.slug}: unsupported brand`);
  assert(vehicle.name.trim() && vehicle.imageAlt.trim() && vehicle.features.length, vehicle.slug);
  assert(
    Object.values(vehicle.rentalAdvice).every((text) => text.trim()),
    `${vehicle.slug}: missing rental advice`,
  );
  assert.match(vehicle.image, /^\/images\/[a-z0-9-]+\.(jpg|png|webp|avif)$/);
  await access(new URL(`../public${vehicle.image}`, import.meta.url));
  if (vehicle.updatedAt) {
    assert.match(vehicle.updatedAt, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(new Date(vehicle.updatedAt).toISOString().slice(0, 10), vehicle.updatedAt);
  }
}
for (const seats of seatCounts) {
  const guide = rentalCategoryGuides[seats];
  assert(guide?.description.trim() && guide.planning.trim(), `${seats}: missing category guide`);
  assert(
    guide.checklist.length && guide.checklist.every((item) => item.trim()),
    `${seats}: missing checklist`,
  );
  assert(
    seatCounts.includes(guide.alternative) && guide.alternative !== seats,
    `${seats}: invalid comparison link`,
  );
}
const seatRouteImages = new Set();
const seatRouteLayouts = new Set();
for (const destination of seatRouteDestinations) {
  for (const seats of seatRouteCounts) {
    if (seats === 4) continue; // These pages use the existing fleet photos in their vehicle cards.
    const media = seatRouteMediaFor(seats, destination.slug);
    assert(media, `${destination.slug}/${seats}: missing landing-page media`);
    assert.equal(media.images.length, 2, `${destination.slug}/${seats}: requires two images`);
    assert(!seatRouteLayouts.has(media.layout), `${media.layout}: duplicate landing-page layout`);
    seatRouteLayouts.add(media.layout);
    for (const image of media.images) {
      assert(image.alt.trim() && image.credit.trim() && image.license.trim(), image.src);
      assert.match(image.source, /^https:\/\//, `${image.src}: invalid source URL`);
      assert(!seatRouteImages.has(image.src), `${image.src}: repeated landing-page image`);
      seatRouteImages.add(image.src);
      await access(new URL(`../public${image.src}`, import.meta.url));
    }
  }
}
for (const article of articles) {
  if (article.seoTitle !== undefined)
    assert(article.seoTitle.trim(), `${article.slug}: empty SEO title`);
  assert(article.topics?.length, `${article.slug}: missing editorial topics`);
  assert.equal(
    new Set(article.topics).size,
    article.topics.length,
    `${article.slug}: repeated topics`,
  );
  for (const topic of article.topics) assert.match(topic, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  const related = relatedArticles(article, articles);
  assert(related.length > 0 && related.length <= 4, `${article.slug}: invalid related count`);
  assert.equal(new Set(related.map((item) => item.slug)).size, related.length);
  for (const item of related) {
    assert.notEqual(item.slug, article.slug, 'An article must not recommend itself');
    assert(
      item.topics.some((topic) => article.topics.includes(topic)),
      'Unrelated recommendation',
    );
  }
  assert(article.title.trim() && article.sections.length, article.slug);
  assert(article.imageAlt.trim(), `${article.slug}: missing image alt`);
  await access(new URL(`../public${article.image}`, import.meta.url));
  for (const date of [article.date, article.updatedAt].filter(Boolean)) {
    assert.match(date, /^\d{4}-\d{2}-\d{2}$/, `${article.slug}: invalid date`);
    assert.equal(
      new Date(date).toISOString().slice(0, 10),
      date,
      `${article.slug}: invalid calendar date`,
    );
  }
  if (article.updatedAt)
    assert(article.updatedAt >= article.date, `${article.slug}: update precedes publication`);
  await validateSections(article, articlePaths);
}
await validateSections(articleExample, articlePaths);
const nhaTrang = articles.find((item) => item.slug === 'di-nha-trang-nen-chon-xe-7-hay-16-cho');
assert(
  !relatedArticles(nhaTrang, articles).some((item) => item.topics.includes('xe-cuoi')),
  'Do not recommend a different specialist service through a generic topic',
);
assert.equal(
  relatedArticles(nhaTrang, articles)[0].slug,
  'di-nha-trang-3-ngay-2-dem-tu-tphcm-bang-xe-rieng',
  'Same destination should outrank general vehicle advice',
);
for (const href of [
  'javascript:alert(1)',
  '//evil.test',
  '/not-a-real-page',
  'https://example.com\\evil',
]) {
  assert.throws(() => validateInline([{ text: 'Test', href }], articlePaths));
}
const invalidTable = {
  ...articleExample,
  sections: [
    {
      heading: 'Test',
      blocks: [{ type: 'table', caption: 'Test', columns: ['A', 'B'], rows: [['Missing cell']] }],
    },
  ],
};
await assert.rejects(validateSections(invalidTable, articlePaths), /column count/);
console.log(
  `PASS: ${vehicles.length} vehicles and ${articles.length} articles; slugs, dates, categories and image files.`,
);
