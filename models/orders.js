const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const Orders=mongoose.model(
    "orders",
    new Schema({
        userId: {required: true,type: mongoose.Schema.Types.ObjectId,ref:"users", },
        products: [
          {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref:"products",
            },
            quantity: {
              type: Number,
              default: 1,
            },
            price:{
                type: Number,
            }
          },
          { _id : false }
        ],
        amount: { type: Number, required: true },
        shippingAddress: { type: Object, required: true },
        status: { type: String, default: "pending" },
        placedAt:{type:String,default:Date.now()}
    })
)

module.exports={Orders}