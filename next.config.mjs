/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mekanodesign.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
