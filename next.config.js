const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  images: {
    domains: ['i.discogs.com', 'images.unsplash.com'],
  },
  experimental: { esmExternals: true },
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {},
        },
      ],
    });

    return config;
  },
});
