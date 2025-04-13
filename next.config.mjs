const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? basePath : '',
    output: 'export',
    publicRuntimeConfig: {
        basePath, // basePathを他のファイルから読み込めるようにする
    },
    trailingSlash: true,
    images: { unoptimized: true }, //Imageコンポーネントを使用しないようにする　表示速度に影響はあるのか、、、
};

export default nextConfig;