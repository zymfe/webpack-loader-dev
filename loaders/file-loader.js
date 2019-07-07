// 根据图片生成一个 md5，发射到 dist 目录下，filer-loader 还会返回当前图片在 dist 目录下的路径

const loaderUtils = require('loader-utils');

function fileLoader (source) {
  const fileName = loaderUtils.interpolateName(this, '[hash].[ext]', {content: source});
  this.emitFile(fileName, source);
  
  return `module.exports = "${fileName}"`;
}

// 返回资源是二进制格式
fileLoader.raw = true;

module.exports = fileLoader;
