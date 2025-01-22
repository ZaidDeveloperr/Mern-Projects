import validator from "validator"
import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET) // This function generates a JWT token using the id (user's _id) and a secret key (process.env.JWT_SECRET) from the .env file.
}

//Route for user login 
const loginUser = async (req,res) => {

    try {
        
        const {email, password} = req.body

        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success: false, message:"User doesn't exists"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch) {
            const token = createToken(user._id)
            res.json({success: true, token})
        }

        else{
            res.json({success: false, message: "Invalid Credentials"})
        }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

// Route for user register
const registerUser = async (req,res) => {

    // res.json({msg: "Resister API Working"}) // The function responds to the client with a simple JSON response: { msg: "Register API Working" }. This is just a placeholder message, indicating that the registration route is set up and working.

    try {
        const {name, email, password} = req.body
 
        // checking user already exists or not
        const exists = await userModel.findOne({email})
        if(exists) {
            return res.json({success: false, message:"User already exists"})
        }

        // validating email format and strong password
        if(!validator.isEmail(email)) {
            return res.json({success: false, message:"Please enter a valid email"})
        }
        if(password.length < 8 ) {
            return res.json({success: false, message:"Please enter a strong password"})
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt) // uses the bcrypt library to securely hash a user's password with a randomly generated salt. The salt ensures that even if two users have the same password, their hashes will be different.

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success: true, token})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

//Route for user login 
const adminLogin = async (req,res) => {}

export {loginUser, registerUser, adminLogin}