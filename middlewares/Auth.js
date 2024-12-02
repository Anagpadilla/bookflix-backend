const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

//Los middlewares son funciones que podemos ejecutar antes de comunicarnos con los controladores para verificar que el token enviado en la petición es correcto y asegurarnos una mejor seguridad.
const middleware = async (req, res, next) => {
  // Obtener el token que se ha enviado en la cabecera de la petición
  const auth = req.headers['authorization'];
  if (!auth) return res.status(401).send('No existe token');
  const token = auth.split(' ')[1]; //Eliminamos la parte de Bearer

  try {
    ///Desciframos el token con la clave secreta que se encuentra en el archivo .env. Este tipo de archivos normalmente no se suben a los repositorios ya que suelen contener información sensible.
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //Después localizamos el usuario en la base de datos por su id.
    req.user = await User.findUserById(decoded.id);
    if (!req.user) {
      return res.status(404).send('Usuario no encontrado');
    }
    //Utilizamos next para que esta petición avance al controlador correspondiente.
    next();
  } catch (err) {
    console.error('Error al verificar el token:', err);
    return res.status(401).send('No autorizado');
  }
};

module.exports = { middleware };
