const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { userModule } = require("../models/user")
const UserRoutes=express.Router()
UserRoutes.post("/add",async(req,res)=>{
    const{name,email,password}=req.body
    console.log(req.body)
    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        const user = new userModule({name,email,password:hashedPassword})
        const new_user = await user.save();

    res.status(200).send({
      status: "success",
      message: "A new user has been registered",
      data: {
        newUser: new_user,
      },
    });
    } catch (error) {
        res.status(400).send({err:error})
    }
})
UserRoutes.post("/login",async(req,res)=>{
    const{email,password}=req.body
    
    try {
       
        const userData=await userModule.findOne({email})
       
       
        if(userData){
            console.log(userData)
            const passwordMatch = await bcrypt.compare(password, userData.password)
            
            if(passwordMatch){
                const token = jwt.sign({ UserId: userData._id }, "hrutik");
                console.log(token)
                res.send({"mag":"login success","token":token})
            }
           
        
       }
       else{
        res.send({"mag":"no such user found"})
       }
    } catch (error) {
        res.status(400).send({err:error})
    }
})

module.exports={UserRoutes}