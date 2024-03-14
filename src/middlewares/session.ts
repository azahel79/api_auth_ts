import { NextFunction, Request,Response } from "express";
import { handleHTTP } from "../utils/errors.server";
import { errorsHTTPCLient } from "../utils/errors.client";
import { existingToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";


interface RequestExtend extends Request {
    user?:   JwtPayload | string
}

export const verifyToken = async(req: RequestExtend,res: Response,next:NextFunction)=>{   

    const token = req.header("x_auth")
    
    if(!token) return errorsHTTPCLient(res,'NO EXISTE TOKEN');
    try {
    
        const isUser = await existingToken(token);
        
        req.user = isUser;
        next();
    } catch (error) {
       handleHTTP(res,"TOKEN_INVALIDADO || TOKEN_EXPIRADO",error);
    }
}