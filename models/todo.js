const mongoose = require('mongoose');

//creating a schema
const todoschema = new mongoose.Schema({
    des:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required:true
    },
    cat:{
        type: String,
        required: false
    }
});


//exporting the schema for access to database
const Todo = mongoose.model('Todo',todoschema);
module.exports = Todo;