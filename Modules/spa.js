import {
  navs, sections, addButton, date,
} from './selectors.js';

navs.forEach((ele, index) => {
  ele.addEventListener('click', () => {
    sections.forEach((sec, i) => {
      sec.classList.add('hidden');
      navs[i].classList.remove('active');
    });
    ele.classList.add('active');
    sections[index].classList.remove('hidden');
  });
});

addButton.addEventListener('click', () => {
  sections.forEach((sec, i) => {
    sec.classList.add('hidden');
    navs[i].classList.remove('active');
  });
  sections[0].classList.remove('hidden');
  navs[0].classList.add('active');
});

date.innerHTML = Date();
