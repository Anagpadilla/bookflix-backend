const { Pool } = require('pg');

//Configuramos la conexion con lla base de datos en postgree
const DBConection = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bookflix',
  password: '01Pirata',
  port: 5432,
});

DBConection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos', err.stack);
  } else {
    console.log('Conectado a la base de datos');
  }
});

module.exports = DBConection;
