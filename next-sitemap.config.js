/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://dentium.tech',
  changefreq: 'daily',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
