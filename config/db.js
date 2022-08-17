//importing your packges for
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();


//storing your mongoDB url in a variable
const db = process.env.DB_URL;


//connecting to our mongoDB database

exports.connectToDatabase = function(){
    mongoose.connect(db,)
    .then(
        ()=>{
            console.log('database connected successfully');
            
        }
    ).catch(error =>{
        console.log(`couldnt connect to database: ${error}`)
    })}