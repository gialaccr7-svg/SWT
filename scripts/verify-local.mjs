import { spawn } from 'node:child_process';
const port = '8902';
const child = spawn(process.execPath, ['.output/server/index.mjs'], { cwd: process.cwd(), env: { ...process.env, PORT: port, HOST: '127.0.0.1' }, stdio: ['ignore','pipe','pipe'] });
child.stdout.on('data', d => process.stdout.write(d));
child.stderr.on('data', d => process.stderr.write(d));
try {
  let ready = false;
  for(let i=0;i<50;i++) {
    if(child.exitCode !== null) throw new Error('Server stopped: '+child.exitCode);
    try { const r = await fetch('http://127.0.0.1:'+port+'/robots.txt'); if(r.ok) { ready = true; break; } } catch {}
    await new Promise(r => setTimeout(r,200));
  }
  if(!ready) throw new Error('Server did not become ready');
  process.env.CHECK_URL='http://127.0.0.1:'+port;
  process.env.CHECK_CANONICAL_ORIGIN='https://hanhtrinhphuongnam.vn';
  process.env.CHECK_INDEXABLE='false';
  await import('./check-site.mjs');
  for(const route of ['/', '/doi-xe', '/kinh-nghiem', '/sitemap.xml']) {
    const r = await fetch(process.env.CHECK_URL+route);
    if(!r.headers.get('x-robots-tag')?.includes('noindex')) throw new Error('Missing noindex header: '+route);
  }
  console.log('PASS: Test host noindex headers.');
} finally { child.kill(); }
