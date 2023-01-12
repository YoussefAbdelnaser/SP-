import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ticketsRoute from "./routes/tickets.js"
import { rateLimit } from "express-rate-limit";
import cors from "cors";
const app = express();
dotenv.config();

const connect = async()=>{
   try{
        await mongoose.connect("mongodb+srv://AhmedSaeed:asdfzxcv1234@cluster0.gnmoh94.mongodb.net/?retryWrites=true&w=majority");
        console.log("connected to mongodb..");
   }catch(error){
    throw error;
   } 
};
//mongodb+srv://monstajoe:5o67PZxnrOyr4C2t@cluster0.almzzfl.mongodb.net/test
app.use(cors())

app.use(
    rateLimit({
        WindowMs: 300000,
        max:100,
        message: "You exceeded the maximum requests limit",
        headers: true,
    })
);

app.use(express.json())
app.use('/', ticketsRoute);
app.use('/teams/:team', ticketsRoute);
app.use('/:id',ticketsRoute)

app.listen(8800, ()=>{
    connect()
    console.log("connected.....")
})
