const Reviews = require('../models/ReviewsModel');

//Controlador para crear una nueva reseña
const createNewReview = async (req, res) => {
  const { bookId, comment } = req.body;
  const userId = req.user.usuario_id;
  const date = new Date().toISOString().split('T')[0];
  const newReview = await Reviews.createNewReview(
    userId,
    bookId,
    comment,
    date
  );
  res.json(newReview);
  console.log('Creando reseña');
};

//Controlador para obtener todas la reseñas de un libro
const getBookReviews = async (req, res) => {
  const { bookId } = req.params;
  const reviews = await Reviews.getBookReviews(bookId);
  res.json(reviews);
  console.log('Obteniendo reseñas del libro');
};

module.exports = { createNewReview, getBookReviews };
