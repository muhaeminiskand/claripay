'use strict';

const { withOptimizedImages } = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config options here */
  webpack(config, options) {
    return config;
  },
  images: {
    disableStaticImages: true,
  },
  optimizeImagesInDev: false,
});