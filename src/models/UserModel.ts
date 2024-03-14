import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";


const userSchema = new Schema<User>({
     username: {
        type: String,
        required: true     
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})


const UserModel = model('users',userSchema);


export default UserModel;