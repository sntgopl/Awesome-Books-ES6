import { DateTime } from '../node_modules/luxon/src/luxon.js';

const date = document.querySelector('#date');
const time = DateTime.now() || Date();

const showDate = () => {
  date.innerHTML = time;
};

export default showDate;