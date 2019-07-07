function styleLoader (source) {
  return `
    const styleEle = document.createElement('style');
    styleEle.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(styleEle);
  `;
}

module.exports = styleLoader;