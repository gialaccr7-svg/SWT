import { NextRequest, NextResponse } from 'next/server';
import { site } from './lib/site';
import { requestSeoPolicy } from './lib/request-seo';

export function proxy(request: NextRequest) {
  const policy = requestSeoPolicy(request.url, site.origin, site.indexable);
  if (policy.redirect) return NextResponse.redirect(policy.redirect, 308);
  const response = NextResponse.next();
  if (policy.noindex) response.headers.set('X-Robots-Tag', 'noindex, follow');
  return response;
}

export const config = { matcher: ['/((?!_next/|images/|fonts/|favicon.svg).*)'] };
