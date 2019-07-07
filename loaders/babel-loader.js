const babel = require('@babel/core');
const loaderUtils = require('loader-utils');

function babelLoader (source) {
  const options = loaderUtils.getOptions(this);
  const cb = this.async();

  babel.transform(source, {
    ...options,
    sourceMap: true,
    filename: this.resourcePath.split('/').pop()
  }, (error, data) => {
    cb(error, data.code, data.map);
  });
}

module.exports = babelLoader;