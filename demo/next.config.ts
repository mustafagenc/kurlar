import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.shields.io",
				pathname: "/badge/**",
			},
		],
	},
};

export default nextConfig;
