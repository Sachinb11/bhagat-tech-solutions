/** @type {import('next').NextConfig} */
const nextConfig = {

  // Static export enable
  //output: 'export',

  images: {
    // IMPORTANT for static export
    unoptimized: true,

    // Allow SVG files
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Remote image domains (add if needed)
    remotePatterns: [],

    // Supported formats
    formats: ['image/webp'],
  },

  // URL handling
  trailingSlash: false,

  // Production build optimization
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;