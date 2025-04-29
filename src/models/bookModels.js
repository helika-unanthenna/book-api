let books = [
    { id: 1, name: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", publishedYear: 1999 },
    { id: 2, name: "A Study in Scarlet", author: "Arthur Conan Doyle", publishedYear: 1887 },
    { id: 3, name: "A Game of Thrones: A Song of Ice and Fire", author: "George R. R. Martin", publishedYear: 1996 },
    { id: 4, name: "Around the World in Eighty Days", author: "Jules Verne", publishedYear: 1873 },
    { id: 5, name: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", publishedYear: 1902 }
  ];

//get all books
const getAll = () => books;

//get one book by id
const getById = (id) =>books.find(book =>book.id === parseInt(id));

//add new book
const create = (bookData) => {
    const newBook = {id: books.length +1, ...bookData};
    books.push(newBook);
    return newBook;
};

//update book
const update = (id, updates) => {
    const bookIndex = books.findIndex(book => book.id === parseInt(id));
    if(bookIndex === -1) return null;
    books[bookIndex] = {...books[bookIndex], ...updates};
    return books[bookIndex];
};

//delete book
const removebook = (id) =>{
    const length = books.length;
    books = books.filter(book =>book.id !== parseInt(id));
    return books.length !== length;
};

module.exports = {getAll, getById, create, update, removebook};
