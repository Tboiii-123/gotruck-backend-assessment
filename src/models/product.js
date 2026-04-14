import mongoose from "mongoose";


const productSchema = new mongoose.Schema(

{
        name:{
            type:String,
            required:[true,"Product name is required"]
        },
        price:{
            type: Number,
            required:[true,"Price for this product is required"]

        },
        description:{
            type:String,
        },
        category:{
            type:String,
            required:[true,"Category for this product is required"]
        }

}


)
 


const product =mongoose.model("Product", productSchema);
 
export default product;
 