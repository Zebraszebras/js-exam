const button = document.getElementById("submit");

const fetchBooks = (newBook) => {
    fetch(`https://643d6ef5f0ec48ce905c44fe.mockapi.io/books`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((books) => {
        return books.json();
      })
      .then((books) => {
        const successMessage = document.getElementById("success-message");
        successMessage.innerHTML = "Book added";
  
        setTimeout(() => {
          window.location.replace("./main.html");
        }, 1000);
      });
  };

  button.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const photo = document.getElementById("photo").value;
    const location = document.getElementById("location").value;
  
    const newBook = {
      name: name,
      description: description,
      price: price,
      photo: photo,
      location: location,
    };
  
    fetchBooks(newBook);
  });

  const goBack = document.getElementById("goBack");
  goBack.addEventListener("click", () => {
    setTimeout(() => {
        window.location.replace("./main.html");
      }, 1000);
  });
