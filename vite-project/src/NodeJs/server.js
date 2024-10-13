import express from "express";
import { VideoRoutes } from "./Routes/Video.routes.js";
import mongoose from "mongoose";
import cors from "cors"

const app = new express;
app.use(express.json());
app.use(cors());

app.listen("5500", () => {
    console.log("Server is running on port 5500");
});

mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;

db.on("open", () => {
    console.log("Connection Succesful");
});

db.on("error", () => {
    console.log("Connection not Succesful");
});

VideoRoutes(app);