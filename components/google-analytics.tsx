'use client';

import Script from 'next/script';
import { useEffect } from 'react';

const measurementId = 'G-3FZRS0MDMZ';

type Gtag = (command: 'event', eventName: string, parameters?: Record<string, string>) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: Gtag;
  }
}

export function GoogleAnalytics() {
  useEffect(() => {
    const trackContactClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;

      const href = link.getAttribute('href') ?? '';
      let eventName: string | undefined;
      let contactMethod: string | undefined;

      if (href.startsWith('tel:')) {
        eventName = 'click_phone';
        contactMethod = 'phone';
      } else {
        try {
          const hostname = new URL(href, window.location.origin).hostname;
          if (hostname === 'zalo.me' || hostname.endsWith('.zalo.me')) {
            eventName = 'click_zalo';
            contactMethod = 'zalo';
          }
        } catch {
          return;
        }
      }

      if (eventName && contactMethod) {
        window.gtag?.('event', eventName, { contact_method: contactMethod });
      }
    };

    document.addEventListener('click', trackContactClick);
    return () => document.removeEventListener('click', trackContactClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
