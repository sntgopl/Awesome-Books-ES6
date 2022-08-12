import { DateTime } from './luxonCript.js';

const showDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const date = document.querySelector('#date');

export default showDate;
