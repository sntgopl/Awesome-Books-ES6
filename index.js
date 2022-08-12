import './javascript/book.js';
import pageSelect from './javascript/spa.js';
import dateTime from './javascript/luxon.js';

pageSelect();

const date = document.querySelector('#date');

date.textContent = dateTime.toUTCString();