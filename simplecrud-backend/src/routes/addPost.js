const AWS = require('aws-sdk');
const fs = require('fs'); //fs = filesystem path builtin library

const AWS_S3_ACCESS_KEY_ID = process.env.AWS_S3_ACCESS_KEY_ID;
const AWS_S3_SECRET_ACCESS_KEY=proccess.env.AWS_S3_SECRET_ACCESS_KEY;
const AWS_BUCKET_NAME=proccess.env.AWS_BUCKET_NAME;
const AWS_S3_LOCATION=process.env.AWS_S3_LOCATION;


//Lets create an s3 instance/object 
//const object = new ClassName();

const s3 = new AWS.S3({
    accessKeyId: AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: AWS_S3_SECRET_ACCESS_KEY
});

const params = {
    Bucket: AWS_BUCKET_NAME,
    CreateBucketConfiguration: {
        // Set your region here
        LocationConstraint: AWS_S3_LOCATION
    }
};

const PostModel = require('../models/PostModel');

let addPost = (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    console.log(req.file.filename);
    const postmodelObject = new PostModel({
        title:req.body.title,
        description:req.body.description,
        image:req.file.filename
    });

    postmodelObject.save().then((d)=>{
        //success
        res.status(201).json({
            msg:"Data Stored Successfuly",
            d:req.body
        });
    }).catch((e)=>{
        //error
        res.status(400).json(e);
    }).finally((all)=>{

    });
    
};

module.exports = addPost;