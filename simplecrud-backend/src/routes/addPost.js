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