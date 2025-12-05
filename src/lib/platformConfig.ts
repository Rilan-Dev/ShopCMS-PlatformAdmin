// Platform configuration - serves both landing page and admin interface
export const PLATFORM_DOMAIN =
  process.env.PLATFORM_DOMAIN || 'shop-cms-platform-admin.vercel.app';

export const isPlatformDomain = (hostname: string): boolean => {
  return hostname === PLATFORM_DOMAIN;
}
