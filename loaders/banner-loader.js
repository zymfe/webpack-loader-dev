const loaderUtils = require('loader-utils');
const schemaUtils = require('schema-utils');

function bannerLoader (source) {

  const options = loaderUtils.getOptions(this);
  const schema = {
    type: 'object',
    properties: {
      author: {
        type: 'string'
      },
      time: {
        type: 'string'
      }
    }
  }

  schemaUtils(schema, options, 'banner-loader');

  return `/* created by ${options.author} on ${options.time} */ ${source}`
  
  return source;
}

module.exports = bannerLoader;