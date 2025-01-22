// Importing Express and Controller Functions
import express from "express";
import { loginUser, registerUser, adminLogin } from "../controllers/userController.js";

// Creating a Router
const userRouter = express.Router()

// Defining Routes
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)

// Exporting the Router
export default userRouter