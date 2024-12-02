const DBConection = require('../config/BBDD');

const Reviews = {
  //Modelo para crea una nueva reseña
  createNewReview: async (userId, bookId, comment, date) => {
    const query = `INSERT INTO reseñas (usuario_id, libro_id, comentarios, fecha) VALUES ($1, $2, $3, $4) RETURNING *`;
    const data = [userId, bookId, comment, date];
    try {
      const result = await DBConection.query(query, data);
      return result.rows[0];
    } catch (error) {
      console.error('Error al crear una reseña:', error);
      throw error;
    }
  },
  //Modelo para obtener todas las reseñas de un libro con el id del libro
  getBookReviews: async (bookId) => {
    const query = `SELECT reseñas.reseña_id,
  	usuarios.nombre,
 	reseñas.comentarios,
  	reseñas.fecha 
	FROM reseñas
	JOIN usuarios ON reseñas.usuario_id = usuarios.usuario_id
	WHERE reseñas.libro_id = $1;`;
    try {
      const result = await DBConection.query(query, [bookId]);
      return result.rows;
    } catch (error) {
      console.error('Error al obtener las reseñas del libro:', error);
      throw error;
    }
  },
};

module.exports = Reviews;
