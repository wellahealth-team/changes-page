const withBundleAnalyzer = require("@next/bundle-analyzer")({});

const ContentSecurityPolicy = `
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *;
  style-src 'self' data: 'unsafe-inline' maxcdn.bootstrapcdn.com cdn.jsdelivr.net;
  img-src 'self' * data: blob:;
  font-src 'self' data: maxcdn.bootstrapcdn.com cdn.jsdelivr.net;
  connect-src 'self' wss: *.supabase.co *.${process.env.NEXT_PUBLIC_DEFAULT_DOMAIN} manageprompt.com;
  worker-src 'self' blob:;
  report-to default
`;

const cspReportUri = `${process.env.NEXT_PUBLIC_SITE_URL}/api/debug/csp-report`;

const securityHeaders = [
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "report-uri",
    value: cspReportUri,
  },
  {
    key: "report-to",
    value: JSON.stringify({
      group: "default",
      max_age: 10886400,
      endpoints: [
        {
          url: cspReportUri,
        },
      ],
      include_subdomains: true,
    }),
  },
];

const moduleExports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes expect /api/*
        source: "/((?!api$|api/).*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    domains: [
      "pdwvetqkhfagwmkvduod.supabase.co",
      "eainhsncogzypzcrwpsp.supabase.co",
      "t3.gstatic.com",
      "cdn.sanity.io",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

// ensure that your source maps include changes from all other Webpack plugins
module.exports =
  process.env.ANALYZE === "true"
    ? withBundleAnalyzer(moduleExports)
    : moduleExports;

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: "techulus-llc",
    project: "changes-page",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: false,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
