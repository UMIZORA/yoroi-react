const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/react' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? basePath : '',
    output: 'export',
    publicRuntimeConfig: {
        basePath, // basePathを他のファイルから読み込めるようにする
    },
    trailingSlash: true,
};

export default nextConfig;