import './javascript/book.js';
import pageSelect from './javascript/spa.js';
import dateTime from './javascript/luxon.js';

pageSelect();

const date = document.querySelector('#date');

const dateTime = new Date(Date.now());
date.textContent = dateTime.toUTCString();