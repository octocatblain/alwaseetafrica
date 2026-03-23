const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alwaseetafrica.com';

export default async function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/legal`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}

