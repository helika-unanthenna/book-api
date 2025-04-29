const Book = require('../models/bookModels');

//get all books
const getAllBooks = (req, res) => {
    res.status(200).json(Book.getAll());
};

//get book by id
const getBookById = (req,res) =>{
    const book = Book.getById(req.params.id);
    if (!book) return res.status(404).json({message:'Book not found'});
    res.status(200).json(book);
};

//add new book
const addBook = (req,res) => {
    const {name, author, publishedYear} = req.body;

    if (!name || !author || !publishedYear) {
        return res.status(400).json({message:'Missing required fields'});
    }
    const newBook = Book.create({name, author, publishedYear});
    res.status(201).json(newBook);
};

//update a book
const updateBook = (req,res) =>{
    const updatedBook = Book.update(req.params.id, req.body);
    if (!updatedBook) return res.status(404).json({message:'Book not found'});
    res.status(200).json(updatedBook);
};

//delete a book
const deleteBook = (req,res) =>{
    const deleted = Book.removebook(req.params.id);
    if(!deleted) return res.status(404).json({message:'Book not found'});
    res.status(204).send();
};

module.exports={
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};
