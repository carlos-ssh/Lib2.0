/* eslint no-use-before-define:["error",{"functions":false}] */
class Library {
  constructor {
    this.library = JSON.parse(localStorage.getItem('library') || '[]');
    this.id = 0;
  }

  // eslint-disable-next-line no-unused-vars
  function addBook() {
    const book = {};
    this.id += 1;
    book.id = this.id;
    this.library.push(book);
  }

  function removeBook(id) {
    this.library = library.filter((book) => book.id !== id);
  }


  function saveLibrary() {
    localStorage.setItem('library', JSON.stringify(library));
  }
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

  displayBooks();
};


