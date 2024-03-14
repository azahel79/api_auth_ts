import { JwtPayload, sign, verify } from "jsonwebtoken";




export const createToken = async(id: any)=>{
   return await sign({id},<string>process.env.SECRET_KEY,{
    expiresIn: "10m"
   })
}

export const existingToken  = async(token:string)=>{
    return await verify(token,<string>process.env.SECRET_KEY);
}