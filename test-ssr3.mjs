import server from './node_modules/.nitro/vite/services/ssr/index.js';

const request = new Request('http://localhost/addiscan/');
const response = await server.fetch(request);
const html = await response.text();

// Write the HTML to dist/client/index.html
import { writeFileSync } from 'node:fs';
writeFileSync('dist/client/index.html', html);
console.log('Wrote dist/client/index.html', html.length, 'bytes');
