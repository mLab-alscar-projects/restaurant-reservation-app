import jwt from "jsonwebtoken"
function generateToken(id){
    return jwt.sign({id:id},process.env.JWT_SECRET,{
        expiresIn:"4h",
    })
}
export default generateToken