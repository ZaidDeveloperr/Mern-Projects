import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async () => {
    cloudinary.config({ // This block configures Cloudinary with credentials stored in the environment variables 
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })
}

export default connectCloudinary