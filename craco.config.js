const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          assert: require.resolve("assert/"),
          buffer: require.resolve("buffer/"),
          crypto: require.resolve("crypto-browserify"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          path: require.resolve("path-browserify"),
          querystring: require.resolve("querystring-es3"),
          stream: require.resolve("stream-browserify"),
          url: require.resolve("url/"),
          util: require.resolve("util/"),
          zlib: require.resolve("browserify-zlib")
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        }),
      ]
    }
  }
};