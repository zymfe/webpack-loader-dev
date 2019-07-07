const loaderUtils = require('loader-utils');

function styleLoader (source) {
  return `
    const styleEle = document.createElement('style');
    styleEle.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(styleEle);
  `;
}

styleLoader.pitch = function (remainingRequest) {
  return `
    const styleEle = document.createElement('style');
    styleEle.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)});
    document.head.appendChild(styleEle);
  `;
}

module.exports = styleLoader;