const loaderUtils = require('loader-utils');

function urlLoader (source) {
  return source;
}

module.exports = urlLoader;