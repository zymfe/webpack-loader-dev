function loader (source) {
  console.log('loader1');
  return source;
}

loader.pitch = function () {
  console.log('loader-pitch-1');
}

module.exports = loader;