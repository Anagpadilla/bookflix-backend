const LikedBooksInfo = require('../models/LikedModel');

//Controlador que gestiona las preferencias de me gusta o no me gusta de un ussuario sobr eun libro concreto.
const likeBook = async (req, res) => {
  //Obtenemos el id del usario en el middleware si el token en la peticion es correcto.
  const userId = req.user.usuario_id;
  const { bookId, liked } = req.body;
  try {
    await LikedBooksInfo.likeBook(userId, bookId, liked);
    res.status(201).send('Libro guardado como me gusta');
  } catch (error) {
    console.error('Error al guardar el libro como me gusta:', error);
    res.status(500).send('Error al guardar el libro');
  }
};

//Obtenemos todos los libros que un ususario ha marcado como me gusta.
const getLikedBooks = async (req, res) => {
  const userId = req.user.usuario_id;
  try {
    const books = await LikedBooksInfo.likedBooksByUser(userId);
    res.json(books);
  } catch (error) {
    console.error('Error al obtener libros que le gustan al usuario:', error);
    res.status(500).send('Error al obtener los libros');
  }
};

module.exports = { getLikedBooks, likeBook };
