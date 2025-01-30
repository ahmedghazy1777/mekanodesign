/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pradeepkundekar.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
