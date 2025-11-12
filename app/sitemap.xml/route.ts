// app/sitemap.xml/route.ts
export async function GET() {
  const baseUrl = 'https://4secondshop.vercel.app';

  const urls = [
    { loc: `${baseUrl}/`, changefreq: 'weekly', priority: 1.0 },
    { loc: `${baseUrl}/about`, changefreq: 'monthly', priority: 0.8 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (u) => `
    <url>
      <loc>${u.loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${u.changefreq}</changefreq>
      <priority>${u.priority}</priority>
    </url>`
    )
    .join('')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      // 🚫 noindexヘッダーを完全に除去
      'X-Robots-Tag': 'index, follow',
    },
  });
}
