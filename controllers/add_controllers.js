//require database to add todo list item
const Todo = require('../models/todo');

//adding a data item in the database and if not successful giving error 
module.exports.add = function(req,res){
    console.log(req.body);
    Todo.create(
        req.body
    ).then((newtodo) => {
        console.log("+++++++", newtodo);
        return res.redirect('back');
    }).catch((err) => {
        console.log("error in creating a todo!");
        return;
    });
};

//create function no longer accepts a callback function instead it accepts a promise.