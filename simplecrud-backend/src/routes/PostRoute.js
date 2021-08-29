const PostModel = require('../models/PostModel');
let getRoute = (req,res)=>{
    PostModel.find({},function(e,d){
        if(e) res.status(400).json(e);
        res.status(200).json(d);
    });
    
};

module.exports = getRoute;
