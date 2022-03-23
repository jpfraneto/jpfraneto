const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()({
  images: {
    domains: [
      'i.discogs.com',
      'images.unsplash.com',
      'img.discogs.com',
      'encrypted-tbn0.gstatic.com',
      'lh3.googleusercontent.com',
      'upload.wikimedia.org',
      '2.bp.blogspot.com',
      'f4.bcbits.com',
      'theartsdesk.com',
      'images-na.ssl-images-amazon.com',
      'm.media-amazon.com',
      'www.discogs.com',
      'geo-static.traxsource.com',
      'is3-ssl.mzstatic.com',
    ],
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
