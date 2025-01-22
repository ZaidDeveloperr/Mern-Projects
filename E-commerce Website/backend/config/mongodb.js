// Importing Mongoose:
import mongoose from "mongoose";

// Defining the connectDB Function:
const connectDB = async () => {
    //Listening for Connection Events:
    mongoose.connection.on('connected', () => { // listens for the connected event, which is emitted when Mongoose successfully connects to the MongoDB database.
        console.log('DB Connected') // Once the connection is established, it logs the message 'DB Connected'
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`) // method that connects Mongoose to the MongoDB database.
}

// Exporting the connectDB Function:
export default connectDB