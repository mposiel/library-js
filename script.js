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
const popup = document.querySelector(".add-book-popup");

const addBookBtn = document.querySelector(".add-new-btn");
addBookBtn.addEventListener("click", () => {
  popup.style.visibility = "visible";
});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  popup.style.visibility = "hidden";
});

const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", () => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");

  for (let i = 0; i < myLibrary.length; i++) {
    if (title.value === myLibrary[i].title) {
      alert("You cannot add two books of the same title!");
      title.value = "";
      return;
    }
  }
  addBookToLibrary(title.value, author.value, pages.value, read.checked);
  popup.style.visibility = "hidden";
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;

  displayLibrary();
});

function displayLibrary() {
  const booksSection = document.querySelector(".books");

  for (let i = 0; i < myLibrary.length; i++) {
    const newDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    const readDiv = document.createElement("div");
    const readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.innerHTML = "Read";
    readButton.addEventListener("click", () => {
      if (myLibrary[i].read === false) {
        myLibrary[i].read = true;
      } else {
        myLibrary[i].read = false;
      }
      readDiv.innerHTML = `Read: ${myLibrary[i].read}`;
    });

    titleDiv.innerHTML = `Title: ${myLibrary[i].title}`;
    authorDiv.innerHTML = `Author: ${myLibrary[i].author}`;
    pagesDiv.innerHTML = `Pages: ${myLibrary[i].pagesCount}`;
    readDiv.innerHTML = `Read: ${myLibrary[i].read}`;

    newDiv.appendChild(titleDiv);
    newDiv.appendChild(authorDiv);
    newDiv.appendChild(pagesDiv);
    newDiv.appendChild(readDiv);

    newDiv.appendChild(readButton);

    newDiv.id = myLibrary[i].title;
    newDiv.classList.add("book");
    if (document.querySelector(`#${myLibrary[i].title}`) === null) {
      booksSection.appendChild(newDiv);
    }
  }
}

displayLibrary();
