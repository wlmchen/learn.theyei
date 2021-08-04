module.exports = {
  webpack: function (config, { isServer }) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
}
