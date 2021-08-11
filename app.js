let library = [];

function addBook () {
  const book = {};
  book.title = document.getElementById('Title').value;
  book.author = document.getElementById('Author').value;
  library.push(book);
  displayBooks();
  saveLibrary();
}

function removeBook(title){
  library = library.filter(book => book.title !== title);
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
    btn.innerHTML = "Remove";
    btn.addEventListener('click', () => {
      removeBook(book.title);
    });
    divBook.appendChild(p);
    divBook.appendChild(p2);
    divBook.appendChild(hr);
    divBook.appendChild(btn);
    libraryDiv.appendChild(divBook);
    return book;
  });
}

window.onload = function() {
  library = JSON.parse(localStorage.getItem('library') || '[]');
  displayBooks();
}

function saveLibrary() {
  localStorage.setItem('library', JSON.stringify(library));
}
