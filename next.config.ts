import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  // 'img.daisyui.com', 'images.unsplash.com'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
      },
    ],
  },
}

export default nextConfig
