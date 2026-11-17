import type { SeatCount } from './catalog';
export const vehiclePath = (slug: string) => '/doi-xe/' + encodeURIComponent(slug);
export const articlePath = (slug: string) => '/kinh-nghiem/' + encodeURIComponent(slug);
export const categoryPath = (seats: SeatCount) => '/thue-xe/' + seats + '-cho';
