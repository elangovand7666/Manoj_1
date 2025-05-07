import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import LawRoute from "./Route/LawRoute.js";
import JunRoute from "./Route/JunRoute.js";

const app=express();
dotenv.config();

const PORT=process.env.port;
const DB_URL=process.env.mongo_url;
app.use(cors());

app.use(bodyParser.json());

app.use('/api',LawRoute);
app.use('/api1',JunRoute);

mongoose.connect(DB_URL).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})