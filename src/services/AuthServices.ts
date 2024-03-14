import { JwtPayload } from "jsonwebtoken";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/UserModel";
import { hashPassword, verifiedPassword } from "../utils/hash.handle";
import { createToken } from "../utils/jwt.handle";


export const registerNewUser = async({username,email,password}: User)=>{
  const isUser = await   UserModel.findOne({email});
  if(isUser)  return{ok:false,msg: 'USUARIO_EXISTENTE'};
  const hashPass = await hashPassword(password);
  const newUser = await UserModel.create({username,email,password: hashPass});
  const token =await  createToken(newUser._id);
     return {
      ok: true,
      user: newUser, 
      token
     }
}
export const signInUser = async({email,password}:User)=>{
     const verifyUser = await UserModel.findOne({email});
     if(!verifyUser) return {ok: false,msg: "USUARIO_NO_EXISTENTE"};
     const isHashValid = await verifiedPassword(password,verifyUser.password);
     if(!isHashValid) return {ok: false,msg: "CONTRASEÑA_INCORRRECTA"};
     const token =await  createToken(verifyUser._id);
     return {
      ok: true,
      user: verifyUser,
      token
     }
}

export const   getInfoUser = async(user:any)=>{
      const isUser = await UserModel.findById(user.id);
      if(user.id !== isUser?._id.toString() ) return {ok:false,msg: "NO_HAY_PERMISO"}
     return {
      ok:true,
      user: isUser
     }
}