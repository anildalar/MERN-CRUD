const PostModel = require('../models/PostModel');
let fileUpload = (req,res)=>{
    console.log(req.body.title);
    console.log(req.body.description);
    console.log(req.file.filename);
   // res.status(200).send({msg:"ok"});
  
    const postmodelObject = new PostModel({
        title:req.body.title,
        description:req.body.description,
        image:req.file.filename
    });
    postmodelObject.save().then((d)=>{
        res.status(201).json({
            msg:"Data Stored Successfuly",
            d:req.body,
            msg:"File Uploaded Success"
          });
    }).catch((e)=>{
        console.log(e);
    }).finally((all)=>{

    });

    
}

module.exports = fileUpload;