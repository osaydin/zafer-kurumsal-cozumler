/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.zaferticaretas.com"
      }
    ]
  }
};

export default nextConfig;
