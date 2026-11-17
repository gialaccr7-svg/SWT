import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';

export function validateInline(content, paths) {
  if (typeof content === 'string') return assert(content.trim(), 'Empty text');
  assert(Array.isArray(content) && content.length, 'Missing inline content');
  for (const part of content) {
    assert(typeof part.text === 'string' && part.text.trim(), 'Empty link/text');
    if (part.href !== undefined) {
      assert(typeof part.href === 'string' && part.href === part.href.trim(), 'Invalid URL');
      assert(!/[\s\\]/.test(part.href), 'Invalid URL characters');
      if (part.href.startsWith('/') && !part.href.startsWith('//')) {
        const url = new URL(part.href, 'https://hanhtrinhphuongnam.vn');
        assert(paths.has(url.pathname), `Unknown internal link: ${part.href}`);
      } else {
        const url = new URL(part.href);
        assert(
          url.protocol === 'https:' && !url.username && !url.password,
          'Only HTTPS external links allowed',
        );
      }
    }
  }
}

export async function validateImage(src, alt) {
  assert.match(src, /^\/images\/[a-z0-9-]+\.(jpg|jpeg|png|webp|avif)$/);
  assert(typeof alt === 'string' && alt.trim(), 'Missing image alt');
  await access(new URL(`../public${src}`, import.meta.url));
}

export async function validateSections(article, paths) {
  await validateImage(article.image, article.imageAlt);
  for (const section of article.sections) {
    assert(section.heading.trim(), 'Missing section heading');
    assert(section.paragraphs?.length || section.blocks?.length, 'Empty section');
    for (const text of section.paragraphs ?? []) validateInline(text, paths);
    for (const block of section.blocks ?? []) {
      switch (block.type) {
        case 'paragraph':
          validateInline(block.content, paths);
          break;
        case 'list':
          assert(block.items.length, 'Empty list');
          for (const item of block.items) validateInline(item, paths);
          break;
        case 'table':
          assert(block.caption.trim() && block.columns.length && block.rows.length, 'Empty table');
          assert(
            block.columns.every((column) => column.trim()),
            'Empty column title',
          );
          for (const row of block.rows) {
            assert.equal(row.length, block.columns.length, 'Table column count mismatch');
            for (const cell of row) validateInline(cell, paths);
          }
          break;
        case 'image':
          await validateImage(block.src, block.alt);
          assert(
            Number.isInteger(block.width) &&
              block.width > 0 &&
              Number.isInteger(block.height) &&
              block.height > 0,
            'Invalid image dimensions',
          );
          break;
        default:
          assert.fail(`Unknown article block: ${block.type}`);
      }
    }
  }
  const questions = new Set();
  for (const item of article.faq ?? []) {
    assert(
      item.question.trim() && !questions.has(item.question.trim()),
      'Empty/duplicate FAQ question',
    );
    questions.add(item.question.trim());
    validateInline(item.answer, paths);
  }
}
