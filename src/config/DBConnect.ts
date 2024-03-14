import { connect } from "mongoose";
const connectDB = async():Promise<void>=>{    
     connect(<string>process.env.MONGODB_URI).then(()=>{
         console.log("se conecto la base de datos");
     }).catch(e=>{
        console.log(e);
     })
}


export default connectDB;