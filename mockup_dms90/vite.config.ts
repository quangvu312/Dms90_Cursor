import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin, type ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PROTOTYPE_STATIC_DIRS = [
  'pages',
  'scripts',
  'components',
  'data',
  'layouts',
  'router',
  'assets',
];

function mimeType(file: string): string {
  if (file.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (file.endsWith('.json')) return 'application/json; charset=utf-8';
  if (file.endsWith('.css')) return 'text/css; charset=utf-8';
  if (file.endsWith('.svg')) return 'image/svg+xml';
  if (file.endsWith('.html')) return 'text/html; charset=utf-8';
  if (file.endsWith('.pdf')) return 'application/pdf';
  if (file.endsWith('.txt')) return 'text/plain; charset=utf-8';
  if (file.endsWith('.doc')) return 'application/msword';
  if (file.endsWith('.png')) return 'image/png';
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) return 'image/jpeg';
  return 'application/octet-stream';
}

function servePrototypeStatic(): Plugin {
  const root = __dirname;
  return {
    name: 'serve-prototype-static',
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0];
        if ((req.url || '').includes('?import') || (req.url || '').includes('?direct') || (req.url || '').includes('t=')) {
          return next();
        }
        const matched = PROTOTYPE_STATIC_DIRS.some(
          (dir) => url === `/${dir}` || url.startsWith(`/${dir}/`),
        );
        if (!matched) return next();
        const filePath = path.normalize(path.join(root, decodeURIComponent(url)));
        if (!filePath.startsWith(root) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          return next();
        }
        res.setHeader('Content-Type', mimeType(filePath));
        fs.createReadStream(filePath).pipe(res);
      });
    },
    closeBundle() {
      const dist = path.join(root, 'dist');
      if (!fs.existsSync(dist)) return;
      for (const dir of [...PROTOTYPE_STATIC_DIRS, 'styles']) {
        const from = path.join(root, dir);
        if (!fs.existsSync(from)) continue;
        fs.cpSync(from, path.join(dist, dir), { recursive: true });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), servePrototypeStatic()],
  server: {
    host: 'localhost',
    port: 5173,
    watch: {
      ignored: ['**/exports/**', '**/.tools/**'],
    },
  },
});
