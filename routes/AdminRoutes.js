const express = require('express');

const {
  getAllUsers,
  createNewBook,
  updateBook,
  deleteBook,
  deleteUser,
} = require('../controllers/AdminController');

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/newBook', createNewBook);
router.put('/updateBook/:bookId', updateBook);
router.delete('/deleteBook/:bookId', deleteBook);
router.delete('/deleteUser/:userId', deleteUser);

module.exports = router;
