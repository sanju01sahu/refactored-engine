const jwt=require("jsonwebtoken")
const Auth=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    console.log(token)
    try {
        const decoded = jwt.verify(token, "hrutik");
        console.log(decoded,decoded.UserId)
        req.UserId=decoded.UserId
        next()
    } catch (error) {
        res.send(error)
    }
}
module.exports={Auth}