const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const Product=mongoose.model("products",
new Schema({
    productName:{
        type:String,
        required:true
    },
    productType:{
        type:String,
        required:true,
    },
    descriptions:{
        type:String,
        default:""
    },
    manufacturer:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true,
    },
    pricePerItem:{
        type:String,
        required:true
    },
    productsImages:{
        type:Array,
        default:[]
    },
}))

module.exports={Product}