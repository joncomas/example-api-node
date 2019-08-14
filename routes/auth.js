const router = require('express').Router();
const authController = require('../controllers/auth');

router.post('/token', authController.postToken);

router.get('/', authController.get)


module.exports = router;