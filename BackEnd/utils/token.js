import jwt from "jsonwebtoken"
function generateToken(id){
    return jwt.sign({id:id},"mySecretKey",{
        expiresIn:"4h",
    })
}
export default generateToken