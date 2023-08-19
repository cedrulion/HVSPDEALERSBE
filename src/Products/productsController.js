const {Product}=require('../../models/products')

const addNewProductsDetails=async(req,res)=>{
    const{
        productName,
        productType,
        descriptions,
        manufacturer,
        quantity,
        pricePerItem,
    }=req.body;

    try {
        if (!productName||!productType||!descriptions||!manufacturer||!quantity||!pricePerItem) {
            return res.status(409).json({
                message:"All fields are required"
            })
        }

        const productExists=await Product.findOne({productName:productName,manufacturer:manufacturer,productType:productType});

        if (productExists) {
            return res.status(409).json({
                message:"Product exists"
            })
        }

        const newProduct=await Product.create({
            productName,
            productType,
            descriptions,
            manufacturer,
            quantity,
            pricePerItem,
        })

        return res.status(200).json({
            message:"Added new product",
            data:{
                newProduct
            }
        })

        
    } catch (error) {
        return res.status(500).json({
            message:"Unable to add new product"
        })
    }
}

const getAllProducts=async(req,res)=>{
    try {
        const allProducts=await Product.find();

        return res.status(200).json({
            message:"Products fetched succesfully",
            data:{
                allProducts
            }
        })
    } catch (error) {
        return res.status(500).json({
            message:"Retrieving product failed"
        })
    }
}

const getOneProduct=async(req,res)=>{
    const product=req.params.product;

    try {
        const getProduct=await Product.findOne({_id:product});

        return res.status(200).json({
            message:"Product fetched succesfully",
            data:{
                getProduct
            }
        })
    } catch (error) {
        return res.status(404).json({
            message:"Product not found"
        })
    }
}

const addProductsImage=async(req,res)=>{
    const product=req.params.product;
    
    try {
        
        const findProduct=await Product.findOne({_id:product});

        if(!findProduct){
            return res.status(404).json({
                message:"No such product found"
            })
        }


        if (!req.files) {
            return res.status(409).json({
                message:"You need to insert one or more files"
            })
        }

        for (const file of req.files) {
            const { path } = file;
            findProduct.productsImages.push(path);
        };
        await findProduct.save(); 

        return res.status(200).json({
            message:"Images added succesfully"
        });
    } catch (error) {
        return res.status(500).json({
            message:"Adding images of products failed"
        })
    }
}

const deleteProductImage=async (req,res)=>{
    const product=req.params.product;
    const indexOfImage=req.params.index;

    try {
        const findProduct=await Product.findOne({_id:product});

        if(!findProduct){
            return res.status(404).json({
                message:"No such product found"
            })
        }

        if (indexOfImage>findProduct.productsImages.length-1) {
            return res.status(200).json({
                message:"Index not found"
            });
        }

        findProduct.productsImages.splice(indexOfImage,1);
        await findProduct.save();

        return res.status(200).json({
            message:"Image deleted succesfully"
        });

    } catch (error) {
        return res.status(500).json({
            message:"Deleting image of product failed"
        })
    }
}

const deleteProduct=async(req,res)=>{
    const product=req.params.product
    try {
        const deleteProduct=await Product.findByIdAndRemove({_id:product})

        return res.status(200).json({
            message:"Product deleted succesfully"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Deleting product failed",
            error:error
        })
    }
}

const updateProduct=async(req,res)=>{
    const product=req.params.product

    const{
        productName,
        productType,
        descriptions,
        manufacturer,
        quantity,
        pricePerItem,
    }=req.body;
    try {
        const updateProduct=await Product.findOne({_id:product});

        if(!updateProduct){
            return res.status(404).json({
                message:"Product not found"
            })
        }

        updateProduct.productName=productName;
        updateProduct.productType=productType;
        updateProduct.descriptions=descriptions;
        updateProduct.manufacturer=manufacturer;
        updateProduct.quantity=quantity;
        updateProduct.pricePerItem=pricePerItem;

        await updateProduct.save();

        return res.status(200).json({
            message:"Product updated succesfully",
        })

    } catch (error) {

        return res.status(500).json({
            message:"Updating product failed"
        })
        
    }
}


module.exports={addProductsImage,addNewProductsDetails,deleteProduct,updateProduct,getAllProducts,getOneProduct,deleteProductImage}
