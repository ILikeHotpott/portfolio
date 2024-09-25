/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: false,  // 禁用路径末尾的斜杠
    async redirects() {
        return [
            {
                source: '/:path*/',
                destination: '/:path*',  // 将任何带有斜杠的路径重定向到没有斜杠的路径
                permanent: true,
            },
        ];
    },
    // 其他可能的配置项
};

export default nextConfig;
