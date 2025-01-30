/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
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
