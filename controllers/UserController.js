const User = require('../models/UserModel');
const bcrypt = require('bcrypt');

//Controlador para registrar un nuevo usuario
const register = async (req, res) => {
  //Recibimos la información que el ussuario ha completado en el formulario de registro
  const { email, password, name, lastname, likedGenres, country } = req.body;
  try {
    //Por seguridad, ciframos la contraseña gracias a la librerya bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.createNewUser(
      email,
      hashedPassword,
      name,
      lastname,
      likedGenres,
      country
    );
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { register };
