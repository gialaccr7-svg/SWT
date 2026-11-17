import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const data = JSON.parse(
  await readFile(new URL('../lib/content/route-prices.json', import.meta.url), 'utf8'),
);
assert.equal(data.routes.length, 166);
assert.equal(data.issues.length, 0);
assert.equal(new Set(data.routes.map((r) => r.id)).size, data.routes.length);
let numeric = 0,
  contact = 0;
for (const row of data.routes) {
  assert.equal(row.surcharge, row.region === 'Hồ Chí Minh' ? 0 : 100000);
  for (const seats of [4, 7, 16, 29, 45]) {
    const raw = row.rawPrices[seats];
    const actual = row.prices[seats];
    if (/^(hotline|liên hệ)$/i.test(raw)) {
      assert.equal(actual, null);
      contact++;
      continue;
    }
    const overrides = { 'Tân Châu Đồng Pan:7': 2000000, 'Đà Nẵng:4': 12000000, 'Huế:4': 14000000 };
    let original = overrides[`${row.destination}:${seats}`] ?? Number(raw.replace(/[,.]/g, ''));
    if (original % 10 === 1) original -= 1;
    assert.equal(actual, original + row.surcharge, `${row.destination}, ${seats} seats`);
    assert(Number.isInteger(actual) && actual > 0 && actual % 10 === 0);
    numeric++;
  }
}
assert.equal(data.routes.find((r) => r.destination === 'TP Cần Thơ').prices['4'], 2300000);
assert.equal(data.routes.find((r) => r.destination === 'Củ Chi').prices['16'], 1400000);
assert.equal(data.routes.find((r) => r.destination === 'Cần Giờ').prices['16'], 1500000);
assert.equal(data.routes.find((r) => r.destination === 'Sân Bay').prices['4'], 500000);
console.log(
  `PASS: all ${numeric} prices and ${contact} contact cells; HCMC exemptions, corrected values and round units.`,
);
