if (process.env.NODE_ENV === 'development') {
  require('./template.html');
};
import helloWorld from './js/helloWorld';
import './styles/index.scss';

const btn = document.querySelector('#btn');
btn.addEventListener('click', helloWorld);