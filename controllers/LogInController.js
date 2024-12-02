const bcrypt = require('bcrypt'); // Librería para comparar la contraseña encriptada con la que el ussuario ha introducido.
const jwt = require('jsonwebtoken'); //Con esta librería podemos crear un token con la información del ususario.
const User = require('../models/UserModel');

//Controlador para el inicio de sesión d eun usuario
const login = async (req, res) => {
  //En el body de la petición obtenemos el email y la contraseña
  const { email, password } = req.body;
  try {
    //Localizamos el usuario en la base de datos por su email
    const user = await User.findUserByEmail(email);
    if (user) {
      //Si todo es correcto, comprobamos que la contraseña sea correcta, ya que en la base de datos la tenemos encriptada para mejorar la seguridad.
      const match = await bcrypt.compare(password, user.contraseña);
      if (match) {
        //Si la contraseña es correcta, creamos un token que guarde la información del ususario y se envia al cliente.
        const token = jwt.sign(
          {
            id: user.usuario_id,
            email: user.email,
            name: user.nombre,
            lastname: user.apellido,
            likedGenres: user.genero_favorito,
            country: user.pais,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1h', //la sesión caduca en una hora
          }
        );
        res.status(200).json({ token, user });
        console.log('Inicio de sesión exitoso');
      } else {
        res.status(401).send('Credenciales incorrectas');
      }
    } else {
      res.status(404).send('Usuario no encontrado en nuestra base de datos');
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { login };
