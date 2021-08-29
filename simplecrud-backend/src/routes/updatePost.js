const PostModel = require('../models/PostModel');

let updatepost = (req,res)=>{  //Anonymous Function
    //Model.findOneAndUpdate(condition,updatedata,cbfn);
    PostModel.findOneAndUpdate({ _id:req.body._id },{
        title:req.body.title,
        description:req.body.description,
        image:req.body.image
    },function(d){
        res.status(200).json({
            msg:"Updated"
        });

    });
};

module.exports = updatepost;