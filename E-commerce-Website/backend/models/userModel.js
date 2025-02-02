import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true }, // ensures that the email value is unique in the database.
    cartData: { type: Object, default: {} }
}, {minimize: false})
// By default, Mongoose will remove empty objects (like {}) from documents when saving them to the database. By setting minimize: false, Mongoose will keep empty objects in the document (i.e., { cartData: {} } will be stored as is, even if the cartData object is empty).
// If minimize was set to true (which is the default behavior), an empty object would not be saved, and cartData would be omitted entirely if it was empty.

const userModel = mongoose.models.user || mongoose.model("user", userSchema)

export default userModel