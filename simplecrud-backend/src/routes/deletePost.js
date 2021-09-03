const fs = require('fs'); // File System
//fs is a buit-in module of Nodejs

const PostModel = require('../models/PostModel');


let deletePost = (req,res)=>{
       // let pid = req.params.postid;
        //Model.findOneAndDelete(conditions, callback) // executes

        //1 . Delete the mongodb Document
        PostModel.findOneAndDelete({ _id:req.params.postid },function(e,d){
            if(e) res.status(400).json(e);

            //2. Delete the file from server as well
            
            //console.log(d.image);
            fs.unlinkSync('/uploads/'+d.image);
            //deleteImage(d.image);
            //console.log(d);
            res.status(200).json({
                msg:"Data Deleted Successfully",
                data:d
            });
        })
};

module.exports = deletePost;