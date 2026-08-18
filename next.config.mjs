/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bkarogyam.com",
      },
    ],
  },
};

export default nextConfig;
