const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors());
app.use(express.json());


const env = require('./dotenv');
const dbo = require('./db');

const getRoute = require('./routes/PostRoute');
const addPost = require('./routes/addPost');
const updatepost = require('./routes/updatePost');
const getPostByIdRoute = require('./routes/PostByIdRoute');
const deletePost = require('./routes/deletePost');


app.get('/getposts',getRoute);
app.get('/getpostbyid/:postid',getPostByIdRoute);
app.post('/addpost',addPost);

app.put('/updatepost',updatepost);

app.delete('/deletepost/:postid',deletePost);

//Lets Define the port

app.listen(process.env.PORT,()=>{
    console.log(`The server is running on port ${process.env.PORT} `);
});