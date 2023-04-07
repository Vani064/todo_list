
//calling express
const express =require('express');

//using routes for directing the request
const router = express.Router();
//for adding an item in list routing to add controller 
const addcontroller = require('../controllers/add_controllers');
router.post('/',addcontroller.add);
module.exports = router;