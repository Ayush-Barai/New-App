import { MetadataRoute } from 'next';
import { categories } from '../data/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prephub.vercel.app';

  // Categories sitemap
  const categorySitemaps = categories.map((cat) => ({
    url: `${baseUrl}/interview/${cat.slug}`,
    lastModified: new Date(cat.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/interview`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...categorySitemaps,
  ];
}
