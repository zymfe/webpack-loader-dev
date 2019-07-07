const less = require('less');

function lessLoader (source) {
  let css = '';
  less.render(source, (error, data) => {
    console.log(error);
    css = data.css;
  });
  return css;
}

module.exports = lessLoader;