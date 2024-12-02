const express = require('express');
const {
  createNewReview,
  getBookReviews,
} = require('../controllers/ReviewsController');
const { middleware } = require('../middlewares/Auth');
const router = express.Router();

router.post('/newReview', middleware, createNewReview);
router.get('/:bookId', getBookReviews);

module.exports = router;
