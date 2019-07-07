class Person {
  constructor (name) {
    this.name = name;
  }

  showName () {
    return this.name;
  }
}

const p = new Person('zhaoyiming');

import imgPath from './async.png';
const imgEle = document.createElement('img');
imgEle.src = imgPath;
document.body.appendChild(imgEle);