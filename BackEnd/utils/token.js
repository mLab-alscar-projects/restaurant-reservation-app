import jwt from "jsonwebtoken"

function generateToken(id){
    return jwt.sign({id:id},"eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImRmZjAxYjY3MDY4OTE4NTM4YWIzMDk5OTE2YTg4YjA2In0.e30.dU2xbTxQaIri0J2DHnXw76vRwGSyThByX5V6PLlJbz9Mc50cink1SvJzPq2qnp3lKj2dj2tUkAhGuTSBy7kQ-Q",{
        expiresIn:"1h",
    })
}

export default generateToken