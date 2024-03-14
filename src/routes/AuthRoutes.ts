import { Router } from "express";
import { getUser, loginUser, registerUser } from "../controllers/AuthControllers";
import { verifyToken } from "../middlewares/session";

const AuthRoutes = Router();


AuthRoutes.post("/register",registerUser);
AuthRoutes.post("/login",loginUser);
AuthRoutes.get("/user",verifyToken,getUser);

export default AuthRoutes;