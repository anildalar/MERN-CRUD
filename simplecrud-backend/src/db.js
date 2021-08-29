const mongoose = require('mongoose');
const env = require('./dotenv');

console.log(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@amazon-cluster.qnz6h.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,);
const dbo = mongoose.connect(
        `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@amazon-cluster.qnz6h.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
         {
             useNewUrlParser: true,
              useUnifiedTopology: true
        }
    );

dbo.then((d)=>{
    console.log('Connected '+d);
}).catch((e)=>{
    console.log(e);
}).finally((all)=>{});

module.exports = dbo;