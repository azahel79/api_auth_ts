import { Request, Response } from "express"
import { handleHTTP } from "../utils/errors.server"
import { getInfoUser, registerNewUser, signInUser } from "../services/AuthServices";
import { errorsHTTPCLient } from "../utils/errors.client";
import {JwtPayload} from "jsonwebtoken"

interface RequestExtend extends Request {
     user?:   JwtPayload | string
 }
export const registerUser = async(req:Request,res: Response)=>{
  try {
     const responseData = await registerNewUser(req.body);
     if(!responseData.ok) return errorsHTTPCLient(res,responseData?.msg);
     res.status(200).json({msg: "USUARIO_CREADO",user: responseData})
  } catch (error) {
       handleHTTP(res,"hubo un error",error);
  }
} 
export const loginUser = async(req:Request,res:Response)=>{
       try {
          const responseData = await signInUser(req.body);
          if(!responseData.ok) return errorsHTTPCLient(res,responseData?.msg);
          res.status(200).json({msg: "USUARIO_LOGEADO",user: responseData});
       } catch (error) {
            handleHTTP(res,"hubo un error",error);
       }
}
export const getUser = async(req:RequestExtend,res: Response)=>{
    try {
  const responseData =  await getInfoUser(req.user);
  if(!responseData.ok) return handleHTTP(res,responseData?.msg);
   res.status(200).json({msg: "USUARIO",responseData});
    } catch (error) {
         handleHTTP(res,"hubo un error",error);
    }
}