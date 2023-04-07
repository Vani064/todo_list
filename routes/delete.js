//calling express
const express =require('express');

//using routes for directing the request
const router = express.Router();
//for adding an item in list routing to delete controller 
const deletecontroller = require('../controllers/delete_controllers');
router.get('/',deletecontroller.deleteTodo);
module.exports = router;