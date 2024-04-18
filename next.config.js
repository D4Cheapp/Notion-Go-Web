/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    prependData: `@import "src/app/styles/mixins";`,
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
