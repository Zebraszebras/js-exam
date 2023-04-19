const booksWrapper = document.getElementById("books-wrapper");

const bookOptionCreation = (book) => {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");
    const image = document.createElement("img");
    image.setAttribute("src", book.photo);

    const titleWrapper = document.createElement("div");
    titleWrapper.setAttribute("class", "title-wrapper");

    const title = document.createElement("span");
    title.setAttribute("class", "title");

    const price = document.createElement("span");
    price.setAttribute("class", "price");

    const link = document.createElement("a");
    link.setAttribute("class", "book-link");
    link.href = "./item.html";

    link.addEventListener("click", () => {
        localStorage.setItem("id", book.id);
    });
title.innerHTML = book.name;
price.innerHTML = `${book.price} €`;
titleWrapper.append(title);
titleWrapper.append(price);

wrapper.append(image);
wrapper.append(titleWrapper);
link.append(wrapper);
booksWrapper.append(link);
};

fetch("https://643d6ef5f0ec48ce905c44fe.mockapi.io/books")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data
      .sort((a, b) => Number(a.price) - Number(b.price))
      .forEach((book) => {
        bookOptionCreation(book);
      });
  });
