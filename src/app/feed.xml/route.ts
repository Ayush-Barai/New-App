import { NextResponse } from 'next/server';
import { categories } from '../../data/categories';

export async function GET() {
  const baseUrl = 'https://prephub.vercel.app';

  const feedItems = categories
    .map((cat) => `
      <item>
        <title>${escapeXml(cat.title)}</title>
        <link>${baseUrl}/interview/${cat.slug}</link>
        <description>${escapeXml(cat.description)}</description>
        <pubDate>${new Date(cat.updatedAt).toUTCString()}</pubDate>
        <guid>${baseUrl}/interview/${cat.slug}</guid>
      </item>
    `)
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>PrepHub Interview Question Hub</title>
        <link>${baseUrl}</link>
        <description>Master coding, system design, databases, DevOps, and behavioral interviews with structured, high-quality questions and detailed answers.</description>
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${feedItems}
      </channel>
    </rss>
  `.trim();

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
