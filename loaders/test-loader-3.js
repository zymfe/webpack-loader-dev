function loader (source) {
  console.log('loader3');
  return source;
}

loader.pitch = function () {
  console.log('loader-pitch-3');
}

module.exports = loader;