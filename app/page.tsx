import {
  Hero,
  TripSearch,
  TrustHighlights,
  HomeFleet,
  Services,
  WeddingHighlight,
  Process,
  FAQ,
} from '@/components/home-sections';
import { site } from '@/lib/site';
import { seo } from '@/lib/seo';
import { destinations, destinationPath } from '@/lib/content/destinations';
import { FeaturedRoutePrices } from '@/components/featured-route-prices';
export const metadata = {
  ...seo('Thuê xe du lịch 4–45 chỗ & xe cưới', site.description, '/'),
  title: { absolute: `${site.name} | Thuê xe du lịch 4–45 chỗ & xe cưới` },
};
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TripSearch />
      <FeaturedRoutePrices />
      <TrustHighlights />
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">KHỞI HÀNH TỪ TP.HCM</p>
            <h2>Giá rõ ràng cho điểm đến của bạn</h2>
            <p>Tra 166 tuyến cho xe 4–45 chỗ và tham khảo gợi ý hành trình.</p>
          </div>
          <a className="text-link" href="/bang-gia">
            Xem toàn bộ bảng giá →
          </a>
        </div>
        <div className="route-guides">
          {destinations.map((item) => (
            <a key={item.slug} href={destinationPath(item.slug)}>
              <h3>TP.HCM → {item.name}</h3>
              <p>{item.description}</p>
              <span className="text-link">Xem giá & hành trình →</span>
            </a>
          ))}
        </div>
      </section>
      <HomeFleet />
      <Services />
      <WeddingHighlight />
      <Process />
      <FAQ />
    </main>
  );
}
