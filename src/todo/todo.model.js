// Import 
const mongoose = require('mongoose')


// Schema
const ToDoSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    }
})

// Model
const ToDo = mongoose.model('ToDo', ToDoSchema)

module.exports = ToDo