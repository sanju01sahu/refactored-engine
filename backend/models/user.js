const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    password:String,
    email:String,
})

const userModule=mongoose.model("user",userSchema)
module.exports={userModule}