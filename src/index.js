import _ from 'lodash';
import './style.css';
import Icon from './cat.png';

function component() {
  const element = document.createElement('div');

  // lodash，现在通过一个 script 引入
  element.innerHTML = _.join(['Hello', 'webpack', '你好'], ' ');
  element.classList.add('hello');

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.width = '200'

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());