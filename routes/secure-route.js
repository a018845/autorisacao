

const router  = require('express').Router(); 

const secureController = require('../controllers/secure-controller'); 

router.get('/', secureController.secure); 

module.exports = router; // export to use in server.js