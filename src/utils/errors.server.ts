import { Response } from "express";

export const handleHTTP = (res: Response,msg:string | undefined,error?: any)=>{
     console.log(error);
    res.status(500).json({msg})
}  