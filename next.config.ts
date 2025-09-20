/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! AVISO !!
    // Permite perigosamente que builds de produção sejam concluídos com sucesso
    // mesmo que seu projeto tenha erros de tipo.
    // !! AVISO !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;