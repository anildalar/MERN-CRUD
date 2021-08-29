const PostModel = require('../models/PostModel');
let deletePost = (req,res)=>{
       // let pid = req.params.postid;
        //Model.findOneAndDelete(conditions, callback) // executes
        PostModel.findOneAndDelete({ _id:req.params.postid },function(e,d){
            if(e) res.status(400).json(e);
            res.status(200).json({
                msg:"Data Deleted Successfully"
            });
        })
};

module.exports = deletePost;