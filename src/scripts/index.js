/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@iconify/iconify';
import Swal from 'sweetalert2';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const maincontent = document.querySelector('#mainContent');
const buttonskip = document.querySelector('.skip-link');
buttonskip.addEventListener('click', () => {
  maincontent.focus();
});

window.addEventListener('offline', () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Your Internet is Offline!',
    footer: 'Copyright &copy; Capstopne 2021 - CSD044',
  });
});
