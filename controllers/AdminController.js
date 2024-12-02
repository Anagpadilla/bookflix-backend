const Admin = require('../models/AdminModel');

//Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  const users = await Admin.getAllUsers();
  res.json(users);
  console.log('Obteniendo usuarios');
};
//Crear un nuevo libro
const createNewBook = async (req, res) => {
  const {
    titulo,
    portada,
    autor,
    editorial,
    genero,
    amazon_link,
    descripcion,
    fecha_publicacion,
  } = req.body;
  const newBook = await Admin.createNewBook(
    titulo,
    portada,
    autor,
    editorial,
    genero,
    amazon_link,
    descripcion,
    fecha_publicacion
  );
  res.json(newBook);
  console.log('Libro creado');
};
//Actualizar un libro
const updateBook = async (req, res) => {
  const {
    libro_id,
    titulo,
    portada,
    autor,
    editorial,
    genero,
    amazon_link,
    descripcion,
    fecha_publicacion,
  } = req.body;
  const updatedBook = await Admin.updateBook(
    libro_id,
    titulo,
    portada,
    autor,
    editorial,
    genero,
    amazon_link,
    descripcion,
    fecha_publicacion
  );
  res.json(updatedBook);
  console.log('Libro actualizado');
};
//Eliminar un libro
const deleteBook = async (req, res) => {
  const { bookId } = req.params;
  await Admin.deleteBook(bookId);
  console.log('Libro eliminado');
};
//Eliminar un usuario
const deleteUser = async (req, res) => {
  const { userId } = req.params;
  await Admin.deleteUser(userId);
  console.log('Usuario eliminado');
};

module.exports = {
  getAllUsers,
  createNewBook,
  updateBook,
  deleteBook,
  deleteUser,
};
