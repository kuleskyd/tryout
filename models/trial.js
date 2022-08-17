const mongoose = require('mongoose')

//extracting Schema & model from mongoose
const {Schema, model} =mongoose;

// create a schema for your model 
const personSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Number:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
    
})

//creating a model for your schema
exports.person=model('person',personSchema);