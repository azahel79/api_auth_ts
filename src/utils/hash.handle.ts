import { compare, hash } from "bcryptjs";

export const hashPassword = async(password: string)=>{
   return await hash(password,8);
}


export const verifiedPassword = async(password:string,hashPassword: string)=>{
   const comparePassword = compare(password,hashPassword);
   return comparePassword;
}