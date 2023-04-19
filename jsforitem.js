const addElementsToScreen = (books) => {
  const bookPhoto = document.getElementById("photo");
  bookPhoto.src = `${books.photo}`;

  const nameOfBook = document.getElementById("book-name");
  nameOfBook.innerHTML = books.name;

  const description = document.getElementById("book-description");
  description.innerHTML = books.description;

  const price = document.getElementById("book-price");
  price.innerHTML = `${books.price} €`;

  const bookLocation = document.getElementById("book-location");
  bookLocation.innerHTML = `The book is located in ${books.location}`;
};

const bookId = parseInt(localStorage.getItem("id"));

fetch(`https://643d6ef5f0ec48ce905c44fe.mockapi.io/books/${bookId}`)
  .then((res) => {
    return res.json();
  })
  .then((books) => {
    addElementsToScreen(books);
  })
  .catch((err) => {
    console.error(err);
  });

const setItemPage = (bookId) => {
  localStorage.setItem("id", bookId);
  addElementsToScreen(bookId);
};



const button = document.getElementById("deleteButton");
button.addEventListener("click", () => {
  const deleteBook = () => {
    fetch(`https://643d6ef5f0ec48ce905c44fe.mockapi.io/books/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const successMessage = document.getElementById("success-message");
        successMessage.innerHTML = "The book is deleted";
        //button.style.display = "none";
        button.disabled = true;
    
      })
      .catch((error) => console.error(error));
  };
  deleteBook();
});
