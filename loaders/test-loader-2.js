function loader (source) {
  console.log('loader2');
  return source;
}

loader.pitch = function () {
  console.log('loader-pitch-2');
  return '';
}

module.exports = loader;