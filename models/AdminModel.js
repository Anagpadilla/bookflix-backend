const DBConection = require('../config/BBDD');

const Admin = {
  //Modelo para obtener todos los ussuarios
  getAllUsers: async () => {
    const query = `SELECT * FROM usuarios;`;
    try {
      const result = await DBConection.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
      throw error;
    }
  },
  //Modelo para crear un nuevo libro
  createNewBook: async (
    title,
    cover,
    author,
    publisher,
    genre,
    amazon_link,
    summary,
    publisher_date
  ) => {
    const query = `INSERT INTO libros (titulo, portada, autor, editorial, genero, amazon_link, descripcion, fecha_publicacion)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
		RETURNING *;`;
    const data = [
      title,
      cover,
      author,
      publisher,
      genre,
      amazon_link,
      summary,
      publisher_date,
    ];
    try {
      const result = await DBConection.query(query, data);
      return result.rows[0];
    } catch (error) {
      console.error('Error al crear un libro:', error);
      throw error;
    }
  },
  //Modelo para editar los datos de un libro
  updateBook: async (
    bookId,
    title,
    cover,
    author,
    publisher,
    genre,
    amazon_link,
    summary,
    publisher_date
  ) => {
    const query = `UPDATE libros
	SET titulo = $1, portada = $2, autor = $3, editorial = $4, genero = $5, amazon_link = $6, descripcion = $7, fecha_publicacion = $8
	WHERE libro_id = $9
	RETURNING *;`;
    const data = [
      title,
      cover,
      author,
      publisher,
      genre,
      amazon_link,
      summary,
      publisher_date,
      bookId,
    ];
    try {
      const result = await DBConection.query(query, data);
      return result.rows[0];
    } catch (error) {
      console.error('Error al actualizar un libro:', error);
      throw error;
    }
  },
  //Modelo para eliminar un libro
  deleteBook: async (bookId) => {
    const query = `DELETE FROM libros
	WHERE libro_id = $1
	RETURNING *;`;
    const data = [bookId];
    try {
      const result = await DBConection.query(query, data);
      return result.rows[0];
    } catch (error) {
      console.error('Error al eliminar un libro:', error);
      throw error;
    }
  },
  //Modelo para eliminar un usuario
  deleteUser: async (userId) => {
    const query = `DELETE FROM usuarios
	WHERE usuario_id = $1
	RETURNING *;`;
    const data = [userId];
    try {
      const result = await DBConection.query(query, data);
      return result.rows[0];
    } catch (error) {
      console.error('Error al eliminar un usuario:', error);
      throw error;
    }
  },
};

module.exports = Admin;
