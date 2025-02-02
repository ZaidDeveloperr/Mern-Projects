import jwt from "jsonwebtoken"


const adminAuth = async(req,res,next) => {
    try {
        const { token } = req.headers // Extracts the 'token' directly from the request headers.

        if(!token) {
            return res.json({success:false, message: "Not Authorized, Login Again"})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET) // Verifies the token using the JWT secret key stored in environment variables.

        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){ // Compares the decoded token with admin's email + password
            return res.json({success:false, message: "Not Authorized, Login Again"})
        }
        next() // Calls the next middleware if the token is valid and matches the admin credentials.

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export default adminAuth