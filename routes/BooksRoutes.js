const express = require('express');
const {
  getAllBooks,
  getBookDetails,
} = require('../controllers/BooksController');
const router = express.Router();

router.get('/getBooks', getAllBooks);
router.get('/:bookId', getBookDetails);

module.exports = router;
