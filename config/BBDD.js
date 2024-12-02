require('dotenv').config();
const { Pool } = require('pg');

BBDD_USER = process.env.BBDD_USER;
BBDD_HOST = process.env.BBDD_HOST;
BBDD_DATABASE = process.env.BBDD_NAME;
BBDD_PASSWORD = process.env.BBDD_PASSWORD;
BBDD_PORT = process.env.BBDD_PORT;

//Configuramos la conexion con lla base de datos en postgree
const DBConection = new Pool({
  user: BBDD_USER,
  host: BBDD_HOST,
  database: BBDD_DATABASE,
  password: BBDD_PASSWORD,
  port: BBDD_PORT,
});

DBConection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos', err.stack);
  } else {
    console.log('Conectado a la base de datos');
  }
});

module.exports = DBConection;
