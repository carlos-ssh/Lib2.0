/* eslint-disable no-undef */
/* eslint no-use-before-define:["error",{"functions":false}] */
class Library {
  constructor() {
    this.library = JSON.parse(localStorage.getItem('library') || '[]');
    this.id = 0;
  }

  addBook(book) {
    this.id += 1;
    book.id = this.id;
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
  const book = {};
  book.author = document.getElementById('Author').value;
  book.title = document.getElementById('Title').value;
  myLibrary.addBook(book);
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
  library.map((book) => {
    const divBook = document.createElement('div');
    const p = document.createElement('p');
    p.innerHTML = book.author;
    const p2 = document.createElement('p');
    p2.innerHTML = book.title;
    const hr = document.createElement('hr');
    const btn = document.createElement('button');
    btn.innerHTML = 'Remove';
    btn.addEventListener('click', () => {
      removeBook(book.id);
    });
    divBook.appendChild(p);
    divBook.appendChild(p2);
    divBook.appendChild(hr);
    divBook.appendChild(btn);
    libraryDiv.appendChild(divBook);
    return book;
  });
}

window.onload = function () {
  library = JSON.parse(localStorage.getItem('library') || '[]');
  displayBooks();
};

function saveLibrary() {
  localStorage.setItem('library', JSON.stringify(library));
}
