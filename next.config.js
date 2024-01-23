/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8090',
                pathname: '/ad_images/**',
            },
        ],
    },
}

module.exports = nextConfig
