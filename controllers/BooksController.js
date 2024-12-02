const Book = require('../models/BooksModel');

//Obtenemos todos los libros conectándonos con el modelo
const getAllBooks = async (req, res) => {
  const books = await Book.getAllBooks();
  res.json(books);
};
//Obtenemos los detalles de un libro
const getBookDetails = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.getBookInfo(bookId);
    if (!book) {
      return res.status(404).send('Libro no encontrado');
    }
    res.json(book);
    console.log('Obteniendo detalles del libro');
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getAllBooks, getBookDetails };
