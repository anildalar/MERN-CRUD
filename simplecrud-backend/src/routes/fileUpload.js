const PostModel = require('../models/PostModel');
let fileUpload = (req,res)=>{
    console.log(req.body.title);
    console.log(req.body.description);
    console.log();
    if(req.file.filename.split('.')[1] == 'png' || req.file.filename.split('.')[1] == 'jpg' || req.file.filename.split('.')[1] == 'jpeg'){
        const postmodelObject = new PostModel({
            title:req.body.title,
            description:req.body.description,
            image:req.file.filename
        });
        postmodelObject.save().then((d)=>{ //d = response data from mongodb
            res.status(201).json({
                msg:"Data Stored Successfuly",
                d:req.body,
                resdata:d,
                msg:"File Uploaded Success"
              });
        }).catch((e)=>{
            console.log(e);
        }).finally((all)=>{
    
        });
    }else{
        res.status(400).send({
            msg:"Please Upload image file only"
        });
    }

   // res.status(200).send({msg:"ok"});
}

module.exports = fileUpload;