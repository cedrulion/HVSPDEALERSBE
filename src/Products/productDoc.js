const getOneProduct={
    tags:["Product"],
    summary:"getting information of product",
    description:"retrieving one product info",
    parameters:[
        {
            name:"product",
            in:"path",
            description:"product id",
            type:"string",
        }
    ],
    responses:{
        404:{
            description:"Product not found",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Not found",
                            data:{
                                message:"Product not found"
                            }
                        }
                    }
                }
            }
        },
        200:{
            description:"Product fetched succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Product fetched succesfully"
                            }
                        }
                    }
                }
            }
        },
    }

}

const getallProducts={
    tags:["Product"],
    summary:"Retrieving all products",
    description:"Retrieving all products",
    responses:{
        200:{
            description:"Products fetched succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Products fetched succesfully"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Retrieving product failed",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Retrieving product failed"
                            }
                        }
                    }
                }
            }
        },
    }

}

const deleteProduct={
    tags:["Product"],
    summary:"Deleting product",
    description:"Deleting product",
    parameters:[
        {
            name:"productID",
            in:"path",
            description:"product id",
            type:"string",
        }
    ],
    responses:{
        401:{
            description:"User is not authenticated",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"not authorised",
                            data:{
                                message:"You must login first"
                            }
                        }
                    }
                }
            }
        },
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Forbidden",
                            data:{
                                message:"You are not allowed to perform this action.For more info, contact your site Admin'"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"JWT errors",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                        }
                    }
                }
            }
        },
        200:{
            description:"Product deleted succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Product deleted succesfully"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Deleting product failed",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Deleting product failed"
                            }
                        }
                    }
                }
            }
        },
    }

}

const updateProduct={
    tags:["Product"],
    summary:"Updating product",
    description:"Updating product",
    parameters:[
        {
            name:"productID",
            in:"path",
            description:"product id",
            type:"string",
        }
    ],

    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        productName:{
                            type:'string',
                            description:"name of product",
                            example:"xxxxx",
                        },
                        productType:{
                            type:"string",
                            description:"type of the product",
                            example:'yyyyy'
                        },
                        descriptions:{
                            type:"string",
                            description:"description of product",
                            example:"xxxx"
                        },
                        manufacturer:{
                            type:"string",
                            description:"manufacturer of the product",
                            example:"xxxx"
                        },
                        quantity:{
                            type:"string",
                            description:"quantity of product",
                            example:"xxxx"
                        },
                        pricePerItem:{
                            type:"string",
                            description:"Item price",
                            example:"xxxx"
                        },
                    }
                }
            }
        }
    },

    responses:{
        401:{
            description:"User is not authenticated",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"not authorised",
                            data:{
                                message:"You must login first"
                            }
                        }
                    }
                }
            }
        },
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Forbidden",
                            data:{
                                message:"You are not allowed to perform this action.For more info, contact your site Admin'"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"JWT errors",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                        }
                    }
                }
            }
        },
        200:{
            description:"Product updated succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Product updated succesfully"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Updating product failed",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Updating product failed"
                            }
                        }
                    }
                }
            }
        },
    }

}


const registerProduct={
    tags:["Product"],
    summary:"Adding new product",
    description:"Adding new product",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        productName:{
                            type:'string',
                            description:"name of product",
                            example:"xxxxx",
                        },
                        productType:{
                            type:"string",
                            description:"type of the product",
                            example:'yyyyy'
                        },
                        descriptions:{
                            type:"string",
                            description:"description of product",
                            example:"xxxx"
                        },
                        manufacturer:{
                            type:"string",
                            description:"manufacturer of the product",
                            example:"xxxx"
                        },
                        quantity:{
                            type:"string",
                            description:"quantity of product",
                            example:"xxxx"
                        },
                        pricePerItem:{
                            type:"string",
                            description:"Item price",
                            example:"xxxx"
                        },
                    }
                }
            }
        }
    },

    responses:{
        401:{
            description:"User is not authenticated",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"not authorised",
                            data:{
                                message:"You must login first"
                            }
                        }
                    }
                }
            }
        },
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Forbidden",
                            data:{
                                message:"You are not allowed to perform this action.For more info, contact your site Admin'"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"JWT errors",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                        }
                    }
                }
            }
        },
        200:{
            description:"Added new product",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Added new product"
                            }
                        }
                    }
                }
            }
        },
        409:{
            description:"Empty fields",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Conflict",
                            data:{
                                message:"All fields are required"
                            }
                        }
                    }
                }
            }
        },
        409:{
            description:"Duplicate products",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Conflict",
                            data:{
                                message:"Product exists"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Unable to add new product",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Unable to add new product"
                            }
                        }
                    }
                }
            }
        },
    }

}


const addProductImages={
    tags:["Product"],
    summary:"Adding images of product",
    description:"Adding new product",
    parameters:[
        {
            name:"product",
            in:"path",
            description:"product id",
            type:"string",
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type: "object",
                    properties:{
                        product_image:{
                            type:'string',
                            description:"image of the product",
                            example:"xxxxx.png",
                            format: "binary"
                        },
                    }
                }
            }
        }
    },

    responses:{
        401:{
            description:"User is not authenticated",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"not authorised",
                            data:{
                                message:"You must login first"
                            }
                        }
                    }
                }
            }
        },
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Forbidden",
                            data:{
                                message:"You are not allowed to perform this action.For more info, contact your site Admin'"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"JWT errors",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                        }
                    }
                }
            }
        },
        200:{
            description:"Images added succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Images added succesfully"
                            }
                        }
                    }
                }
            }
        },
        409:{
            description:"Empty field",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Conflict",
                            data:{
                                message:"You need to insert one or more files"
                            }
                        }
                    }
                }
            }
        },
        404:{
            description:"Product not found",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"not Found",
                            data:{
                                message:"No such product found"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Adding images of products failed",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Adding images of products failed"
                            }
                        }
                    }
                }
            }
        },
    }

}

const deleteProductImages={
    tags:["Product"],
    summary:"Deleting images of product",
    description:"Deleting image of product",
    parameters:[
        {
            name:"product",
            in:"path",
            description:"product id",
            type:"string",
        },
        {
            name:"index",
            in:"path",
            description:"Index of image",
            type:"number",
        }

    ],
    responses:{
        401:{
            description:"User is not authenticated",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"not authorised",
                            data:{
                                message:"You must login first"
                            }
                        }
                    }
                }
            }
        },
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Forbidden",
                            data:{
                                message:"You are not allowed to perform this action.For more info, contact your site Admin'"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"JWT errors",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                        }
                    }
                }
            }
        },
        200:{
            description:"Images deleted succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Images deleted succesfully"
                            }
                        }
                    }
                }
            }
        },
        409:{
            description:"Empty field",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Conflict",
                            data:{
                                message:"You need to insert one or more files"
                            }
                        }
                    }
                }
            }
        },
        404:{
            description:"Product not found",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"not Found",
                            data:{
                                message:"No such product found"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Adding images of products failed",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"deleting image of products failed"
                            }
                        }
                    }
                }
            }
        },
    }

}


const productDoc={
    "/api/v1/products/addNewProduct":{
        post:registerProduct
    },
    "/api/v1/products/{product}":{
        get:getOneProduct
    },
    "/api/v1/products/addProductImages/{product}":{
        patch:addProductImages
    },
    "/api/v1/products/deleteProducImages/{product}/image/{index}":{
        patch:deleteProductImages
    },
    "/api/v1/products/{product}/delete":{
        delete:deleteProduct
    },
    "/api/v1/products/":{
        get:getallProducts
    },
    "/api/v1/products/{product}/update":{
        patch:updateProduct
    },
}

module.exports=productDoc;