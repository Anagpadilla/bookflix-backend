const DBConection = require('../config/BBDD');

const Book = {
  //Modelo para obtener todos los libros
  getAllBooks: async () => {
    const query = `SELECT * FROM libros;`;
    try {
      const result = await DBConection.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error al obtener todos los libros:', error);
      throw error;
    }
  },
  //Modelo para obtener los detalles de un libro utilizando el id del libro
  getBookInfo: async (bookId) => {
    const query = `SELECT * FROM libros
      WHERE libro_id = $1;`;
    try {
      const result = await DBConection.query(query, [bookId]);
      return result.rows[0];
    } catch (error) {
      console.error('Error al obtener los detalles del libro:{bookId}', error);
      throw error;
    }
  },
};

module.exports = Book;
