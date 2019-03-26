import css from './css.css'

// css 是一个对象


var span = document.querySelector('#title');
span.innerHTML = `<span class="${css.title}">我是title</span>`;

