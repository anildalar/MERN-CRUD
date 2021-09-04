const fs = require('fs'); // File System
const path = require('path');
//fs is a buit-in module of Nodejs
const PostModel = require('../models/PostModel');
let deletePost = (req,res)=>{
    // let pid = req.params.postid;
    //Model.findOneAndDelete(conditions, callback) // executes

    //1 . Delete the mongodb Document
    PostModel.findOneAndDelete({ _id:req.params.postid },function(e,d){
        if(e) throw e;
        //console.log(path.join("./uploads/" , d.image));
        //2. Delete the file from server as well
        //console.log(d.image);
        //fs.unlinkSync(path.join("./uploads/" , d.image)); 
        fs.unlinkSync("\\uploads\\" +d.image); 
        //console.log('File deleted!');
        res.status(200).json({
            msg:"Data Deleted Successfully",
            data:d
        });           
    })
};

module.exports = deletePost;