import express from "express"
import {listProducts, addProduct, removeProducts, singleProduct} from "../controllers/productController.js"
import upload from "../middleware/multer.js"
import adminAuth from "../middleware/adminAuth.js"


const productRouter = express.Router() // creates a new router in Express to handle product-related routes.

productRouter.post('/add',adminAuth, upload.fields([{name: 'image1', maxCount:1},{name: 'image2', maxCount:1},{name: 'image3', maxCount:1},{name: 'image4', maxCount:1}]), addProduct)
productRouter.post('/remove',adminAuth, removeProducts)
productRouter.post('/single', singleProduct)
productRouter.get('/list', listProducts)

export default productRouter
