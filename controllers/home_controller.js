//calling database to show on our webpage
const Todo = require('../models/todo');

//rendering home.ejs file and giving values of variables given in it
module.exports.home = function(req,res){
    Todo.find({}).then(function(todos){
    return res.render('home',{
        title: "TODO APP",
         todo_list: todos
    });
}).catch(function(err){
  console.log('error');
  return;
});
}
//find function no longer accepts a callback function instead it accepts a promise.