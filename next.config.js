const withOffline = require("next-offline");

module.exports = withOffline({
    async rewrites() {
        return [
            {
                source: '/guide/job-guide/:job/5-1-bis',
                destination: '/5.1/guide/bis-guide/:job'
            }, {
                source: '/guide/job-guide',
                destination: '/5.1/guide/bis-guide'
            }]
    },
  target: "serverless",
  transformManifest: (manifest) => ["/"].concat(manifest),
  generateInDevMode: true,
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
});
