const DBConection = require('../config/BBDD');

const User = {
  //Modelo que realiza la creación de un nuevo usuario
  createNewUser: async (
    email,
    password,
    name,
    lastname,
    likedGenres,
    country
  ) => {
    const result = await DBConection.query(
      'INSERT INTO usuarios ( email, contraseña, nombre, apellido, generos_favoritos, pais) VALUES ( $1, $2, $3, $4, $5, $6 ) RETURNING *',
      [email, password, name, lastname, likedGenres, country]
    );
    return result.rows[0];
  },
  //Modelo para obtener un usuario por su email utilizado en el controller de login
  findUserByEmail: async (email) => {
    const result = await DBConection.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );
    return result.rows[0];
  },
  //Modelo para obtener un usuario por su id utilizado en el middleware
  findUserById: async (id) => {
    const result = await DBConection.query(
      'SELECT * FROM usuarios WHERE usuario_id = $1',
      [id]
    );
    return result.rows[0];
  },
};

module.exports = User;
