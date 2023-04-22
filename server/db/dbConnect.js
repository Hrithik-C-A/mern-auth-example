const mongoose = require('mongoose')
require('dotenv').config()

module.exports= async function dbConnect(){
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('DB connectd succesfully')
    })
    .catch((error)=>{
        console.log('DB not connected')
        console.error(error);
    })
}


