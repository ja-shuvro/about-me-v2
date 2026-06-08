import { CASE_STUDIES_DATA } from '@/lib/projectData'

export async function GET() {
  const feedItems = Object.values(CASE_STUDIES_DATA).map((cs) => {
    return `
    <item>
      <title>${cs.name} — ${cs.tagline}</title>
      <link>https://www.jashuvro.com/case-studies/${cs.id}</link>
      <guid>https://www.jashuvro.com/case-studies/${cs.id}</guid>
      <pubDate>${new Date(cs.datePublished).toUTCString()}</pubDate>
      <description><![CDATA[${cs.overview} Role: ${cs.role}. Tech: ${cs.tech.join(', ')}. Outcome: ${cs.result}]]></description>
      <category>${cs.applicationCategory}</category>
    </item>`
  }).join('')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>JA Shuvro // Software Portfolio</title>
  <link>https://www.jashuvro.com</link>
  <description>High-performance mobile and web architecture case studies by JA Shuvro.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="https://www.jashuvro.com/feed.xml" rel="self" type="application/rss+xml" />
  ${feedItems}
</channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  })
}
