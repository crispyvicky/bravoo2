export const siteURL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'
);
export const siteOrigin = siteURL.origin;
