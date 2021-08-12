/* eslint no-use-before-define:["error",{"functions":false}] */
let library = [];
let cont = 0;

// eslint-disable-next-line no-unused-vars
function addBook() {
  const book = {};
  bookId = cont += 1;
  book.id = bookId;
  book.title = document.getElementById('Title').value;
  book.author = document.getElementById('Author').value;
  library.push(book);
  displayBooks();
  saveLibrary();
}

function removeBook(id) {
  library = library.filter((book) => book.id !== id);
  displayBooks();
  saveLibrary();
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
