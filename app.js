/* eslint no-use-before-define:["error",{"functions":false}] */
class Library {
  constructor() {
    this.library = JSON.parse(localStorage.getItem('library') || '[]');
    this.id = 0;
  }

  // eslint-disable-next-line no-unused-vars
  addBook() {
    const book = {};
    this.id += 1;
    book.id = this.id;
    this.library.push(book);
  }

  removeBook(id) {
    this.library = library.filter((book) => book.id !== id);
  }


  saveLibrary() {
    localStorage.setItem('library', JSON.stringify(library));
  }
}

const myLibrary = new Library;

function addBook() {
  const book = {};
  book.author = document.getElementById('Author').value;
  book.title = document.getElementById('Title').value;
  myLibrary.addBook(book);
  displayBooks();
  SaveLibrary();
}

function removeBook(id) {
  myLibrary.removeBook(id);
  displayBooks();
  SaveLibrary();
}

function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = '';
  myLibrary.library.map((book) => {
    const divBook = document.createElement('div');
    const p = document.createElement('p'); 
    p.innerHTML = `"${book.title}" by ${book.author}`;
    const btn = document.createElement('button');
    btn.innerHTML = 'Remove';
    btn.addEventListener('click', () => {
      removeBook(book.id);
    });
  
  divBook.appendChild(p);
  })
}

window.onload = function () {
  displayBooks();
};

function SaveLibrary() {
 myLibrary.saveLibrary();
}
