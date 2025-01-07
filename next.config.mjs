/** @type {import('next').NextConfig} */
const nextConfig = {
    darkMode: 'class',
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
