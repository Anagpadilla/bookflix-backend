const DBConection = require('../config/BBDD');

const LikedBooksInfo = {
  //Modelo para guaradr las preferencias de un libro con me gusta y no me gusta
  likeBook: async (userId, bookId, liked) => {
    const query = `
      INSERT INTO usuario_libro (usuario_id, libro_id, gustos)
      VALUES ($1, $2, $3)
      ON CONFLICT (usuario_id, libro_id) 
      DO UPDATE SET gustos = EXCLUDED.gustos
      RETURNING *;
    `;
    const values = [userId, bookId, liked];
    try {
      const result = await DBConection.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error al crear la relación usuario_libro:', error);
      throw error;
    }
  },

  // Modelo para obtener todos los libros que un usuario ha marcado como me gusta
  likedBooksByUser: async (userId) => {
    const query = `
   SELECT libros.*, usuario_libro.gustos
    FROM libros
    JOIN usuario_libro ON libros.libro_id = usuario_libro.libro_id
    WHERE usuario_libro.usuario_id = $1 AND usuario_libro.gustos = true; 
  `;
    try {
      const result = await DBConection.query(query, [userId]);
      return result.rows;
    } catch (error) {
      console.error('Error al obtener libros del usuario:', error);
      throw error;
    }
  },
};

module.exports = LikedBooksInfo;
