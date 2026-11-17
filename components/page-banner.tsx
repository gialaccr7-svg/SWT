import type { ReactNode } from 'react';

export function PageBanner({
  title,
  description,
  parent,
  children,
}: {
  title: string;
  children?: ReactNode;
  description: string;
  parent?: { title: string; href: string };
}) {
  return (
    <section className="page-banner">
      <div className="container">
        <nav className="breadcrumb" aria-label="Đường dẫn">
          <a href="/">Trang chủ</a>
          <span>/</span>
          {parent && (
            <>
              <a href={parent.href}>{parent.title}</a>
              <span>/</span>
            </>
          )}
          <span aria-current="page">{title}</span>
        </nav>
        <h1>{title}</h1>
        {children}
        <p>{description}</p>
      </div>
    </section>
  );
}
