const express = require('express');
const { register } = require('../controllers/UserController');
const { login } = require('../controllers/LogInController');
const { middleware } = require('../middlewares/Auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
