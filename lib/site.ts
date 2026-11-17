import { contact } from './contact';
import { resolveSiteConfig } from './site-config';
const configuredSite = resolveSiteConfig({
  SITE_URL: process.env.SITE_URL,
  SITE_INDEXABLE: process.env.SITE_INDEXABLE,
});

export const site = {
  name: 'Thuê Xe Hành Trình Phương Nam',
  ...contact,
  company: {
    name: 'Công ty TNHH Dịch vụ Vận chuyển Hiệp Phát',
    taxCode: '0318868479',
    address: '448/1 Phạm Văn Chiêu, Phường Thông Tây Hội, Thành phố Hồ Chí Minh, Việt Nam',
    postalAddress: {
      '@type': 'PostalAddress',
      streetAddress: '448/1 Phạm Văn Chiêu, Phường Thông Tây Hội',
      addressLocality: 'Thành phố Hồ Chí Minh',
      addressCountry: 'VN',
    },
  },
  origin: configuredSite.origin,
  indexable: configuredSite.indexable,
  description: `Thuê xe du lịch 4–45 chỗ, Toyota, Mercedes-Benz và xe cưới. Tư vấn dòng xe và báo giá theo lịch trình qua Zalo ${contact.phone}.`,
};

export const absoluteUrl = (path: string) => new URL(path, `${site.origin}/`).href;
