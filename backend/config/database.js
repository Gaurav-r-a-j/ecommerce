const mongoose = require("mongoose")


const connectDatabase =()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Db connection successfull")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDatabase