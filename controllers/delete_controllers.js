//calling database to delete a todo list item
const Todo = require('../models/todo');

//deleting the items from the list of ids we received from the second form
module.exports.deleteTodo = function(req,res){ 
    console.log(req.query);
    var id = req.query;

    var count = Object.keys(id).length;
     // getting the id from ui 
    for(let i=0;i<count;i++){ // looping over newsp  to delete all the checked value
        Todo.findByIdAndDelete(Object.keys(id)[i]).catch(function(err){
            if(err){
                console.log('err')
                return;
            }
        });
    }
return res.redirect('back');
};
//findByIdAndDelete function no longer accepts a callback function instead it accepts a promise.