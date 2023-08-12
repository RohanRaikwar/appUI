/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["revivohotelmanagment-app.onrender.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
}
}

module.exports = nextConfig
