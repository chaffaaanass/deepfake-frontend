/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Add the domain of the external image source
  },
  async rewrites() {
    return [
      {
        source: "/predict",  // Use a custom route like /api/predict
        destination: "http://localhost:8000/predict",  // This will proxy to your backend API
      }
    ]
  },
  async headers() {
     return [
      {
        // Match all API routes in your Next.js application
        source: "/api/:path*",  // This matches all API routes in Next.js (for example: /api/*)
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" },  // Allow only localhost:3000 (your frontend)
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, PATCH" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
}
};

export default nextConfig;
