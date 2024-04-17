/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    prependData: `@import "src/app/styles/_variables.scss"; @import "src/app/styles/mixins.scss";`,
  },
  eslint: {
    dirs: ['src'],
  },
};

module.exports = nextConfig;
