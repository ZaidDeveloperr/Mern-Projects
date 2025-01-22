import express from "express"
import {listProducts, addProduct, removeProducts, singleProduct} from "../controllers/productController.js"


const productRouter = express.Router() // creates a new router in Express to handle product-related routes.

productRouter.post('/add', addProduct)
productRouter.post('/remove', removeProducts)
productRouter.post('/single', singleProduct)
productRouter.get('/list', listProducts)

export default productRouter