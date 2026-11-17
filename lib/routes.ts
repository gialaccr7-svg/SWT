import { vehiclePath, articlePath, categoryPath } from '@/lib/paths';
import { seatCounts } from './catalog';
import { findVehicles } from './services/vehicle-service';
import { listArticles } from './services/article-service';
import { destinations, destinationPath } from './content/destinations';
import { seatRouteCounts, seatRouteDestinations, seatRoutePath } from './content/seat-routes';
import { rentalRouteGuides } from './content/rental-route-guides';
import { rentalRouteSummaries } from './content/rental-route-summaries';

/** Indexable paths only. Filter queries and API endpoints never enter the sitemap. */
export function publicPages() {
  return [
    ...[
      '/',
      '/doi-xe',
      '/bang-gia',
      '/dich-vu',
      '/xe-cuoi',
      '/kinh-nghiem',
      '/gioi-thieu',
      '/chinh-sach',
      '/bao-mat',
    ].map((path) => ({ path, lastModified: undefined as string | undefined })),
    ...destinations.map((item) => ({
      path: destinationPath(item.slug),
      lastModified: item.slug === 'nha-trang' ? '2026-11-17' : '2026-11-06',
    })),
    ...seatRouteDestinations.flatMap((destination) =>
      seatRouteCounts.map((seats) => ({
        path: seatRoutePath(seats, destination.slug),
        lastModified:
          destination.slug === 'nha-trang'
            ? '2026-11-17'
            : (rentalRouteSummaries[seatRoutePath(seats, destination.slug)]?.updatedAt ??
              rentalRouteGuides[seatRoutePath(seats, destination.slug)]?.updatedAt ??
              (seats === 7 && destination.slug === 'vung-tau' ? '2026-11-13' : '2026-11-06')),
      })),
    ),
    ...findVehicles().map((vehicle) => ({
      path: vehiclePath(vehicle.slug),
      lastModified: vehicle.updatedAt,
    })),
    ...seatCounts.map((seats) => ({ path: categoryPath(seats), lastModified: undefined })),
    ...listArticles().map((article) => ({
      path: articlePath(article.slug),
      lastModified: article.updatedAt ?? article.date,
    })),
  ];
}
