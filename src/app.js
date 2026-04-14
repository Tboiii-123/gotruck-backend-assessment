import express from "express";
import dotenv from "dotenv";

import Connection from './database/db.js'

import ProductRouter from "./routes/product.js"






dotenv.config()


const app =express();

app.use(express.json());


const server =async ()=>{

    try{
        await Connection();

        app.use("/products",ProductRouter);
     

      

        app.listen(3000,()=>{
            
            console.log("Server is running on http://localhost:3000")
        });
    }
    catch (error){
        console.error("Server Error",error.message);
    }
}

server();