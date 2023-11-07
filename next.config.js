/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  generateStaticParams: function () {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;
