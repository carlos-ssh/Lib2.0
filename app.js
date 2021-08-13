/* eslint-disable no-undef */
/* eslint no-use-before-define:["error",{"functions":false}] */
class Library {
  constructor() {
    this.library = JSON.parse(localStorage.getItem('library') || '[]');
    this.id = 0;
  }

  addBook(title, author) {
    this.id += 1;
    const book = {};
    book.id = this.id;
    book.title = title; 
    book.author = author;
    this.library.push(book);
  }

  removeBook(id) {
    this.library = this.library.filter((book) => book.id !== id);
  }

  saveLibrary() {
    localStorage.setItem('library', JSON.stringify(this.library));
  } 
}

const myLibrary = new Library();

// eslint-disable-next-line no-unused-vars
function addBook() {
  const author = document.getElementById('Author').value;
  const title = document.getElementById('Title').value;
  myLibrary.addBook(title, author);
  displayBooks();
  SaveLibrary();
  document.getElementById('Author').value = '';
  document.getElementById('Title').value = '';
}

function removeBook(id) {
  myLibrary.removeBook(id);
  displayBooks();
  SaveLibrary();
}

function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = '';
  let rowCount = 0;
  myLibrary.library.map((book) => {
    const divListElm = document.createElement('div');
    const divBtn = document.createElement('div');
    const divBook = document.createElement('div');

    if (rowCount % 2 === 0) {
      divListElm.classList.add('bg-secondary');
    }
    rowCount += 1;
    divListElm.classList.add('list-group-item');
    divListElm.classList.add('list-group-item-action');
    divListElm.classList.add('d-flex');
    divListElm.classList.add('justify-content-between');

    const bookText = document.createElement('h4');
    bookText.innerHTML = `"${book.title}" by ${book.author}`;
    const btn = document.createElement('button');
    btn.innerHTML = 'Remove';
    btn.classList.add('btn');
    btn.classList.add('bg-light');
    btn.classList.add('border-dark');
    btn.classList.add('border');
    btn.classList.add('border-3');
    btn.addEventListener('click', () => {
      removeBook(book.id);
    });

    divListElm.appendChild(divBook);
    divListElm.appendChild(divBtn);

    divBook.appendChild(bookText);
    divBtn.appendChild(btn);
    libraryDiv.appendChild(divListElm);

    return book;
  });
}

window.onload = function () {
  displayBooks();
};

function SaveLibrary() {
  myLibrary.saveLibrary();
}
