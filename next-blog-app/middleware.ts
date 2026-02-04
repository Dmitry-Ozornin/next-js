//приватный роутер 

export { default as middleware } from 'next-auth/middleware';

export const config = {
  matcher: ['/profile', '/protected/:path*']
};