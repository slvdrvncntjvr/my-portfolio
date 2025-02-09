/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: '/my-portfolio',
    images: {
      unoptimized: true
    },
    output: 'export'
  }
  
  module.exports = nextConfig;