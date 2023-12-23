const express=require("express")
const { jsInterviewPost, nodeInterviewPost, reactInterviewPost, jsIntervieEndPost } = require("../utils/openai")
const { Auth } = require("../middlewares/auth")

const InterRoutes=express.Router()
InterRoutes.use(Auth)
InterRoutes.post("/js",jsInterviewPost)
InterRoutes.post("/jsend" ,jsIntervieEndPost)
InterRoutes.post("/node",nodeInterviewPost)
InterRoutes.post("/react",reactInterviewPost)

module.exports={InterRoutes}
