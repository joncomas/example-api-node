const router = require('express').Router();
const accountController = require('../controllers/account');

router.get('/', accountController.get); 


module.exports = router;