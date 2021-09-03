const express = require('express');
const app = express();



var cors = require('cors')
app.use(cors());
app.use(express.json());



const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    console.log(file.originalname.split('.')[1]);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.originalname.split('.')[1])
  }
})

const upload = multer({ storage: storage })


//object.method()
//upload.signle()

const env = require('./dotenv');
const dbo = require('./db');

const getRoute = require('./routes/PostRoute');
const addPost = require('./routes/addPost');
const updatepost = require('./routes/updatePost');
const getPostByIdRoute = require('./routes/PostByIdRoute');
const deletePost = require('./routes/deletePost');
const fileUpload = require('./routes/fileUpload');


app.post('/profile_pic',upload.single('mypicture'),fileUpload);


app.get('/getposts',getRoute);
app.get('/getpostbyid/:postid',getPostByIdRoute);
app.post('/addpost',addPost);

app.put('/updatepost',updatepost);

app.delete('/deletepost/:postid',deletePost);

//Lets Define the port

app.listen(process.env.PORT,()=>{
    console.log(`The server is running on port ${process.env.PORT} `);
});