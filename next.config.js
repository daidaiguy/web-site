/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig 