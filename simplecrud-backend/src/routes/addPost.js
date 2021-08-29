const PostModel = require('../models/PostModel');
let addPost = (req,res)=>{
    const postmodelObject = new PostModel(req.body);

    postmodelObject.save().then((d)=>{
        res.status(201).json({
            msg:"Data Stored Successfuly",
            d:req.body
        });
    }).catch((e)=>{

    }).finally((all)=>{

    });
    
};

module.exports = addPost;