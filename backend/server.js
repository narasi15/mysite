import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose, { mongo } from "mongoose";

dotenv.config();
import cors from "cors";
import productRoutes from "./routes/product.routes.js"

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json()); // allows us to accept JSON data in the req.body
//app.use(cors());
app.use(cors({ origin: "http://localhost:5173" })); 


app.use("/api/products", productRoutes)


const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
  }
};

startServer();

// app.listen(PORT, () => 
// {
//     connectDB();
//     console.log("Server started at http://localhost:" + PORT)}
// );