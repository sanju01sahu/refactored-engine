const express=require("express")
const { connection } = require("./db");
const cors=require("cors")
const { UserRoutes } = require("./routes/userrouter");
const { InterRoutes } = require("./routes/Inter");
const app=express()
app.use(express.json())
app.use(cors())
app.use("/user",UserRoutes)
app.use("/interview",InterRoutes)
app.listen(3200,async()=>{
    try {
        await connection 
        console.log("connected to database")
    } catch (error) {
        console.log(error)
    }
})
