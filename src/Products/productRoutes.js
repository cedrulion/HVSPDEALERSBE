const express=require("express");
const {addProductsImage,addNewProductsDetails,deleteProduct,updateProduct,getAllProducts,getOneProduct,deleteProductImage}=require('./productsController')
const {protect,restrictTo}=require('../Middlewares/Middlewares')
const{ parser}=require('../utils/multer')


const router=express.Router();

router.patch('/addProductImages/:product',protect,restrictTo("administrator","operator"),parser.array('product_image'),addProductsImage);
router.patch('/deleteProducImages/:product/image/:index',protect,restrictTo("administrator","operator"),deleteProductImage);
router.post('/addNewProduct',protect,restrictTo("administrator","operator"),addNewProductsDetails);
router.get('/:product',getOneProduct)
router.delete('/:product/delete',protect,restrictTo("administrator","operator"),deleteProduct)
router.patch('/:product/update',protect,restrictTo("administrator","operator"),updateProduct);
router.get('/',getAllProducts);


module.exports=router