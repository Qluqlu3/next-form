"use strict";

/** @type {import('next').NextConfig} */
module.exports = {
  distDir: 'build',
  webpack: function webpack(config, _ref) {
    var isServer = _ref.isServer;

    if (!isServer) {
      config.module.rules.unshift({
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: {
          loader: 'swc-loader'
        }
      });
    }

    return config;
  }
};