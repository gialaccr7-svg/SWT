import {defineConfig,globalIgnores} from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
export default defineConfig([
 ...nextVitals,
 ...nextTs,
 // Public pages deliberately use native anchors and local JPEGs on the Worker.
 // Avoid automatic route prefetch/hydration and an unconfigured image optimizer.
 {files:['app/**/*.tsx','components/**/*.tsx'],rules:{
  '@next/next/no-html-link-for-pages':'off',
  '@next/next/no-img-element':'off',
 }},
 // App Router's root layout loads this same font stylesheet for every route.
 {files:['app/layout.tsx'],rules:{'@next/next/no-page-custom-font':'off'}},
 globalIgnores(['.next/**','.vinext/**','.wrangler/**','.sites-runtime/**','.netlify/**','.nitro/**','.output/**','.vite/**','dist/**','out/**','build/**','next-env.d.ts']),
]);
