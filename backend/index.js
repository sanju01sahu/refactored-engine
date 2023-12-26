const express=require("express")
const { connection } = require("./db");
const cors=require("cors")
const { interviewRouter } = require("./routes/interview.routes");
const app=express()
app.use(express.json())
app.use(cors())

app.use("/interview",interviewRouter)
app.listen(3200,async()=>{
    try {
        await connection 
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
})
