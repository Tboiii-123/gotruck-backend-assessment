import express from "express";
import product from "../models/product.js"

const ProductRouter = express.Router();





// Creating a product
ProductRouter.post("/", async (req,res)=>{

    try{
        const {name,price,description,category}= req.body;

        if (!name || !price, !description ,!category) {
            return res.status(400).json({
                message:"Name, price,description or category required",
            });
        }

        const product_details = await product.create({
            name,
            price,
            description,
            category,
        });
        return res.status(201).json(product_details)
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            message: "Server error",
        })
    }
})


//Getting all product details
ProductRouter.get("/", async (req,res)=>{

    try{
        const products =await product.find();

        return res.status(200).json(products);
    }
    
    catch(error){
        console.error(error);
        return res.status(500).json({
            message: "Server error",
        });

    }


});



export default ProductRouter;