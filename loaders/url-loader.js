// url-loader 让 file-loader 去处理路径
// url-loader 提供一些 options

const fileLoader = require('./file-loader');
const loaderUtils = require('loader-utils');
const mime = require('mime');

function urlLoader (source) {
  
  const { limit } = loaderUtils.getOptions(this);
  
  if (!!limit && limit > source.length) {
    return `module.exports = "data:image/${mime.getType(this.resourcePath)};base64,${source.toString('base64')}"`;
  }

  return fileLoader.call(this, source);
}

urlLoader.raw = true;

module.exports = urlLoader;