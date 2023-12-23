const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://hrutik0729:hrutik@cluster0.9kopobq.mongodb.net/interview?retryWrites=true&w=majority")

module.exports={connection}