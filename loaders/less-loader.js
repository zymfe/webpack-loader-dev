const less = require('less');

function lessLoader (source) {
  console.log('less loader: ', source)
  let css = '';
  less.render(source, (error, data) => {
    css = data.css;
  });
  return css;
}

module.exports = lessLoader;