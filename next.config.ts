/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Tüm domainlerden resim yüklemeye izin ver (Geliştirme için)
      },
    ],
  },
};

export default nextConfig;