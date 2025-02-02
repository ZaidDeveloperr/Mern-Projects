import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/ProductRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express(); // Create an Express app
const port = process.env.PORT || 4000; // Set port

// Connect to MongoDB and Cloudinary
connectDB();
connectCloudinary();

const allowedOrigins = [
    "https://e-commerce-frontend-iota-three.vercel.app",
    "https://e-commerce-admin-eight-theta.vercel.app"
  ];
  app.use(cors({
    origin: allowedOrigins, // Allow only frontend & admin
    credentials: true, // Allow cookies & authentication headers
  }));

// Middlewares
app.use(express.json()); // Middleware to parse JSON data in requests
app.use(cors()); // Middleware to enable CORS for all incoming requests

// API Endpoints
app.use('/api/user', userRouter); // User-related routes
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => { // Simple root route
    res.send("API Working"); // Send confirmation message
});

// Start server
app.listen(port, () => console.log(`Server started on PORT : ${port}`));
