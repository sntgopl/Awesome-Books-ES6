import {
  booklist,
  addBook,
  bookTitle,
  bookAuthor,
} from './Modules/selectors.js';

export function updateLocalStorage(data) {
  localStorage.setItem('data', JSON.stringify(data));
}

let booksArray;
/* eslint max-classes-per-file: ["error", 2] */
export class BooksArray extends Array {
  static get() {
    return Array;
  }

  removeBook(id) {
    booksArray = this.filter((ele, index) => index !== id);
  }
}
export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  pushBook() {
    booksArray.push(this);
  }
}

booksArray = new BooksArray(
  ...(JSON.parse(localStorage.getItem('data')) || []),
);

/* eslint-disable */
const removeUI = (id) => {
  booksArray.removeBook(id);
  addUI();
};

const addUI = () => {
  updateLocalStorage(booksArray);
  booklist.innerHTML = booksArray
    .map(
      (ele) => `<li>
    <p>'${ele.title}' by ${ele.author}</p>
    <button onclick="removeUI" class="card-remove-button" >Remove</button>
    </li>`,
    )
    .join('');
  const removeBtn = document.querySelectorAll('.card-remove-button');
  removeBtn.forEach((button, index) => button.addEventListener('click', () => {
    Book.removeUI(index);
  }));
};

addUI();

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  const bookObj = new Book(bookTitle.value, bookAuthor.value);
  bookObj.pushBook();
  addUI();
  bookTitle.value = '';
  bookAuthor.value = '';
});
