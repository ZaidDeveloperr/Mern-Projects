import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'

// Placing order using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        // Check if user exists
        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        // Prepare order data
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: 'COD',  // Default payment method
            payment: false,        // Default payment status
            date: Date.now(),
        };

        // Create new order
        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Clear cart data after order placement
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        // Respond with success message
        res.json({ success: true, message: 'Order Placed' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Placing order using Stripe Method
const placeOrderStripe = async (req, res) => {}

// Placing order using Razorpay Method
const placeOrderRazorpay = async (req, res) => {}

// All orders data for admin panel
const allOrders = async (req, res) => {

    try {

        const orders = await orderModel.find({})
        res.json({success: true, orders})
        
    } catch (error) {

        console.log(error)
        res.json({success: true, message: error.message})
        
    }

}

// User order data for frontend
const userOrders = async (req, res) => {

    try {

        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({success: true, orders})
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

// Update order status from admin panel
const updateStatus = async (req, res) => {

    try {

        const { orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message: "Status Updated"})
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }
