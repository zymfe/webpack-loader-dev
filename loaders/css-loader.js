function cssLoader (source) {
  console.log('css-loader: ', source)
  const arr = ['const list = []'];
  const reg = /url\((.+?)\)/g;
  let index = 0;
  let res = null;

  while (res = reg.exec(source)) {
    const lastIndex = reg.lastIndex;
    const [matchedStr, strPath] = res;
    const position = lastIndex - matchedStr.length;
    arr.push(`list.push(${JSON.stringify(source.slice(index, position))})`);
    if (!/(http|https):\/\//.test(strPath)) {
      arr.push(`list.push('url('+require(${strPath})+')')`);
    } else {
      arr.push(`list.push('url('+${strPath}+')')`);
    }
    index = lastIndex;
  }
  
  arr.push(`list.push(${JSON.stringify(source.slice(index))})`);
  arr.push(`module.exports = list.join('')`);

  return arr.join('\r\n');
}

module.exports = cssLoader;