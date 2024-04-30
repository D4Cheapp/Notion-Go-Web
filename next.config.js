/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
  sassOptions: {
    prependData: `@import "src/app/styles/mixins";`,
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
