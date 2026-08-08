import server from './node_modules/.nitro/vite/services/ssr/index.js';

const request = new Request('http://localhost/addiscan/');
const response = await server.fetch(request);
const html = await response.text();
console.log(response.status, response.statusText);
console.log(response.headers.get('location'));
console.log(html.slice(0, 2000));
