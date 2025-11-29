const withBundleAnalyzer = require("@next/bundle-analyzer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["lab.basement.studio"],
  },
  rewrites: async () => {
    const docsUrl = process.env.NEXT_PUBLIC_DOCS_URL;
    if (!docsUrl) {
      return [
        {
          source: "/:path*",
          destination: `/:path*`,
        },
      ];
    }
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/docs",
        destination: `${docsUrl}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${docsUrl}/docs/:path*`,
      },
    ];
  },
};

module.exports = (_phase, { defaultConfig: _ }) => {
  const plugins = [
    withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
  ];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};
