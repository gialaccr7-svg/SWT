import { ArticleContent, ArticleInline } from '@/components/article-content';
import { VehicleCard } from '@/components/vehicle-card';
import { findVehicles } from '@/lib/services/vehicle-service';
import type { SeatRouteCount } from '@/lib/content/seat-routes';
import type { RentalRouteGuide } from '@/lib/content/rental-route-guides';
import { site } from '@/lib/site';

export function RentalRouteContent({
  guide,
  seats,
  destination,
  slug,
}: {
  guide: RentalRouteGuide;
  seats: SeatRouteCount;
  destination: string;
  slug: string;
}) {
  return (
    <article className="article-layout">
      <h2>Chọn xe {seats} chỗ và kiểm tra hành lý</h2>
      <p>{guide.vehicleAdvice}</p>
      <div className="vehicle-grid">
        {findVehicles({ seats }).map((vehicle) => (
          <VehicleCard key={vehicle.slug} vehicle={vehicle} />
        ))}
      </div>
      {guide.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.blocks && <ArticleContent blocks={section.blocks} />}
        </section>
      ))}
      <a className="button" href={site.zalo} target="_blank" rel="noopener noreferrer">
        Hỏi giá xe {seats} chỗ đi {destination} qua Zalo
      </a>
      <p>
        Hoặc gọi{' '}
        <a className="text-link" href={`tel:${site.phone}`}>
          {site.phoneDisplay}
        </a>
        . So sánh{' '}
        <a className="text-link" href={`/tuyen-xe/${slug}`}>
          giá các loại xe đi {destination}
        </a>
        .
      </p>
      <section className="article-faq" aria-labelledby="rental-route-faq">
        <h2 id="rental-route-faq">Câu hỏi thường gặp</h2>
        {guide.faq.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>
              <ArticleInline content={item.answer} />
            </p>
          </div>
        ))}
      </section>
    </article>
  );
}
