/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'medicals.ar'],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;