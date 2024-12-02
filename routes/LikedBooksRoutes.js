const express = require('express');
const {
  likeBook,
  getLikedBooks,
} = require('../controllers/LikedBooksController');
const { middleware } = require('../middlewares/Auth');
const router = express.Router();

router.get('/getLikedBooks', middleware, getLikedBooks);
router.post('/likeBook', middleware, likeBook);

module.exports = router;
