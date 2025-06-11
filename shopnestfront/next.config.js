// frontend/next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' https://vercel.live; connect-src 'self' https://vercel.live;",
          },
        ],
      },
    ];
  },
};
