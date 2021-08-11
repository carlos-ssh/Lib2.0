let library = [];

function addBook () {
  const book = {};
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;

}

function removeBook(title){
  library = library.filter(book => book.title !== title);

}


