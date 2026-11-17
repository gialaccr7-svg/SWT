import { vehiclePath } from '@/lib/paths';
import { ResponsiveImage } from '@/components/responsive-image';
import { Users, Check } from 'lucide-react';
import type { Vehicle } from '@/lib/content/vehicles';
export function VehicleCard({ vehicle: v }: { vehicle: Vehicle }) {
  return (
    <article className="vehicle-card">
      <a className="vehicle-photo" href={vehiclePath(v.slug)}>
        <ResponsiveImage
          sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1100px) 50vw, 300px"
          src={v.image}
          alt={v.imageAlt}
          loading="lazy"
          decoding="async"
          width="640"
          height="420"
        />
        <span className="vehicle-badge">{v.category}</span>
      </a>
      <div className="vehicle-body">
        <div className="vehicle-meta">
          <span>{v.brand}</span>
          <span>
            <Users size={14} /> {v.seats} chỗ
          </span>
        </div>
        <h3>
          <a href={vehiclePath(v.slug)}>{v.name}</a>
        </h3>
        <p>{v.description}</p>
        <div className="vehicle-features">
          <Check size={14} />
          {v.features[0]}
        </div>
        <div className="vehicle-bottom">
          <span>
            Giá theo nhóm {v.seats} chỗ
            <a className="text-link" href={`/bang-gia?seats=${v.seats}`}>
              Tra bảng giá
            </a>
          </span>
          <a className="button outline small" href={vehiclePath(v.slug)}>
            Xem chi tiết
          </a>
        </div>
      </div>
    </article>
  );
}
