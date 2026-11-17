import type { Metadata } from 'next';
import './globals.css';
import './fonts.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { GoogleAnalytics } from '@/components/google-analytics';
import { site } from '@/lib/site';
import { jsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {
    default: `${site.name} | Thuê xe du lịch 4–45 chỗ & xe cưới`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  robots: { index: site.indexable, follow: true },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 1200,
        alt: site.name,
      },
    ],
  },
  icons: {
    icon: [{ url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        {site.indexable ? <GoogleAnalytics /> : null}
        <a className="skip-link" href="#main">
          Bỏ qua điều hướng
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'LocalBusiness'],
              '@id': site.origin + '/#organization',
              name: site.name,
              legalName: site.company.name,
              ...(site.company.taxCode ? { taxID: site.company.taxCode } : {}),
              address: site.company.postalAddress,
              url: site.origin,
              logo: site.origin + '/images/logo.png',
              image: [site.origin + '/images/logo.png', site.origin + '/images/hero.jpg'],
              telephone: site.phone,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: site.phone,
                contactType: 'customer service',
                availableLanguage: 'Vietnamese',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
