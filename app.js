//const http = require('http');

//const port = 3000;

//const server = http.createServer((request,response)=>{
  //  response.setHeader('content-type','text/html')
    //response.statusCode = 201;
    //response.end('<h1>Hello World</h1>')
//})


//server.listen(port,()=>{
  //  console.log('server is running on port:' + port);
//})

const express = require('express')
const dotenv = require('dotenv')
const {connectToMongoDB, connectToDatabase} = require('./config/db.js');

const app = express();
connectToDatabase();
dotenv.config();

const port = process.env.port|| 3000;

app.get('/',(request,response)=>{
    response.send('Hello World')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
