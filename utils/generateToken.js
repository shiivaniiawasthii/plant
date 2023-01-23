import jwt from "jsonwebtoken"

export const generateToken =(id)=>{
        return jwt.sign({id},"honey123",{
                expiresIn:"1d"
        })
}