/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://changes.page",
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ["/pages", "/pages/*", "/account/*"],
};
