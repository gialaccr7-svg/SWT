import vinext from 'vinext';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/postcss';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Isolated Vibe Host test: never allow indexing, even if a dashboard overrides env.
export default defineConfig(() => {
  const seo = { origin: 'https://hanhtrinhphuongnam.vn', indexable: false };
  return {
    resolve: {
      alias: [{ find: /^tailwindcss$/, replacement: require.resolve('tailwindcss/index.css') }],
    },
    css: { postcss: { plugins: [tailwindcss()] } },
    define: {
      'process.env.SITE_URL': JSON.stringify(seo.origin),
      'process.env.SITE_INDEXABLE': JSON.stringify(String(seo.indexable)),
    },
    plugins: [
      vinext(),
      nitro({
        preset: 'node_server',
        serveStatic: true,
        routeRules: {
          '/**': { headers: { 'X-Robots-Tag': 'noindex, follow', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin', 'Permissions-Policy': 'camera=(), microphone=(), geolocation=()' } },
          '/images/**': { headers: { 'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800' } },
          '/images/optimized/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
          '/fonts/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
          '/_next/static/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
        },
        hooks: {
          'build:before': (server) => {
            // Vinext supplies Next's entire optional externals inventory. Trace
            // actual runtime imports instead of shipping unused build tools.
            server.options.traceDeps = [];
          },
        },
      }),
    ],
  };
});
