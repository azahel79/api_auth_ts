import { Response } from "express";

export const errorsHTTPCLient = (res:Response,msg:string | undefined,error?:any)=>{  
   return res.status(400).json({msg:msg})
}