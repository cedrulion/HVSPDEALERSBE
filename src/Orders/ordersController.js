const { Orders } = require("../../models/orders")
const {Product}=require('../../models/products')
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();





const getOrders=async(req,res)=>{
    try {
        const getAllOrders=await Orders.find().populate("userId",{password:0,passwordResetToken:0}).sort({'placedAt':-1})
        .populate({path:"products",populate:"productId"});

        return res.status(200).json({
            message:"Orders fetched succesfully",
            data:{
                getAllOrders,
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"Error while fetching orders",
            error:error.stack
        })
    }

}


const placeOrder=async(req,res)=>{
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRETE);
    const userId = decoded.uuid;

    const {
        products,
        shippingAddress
    }=req.body;
   


    try {  
        
        const oneProductCosts=await Promise.all(products.map(async(product)=>{
            const oneProduct=await Product.findOne({_id:product.productId});
            product.price=Number(product.quantity) * Number(oneProduct.pricePerItem);

            oneProduct.quantity=oneProduct.quantity - product.quantity;
            await oneProduct.save();

            return product;
        }))
        
        let Amount=0;

        oneProductCosts.map((oneProduct)=>{
            Amount+=oneProduct.price;
        });


        const savedOrder = await Orders.create({
            userId,
            products,
            amount:Amount,
            shippingAddress,
        });


        return res.status(200).json({
            message:"Your order placed succesfully",
            data:{
                savedOrder
            }
        });
    } catch (err) {
        return res.status(500).json({
            message:"Unable to place order",
            err:err.stack
        });
    }
}


const checkProducts=async(req,res,next)=>{
    const {products}=req.body


    const Filter = async (products, predicate) => {
        const results = await Promise.all(products.map(predicate));
        return products.filter((_v, index) => results[index]);
    }

    //Check if all products Exists
    const productNotExist=await Filter(products, async (product) => {
        return !await Product.findOne({_id:product.productId});
    }); 


    if(productNotExist.length>0){
        return res.status(409).json({
            message:"Some products are no longer available",
            data:{
                productNotExist
            }
        })
    }

    const checkQuantity = await Filter(products, async (product) => {
        return product.quantity <=0
    });

    if(checkQuantity.length>0){
        return res.status(409).json({
            message:"You can not order product with less than one quantity",
        })
    }

    //Check if quantity do not exceeds available quantity
    const asyncRes = await Filter(products, async (product) => {
        const oneProduct=await Product.findOne({_id:product.productId});
        product.availableQuantity=Number(oneProduct.quantity);
        return product.quantity > oneProduct.quantity
    });
    

    if(asyncRes.length>0){
        return res.status(409).json({
            message:"Some products quantity exceeds available quantity",
            data:{
                asyncRes
            }
        })
    }

    next();

}


const getMyOrders=async(req,res)=>{
    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRETE);
    const userId = decoded.uuid;

    try {
        const myOrders=await Orders.find({userId:userId}).sort({'placedAt':-1})
        .populate({path:"products",populate:"productId"});

        return res.status(200).json({
            message:"My orders list",
            data:{
                myOrders
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"Unable to fetch your orders",
            error:error
        })
    }
}

const getOneOrder=async(req,res)=>{
    const order=req.params.order
    try {
        const getOrder=await Orders.findOne({_id:order}).populate("userId",{password:0,passwordResetToken:0}).populate({path:"products",populate:"productId"});

        return res.status(200).json({
            message:"Order fetched succesfully",
            data:{
                getOrder
            }
        })
    } catch (error) {
        return res.status(404).json({
            message:"Order not found"
        })
    }
}


const changeOrderStatus=async(req,res)=>{
    const order=req.params.order
    const {status} = req.body
    try {
        const getOrder=await Orders.findOne({_id:order});

        if(!getOrder){
            return res.status(404).json({
                message:"Order not found"
            })
        }

        getOrder.status=status;
        await getOrder.save();

        return res.status(200).json({
            message:"Order status updated succesfully",
            data:{
                getOrder
            }
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Unable to update order status",
            error:error
        })
    }
}





module.exports={getOrders,placeOrder,checkProducts,getMyOrders,getOneOrder,changeOrderStatus}