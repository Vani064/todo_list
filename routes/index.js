//calling express
const express =require('express');

//using routes for directing the request
const router = express.Router();
//for adding an item in list routing to home controller 
const homecontroller = require('../controllers/home_controller');

//using middleware/parser to get data from form in key-value pairs
router.use(express.urlencoded());

router.get('/',homecontroller.home);

//routing the flow to add router for create item url
router.use('/create-item',require('./add'));

//routing the flow to delete router for delete item url
router.use('/delete-item',require('./delete'));

module.exports = router;