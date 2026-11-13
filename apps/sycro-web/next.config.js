/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingRoot: process.cwd(),
  allowedDevOrigins: ['192.168.100.38', 'localhost'],
};

export default nextConfig;
