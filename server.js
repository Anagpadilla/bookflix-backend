const express = require('express');
const cors = require('cors');
const UserRoutes = require('./routes/UsersRoutes');
const BookRoutes = require('./routes/BooksRoutes');
const LikedBooks = require('./routes/LikedBooksRoutes');
const AdminRoutes = require('./routes/AdminRoutes');
const ReviewsRoutes = require('./routes/ReviewsRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
//Estas son las rutas generales para acceder a cada controller de la aplicación
app.use('/users', UserRoutes);
app.use('/books', BookRoutes);
app.use('/likedBooks', LikedBooks);
app.use('/reviews', ReviewsRoutes);
app.use('/admin', AdminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
