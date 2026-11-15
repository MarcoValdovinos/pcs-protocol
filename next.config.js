import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingRoot: process.cwd(),
  allowedDevOrigins: ['192.168.100.38', 'localhost'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@noble/hashes': path.dirname(require.resolve('@noble/hashes')),
      };
    }
    return config;
  },
};

export default nextConfig;
