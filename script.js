const myLibrary = [];

function Book(title, author, pagesCount, read) {
    this.title = title;
    this.author = author;
    this.pagesCount = pagesCount;
    this.read = read;
}


function addBookToLibrary(title, author, pagesCount, read) {
    myLibrary.push(new Book(title, author, pagesCount, read));

}


function displayLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(
      `Title: ${myLibrary[i].title} Author: ${myLibrary[i].author} Number of pages: ${myLibrary[0].pagesCount} Already read: ${myLibrary[0].read}`
    );
  }
}


displayLibrary();