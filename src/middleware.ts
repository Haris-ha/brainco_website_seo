import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './libs/I18nRouting';

const handleI18nRouting = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  return handleI18nRouting(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/_next`, `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!_next|_vercel|.*\\..*).*)',
  runtime: 'nodejs',
};
