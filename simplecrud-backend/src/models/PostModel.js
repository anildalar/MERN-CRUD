const mongoose = require('mongoose');
const PostModel = mongoose.model('Posts', { 
    title: {
                type:String,
                required:true
            },
    description: {
        type:String,
        required:true
    },
    image: {
        type:String
    },
 });

 module.exports = PostModel;