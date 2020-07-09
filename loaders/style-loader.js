const loaderUtils = require('loader-utils');

function styleLoader (source) {
  console.log('this is styleLoader')
  return `
    const styleEle = document.createElement('style');
    styleEle.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(styleEle);
  `;
}

styleLoader.pitch = function (remainingRequest, previousRequest, data) {
  // /Users/didi/Desktop/webpack-loader-dev/loaders/css-loader.js!/Users/didi/Desktop/webpack-loader-dev/loaders/less-loader.js!/Users/didi/Desktop/webpack-loader-dev/src/main.less
  console.log('remainingRequest: ', remainingRequest)
  // ''
  console.log('previousRequest: ', previousRequest)
  // {}
  console.log('data: ', data)
  // !!../loaders/css-loader.js!../loaders/less-loader.js!./main.less
  console.log('stringifyRequest: ', loaderUtils.stringifyRequest(this, '!!' + remainingRequest))
  return `
    const styleEle = document.createElement('style');
    styleEle.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)});
    document.head.appendChild(styleEle);
  `;
}

module.exports = styleLoader;