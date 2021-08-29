const PostModel = require('../models/PostModel');
let getPostByIdRoute = (req,res)=>{
    PostModel.find({_id:req.params.postid},function(e,d){
        if(e) res.status(400).json(e);
        res.status(200).json(d);
    });
};

module.exports = getPostByIdRoute;