const express = require('express');
const router = express.Router();
const{
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
} = require ('../controllers/bookController');

// GET /books
router.get('/', getAllBooks);

// GET /books/id
router.get('/:id', getBookById);

// POST /books
router.post('/', addBook);

// PUT /books/id
router.put('/:id', updateBook);

// DELETE /books/id
router.delete('/:id', deleteBook);

module.exports = router;