/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["http://cdn.sanity.io"],
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.js",
  },
};

module.exports = nextConfig;
