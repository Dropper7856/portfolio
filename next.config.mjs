/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname:"**",
            },
            {
                protocol: 'https',
                hostname:"api.microlink.io",
            }
        ]
    }
};

export default nextConfig;
