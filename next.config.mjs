/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '7264',
      },
    ],
  },
  // Backend HTTPS self-signed sertifikasını atlamak için
  // ve CORS sorununu önlemek için proxy rewrites
  async rewrites() {
    return [
      {
        source: '/backend/:path*',
        destination: 'https://localhost:7264/:path*',
      },
    ];
  },
  // Geliştirme ortamında self-signed sertifikaları kabul et
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
  },
};

export default nextConfig;