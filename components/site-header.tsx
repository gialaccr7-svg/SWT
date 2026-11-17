import { Phone } from 'lucide-react';
import { site } from '@/lib/site';

const navigation = [
  { href: '/', label: 'Trang chủ' },
  { href: '/doi-xe', label: 'Đội xe' },
  { href: '/bang-gia', label: 'Bảng giá' },
  { href: '/dich-vu', label: 'Dịch vụ' },
  { href: '/xe-cuoi', label: 'Xe cưới' },
  { href: '/kinh-nghiem', label: 'Kinh nghiệm' },
  { href: '/gioi-thieu', label: 'Về Hành Trình Phương Nam' },
];

export function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span>Thuê xe du lịch & xe cưới · 4–45 chỗ</span>
          <a href={`tel:${site.phone}`}>
            <Phone size={13} />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="brand" aria-label="Thuê Xe Hành Trình Phương Nam - Về trang chủ">
            <span className="brand-icon">
              <img
                src="/images/logo321-192.png"
                alt="Logo Hành Trình Phương Nam"
                width={40}
                height={40}
                className="brand-logo-img"
              />
            </span>
            <span className="brand-wordmark">
              <small className="brand-kicker">THUÊ XE</small>
              <span className="brand-title">HÀNH TRÌNH PHƯƠNG NAM</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Điều hướng chính">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button small" href={site.zalo} target="_blank" rel="noopener noreferrer">
            Tư vấn qua Zalo
          </a>
          <details className="mobile-menu">
            <summary aria-label="Mở menu">☰</summary>
            <nav aria-label="Điều hướng trên điện thoại">
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
