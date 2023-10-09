/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'imagedelivery.net',
      'velog.velcdn.com',
      'images.unsplash.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
