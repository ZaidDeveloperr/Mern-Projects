import mongoose from "mongoose"; //Importing Mongoose

const productSchema = new mongoose.Schema({ // Defining the Schema Structure
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean},
    date: { type: Number, required: true }
})

const productModel = mongoose.model.product || mongoose.model("product", productSchema)
// This line creates a Mongoose model called productModel.
// If the product model already exists it reuses that existing model. 
// If the product model doesn't exist, it creates a new one using the productSchema defined earlier.

export default productModel