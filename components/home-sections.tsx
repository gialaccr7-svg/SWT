import { ResponsiveImage } from '@/components/responsive-image';
import {
  ShieldCheck,
  Route,
  Headphones,
  HeartHandshake,
  CarFront,
  Plane,
  Building2,
  Heart,
  Check,
} from 'lucide-react';
import { TripFinder } from '@/components/trip-finder';
import { FleetExplorer } from '@/components/fleet-explorer';
import { findVehicles } from '@/lib/services/vehicle-service';
import { site } from '@/lib/site';
export function Hero() {
  return (
    <section className="hero">
      <ResponsiveImage
        sizes="100vw"
        className="hero-image"
        src="/images/hero.jpg"
        alt="Ảnh thật Kia Carnival màu trắng của Hành Trình Phương Nam"
        fetchPriority="high"
        loading="eager"
        width="1920"
        height="1080"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="hero-label">
          <span /> CÙNG BẠN TRÊN MỌI HÀNH TRÌNH
        </div>
        <h1>
          Thuê xe du lịch,
          <br />
          4–45 chỗ &
          <br />
          <em>xe cưới.</em>
        </h1>
        <p>
          Hành Trình Phương Nam đồng hành cùng chuyến đi của bạn.
          <br />
          Từ chuyến đi gia đình đến những hành trình lớn.
        </p>
        <div className="hero-actions">
          <a className="button" href="/doi-xe">
            Khám phá đội xe
          </a>
          <a className="hero-phone" href={`tel:${site.phone}`}>
            Gọi tư vấn <strong>{site.phoneDisplay}</strong>
          </a>
        </div>
        <div className="hero-foot">
          <span>TOYOTA</span>
          <span>MERCEDES-BENZ</span>
          <span>HYUNDAI</span>
          <span>SAMCO</span>
        </div>
      </div>
      <div className="hero-note">
        Hành trình theo cách của bạn<small>DU LỊCH · CÔNG TÁC · NGÀY CƯỚI</small>
      </div>
    </section>
  );
}
export function TripSearch() {
  return (
    <div className="container finder-wrap">
      <TripFinder />
    </div>
  );
}
export function TrustHighlights() {
  return (
    <section className="container trust-row">
      {[
        { icon: ShieldCheck, title: 'Chọn xe phù hợp', text: 'Theo số khách & hành trình' },
        { icon: Route, title: 'Lịch trình linh hoạt', text: 'Điểm đón theo nhu cầu' },
        { icon: Headphones, title: 'Tư vấn trực tiếp', text: 'Trao đổi nhanh qua Zalo' },
        { icon: HeartHandshake, title: 'Chi phí rõ ràng', text: 'Thống nhất trước chuyến đi' },
      ].map((x) => (
        <div key={x.title}>
          <x.icon size={27} />
          <span>
            <strong>{x.title}</strong>
            <small>{x.text}</small>
          </span>
        </div>
      ))}
    </section>
  );
}
export function HomeFleet() {
  return (
    <section className="section container" id="doi-xe">
      <div className="section-heading">
        <div>
          <p className="eyebrow">ĐỘI XE CỦA CHÚNG TÔI</p>
          <h2>Chiếc xe phù hợp. Chuyến đi như ý.</h2>
          <p>Đa dạng dòng xe, từ Toyota tiện nghi đến Mercedes-Benz sang trọng.</p>
        </div>
        <a className="text-link" href="/doi-xe">
          Xem toàn bộ đội xe
        </a>
      </div>
      <FleetExplorer vehicles={findVehicles()} compact />
    </section>
  );
}
export function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">DỊCH VỤ THUÊ XE</p>
            <h2>Mọi nhu cầu. Một nơi đáp ứng.</h2>
          </div>
          <a className="text-link" href="/dich-vu">
            Khám phá dịch vụ
          </a>
        </div>
        <div className="service-grid">
          {[
            {
              icon: CarFront,
              title: 'Du lịch & đi tỉnh',
              text: 'Chuyến nghỉ dưỡng cùng gia đình, bạn bè. Chọn xe 4–45 chỗ theo quy mô đoàn.',
              href: '/dich-vu#du-lich',
            },
            {
              icon: Plane,
              title: 'Đưa đón sân bay',
              text: 'Chủ động giờ đón, điểm trả và không gian hành lý cho hành trình của bạn.',
              href: '/dich-vu#san-bay',
            },
            {
              icon: Building2,
              title: 'Công tác & sự kiện',
              text: 'Đưa đón đối tác, nhân viên và đoàn khách theo lịch trình công việc.',
              href: '/dich-vu#cong-tac',
            },
            {
              icon: Heart,
              title: 'Xe cưới & xe hoa',
              text: 'Một điểm nhấn thanh lịch trong ngày trọng đại với dòng xe sang phù hợp.',
              href: '/xe-cuoi',
            },
          ].map((s, i) => (
            <a href={s.href} className="service-card" key={s.title}>
              <span className="service-number">0{i + 1}</span>
              <s.icon size={29} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="service-more">Tìm hiểu dịch vụ</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export function WeddingHighlight() {
  return (
    <section className="container wedding-section">
      <div className="wedding-image">
        <ResponsiveImage
          sizes="(max-width: 760px) calc(100vw - 36px), 50vw"
          src="/images/xecuoi.jpg"
          alt="Mercedes-Benz thanh lịch cho dịch vụ xe cưới"
          loading="lazy"
          decoding="async"
          width="1200"
          height="800"
        />
      </div>
      <div className="wedding-copy">
        <p className="eyebrow">CHO NGÀY ĐẶC BIỆT</p>
        <h2>
          Khởi đầu hạnh phúc.
          <br />
          Đẹp trong từng khoảnh khắc.
        </h2>
        <p>
          Mercedes-Benz cùng những dòng sedan sang trọng cho lễ đón dâu, lễ cưới và đưa đón gia đình
          hai bên.
        </p>
        <ul>
          <li>
            <Check size={18} /> Tư vấn xe phù hợp phong cách lễ cưới
          </li>
          <li>
            <Check size={18} /> Thống nhất thời gian và lộ trình đón dâu
          </li>
          <li>
            <Check size={18} /> Trao đổi riêng về hoa trang trí & yêu cầu đặc biệt
          </li>
        </ul>
        <a href="/xe-cuoi" className="button">
          Khám phá xe cưới
        </a>
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section className="section container process-section">
      <p className="eyebrow">ĐƠN GIẢN TỪ BƯỚC ĐẦU TIÊN</p>
      <h2>Đặt xe trong 3 bước</h2>
      <div className="process-grid">
        {[
          [
            '01',
            'Chia sẻ lịch trình',
            'Cho chúng tôi biết điểm đón, ngày đi, số khách và các điểm đến.',
          ],
          [
            '02',
            'Chọn xe & nhận báo giá',
            'Trao đổi dòng xe, chi phí và các điều kiện của chuyến đi.',
          ],
          [
            '03',
            'Xác nhận hành trình',
            'Thống nhất thông tin xe, thời gian đón và cách thức thanh toán.',
          ],
        ].map((x) => (
          <div key={x[0]}>
            <span>{x[0]}</span>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="section container faq-section">
      <div>
        <p className="eyebrow">GIẢI ĐÁP TRƯỚC CHUYẾN ĐI</p>
        <h2>Bạn cần biết thêm?</h2>
        <p>
          Một vài thông tin để chuẩn bị
          <br />
          cho hành trình sắp tới.
        </p>
        <a className="text-link" href={site.zalo} target="_blank" rel="noopener noreferrer">
          Hỏi trực tiếp qua Zalo
        </a>
      </div>
      <div className="faq-list">
        {[
          [
            'Giá thuê xe được tính như thế nào?',
            'Xem mục Bảng giá để tra theo điểm đến và số chỗ, xuất phát từ TP.HCM. Giá theo lịch trình trong bảng; các mức Liên hệ hoặc chuyến khác lịch trình cần tư vấn và xác nhận khoản đã bao gồm.',
          ],
          [
            'Tôi nên chọn xe bao nhiêu chỗ?',
            'Hãy tính cả số người và lượng hành lý. Xe 4–7 chỗ phù hợp gia đình nhỏ; xe 16 chỗ cho nhóm nhỏ; xe 29–45 chỗ cho đoàn lớn. Tư vấn viên sẽ xác nhận cấu hình thực tế.',
          ],
          [
            'Có thể thuê xe cưới Mercedes-Benz không?',
            'Trao đổi nhu cầu xe cưới Mercedes-Benz, giờ đón dâu và phong cách hoa trang trí. Dòng xe và tình trạng sẵn có sẽ được xác nhận khi tư vấn.',
          ],
          [
            'Cần cung cấp gì khi hỏi báo giá?',
            'Gửi ngày đi, ngày về, điểm đón, các điểm đến, số hành khách và yêu cầu về hành lý hoặc xe cưới.',
          ],
        ].map((x) => (
          <details key={x[0]}>
            <summary>{x[0]}</summary>
            <p>{x[1]}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
