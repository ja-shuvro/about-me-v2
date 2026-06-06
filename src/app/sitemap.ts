import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Dynamic sitemap base URL
  const baseUrl = 'https://jashuvro.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/case-studies/flirtmetrics`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies/erp`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
