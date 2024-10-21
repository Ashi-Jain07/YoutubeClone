import express from "express";
import { VideoRoutes } from "./Routes/Video.routes.js";
import mongoose from "mongoose";
import cors from "cors";
import { userRoutes } from "./Routes/user.routes.js";
import { channelRoutes } from "./Routes/channel.routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Start the server
app.listen(5500, () => {
    console.log("Server is running on port 5500");
});

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/");

const db = mongoose.connection;

db.on("open", () => {
    console.log("Connection Successful");
});

db.on("error", () => {
    console.log("Connection not Successful");
});

// Routes
VideoRoutes(app);
userRoutes(app);
channelRoutes(app);