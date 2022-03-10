/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ru-RU', 'en-US'],
    defaultLocale: 'ru-RU',
    localeDetection: false,
  }
};

module.exports = nextConfig;
