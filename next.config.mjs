/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["gsap"],
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  output: "export",
};

export default nextConfig;
