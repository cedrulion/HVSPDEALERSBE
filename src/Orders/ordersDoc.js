const getOneOrder={
    tags:["Order"],
    summary:"getting information of order",
    description:"retrieving one order info",
    parameters:[
        {
            name:"order",
            in:"path",
            description:"order id",
            type:"string",
        }
    ],
    responses:{
        404:{
            description:"Order not found",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Not found",
                            data:{
                                message:"Order not found"
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
                                message:"Order fetched succesfully"
                            }
                        }
                    }
                }
            }
        },
    }

}

const getAllOrders={
    tags:["Order"],
    summary:"Retrieving all order",
    description:"Retrieving all order",
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
            description:"Orders fetched succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Orders fetched succesfully"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Retrieving orders failed",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Error while fetching orders"
                            }
                        }
                    }
                }
            }
        },
    }

}

const getMyOrders={
    tags:["Order"],
    summary:"Retrieving my order",
    description:"Retrieving my order",
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
            description:"My Orders fetched succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"My orders list"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Retrieving orders failed",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Unable to fetch your orders"
                            }
                        }
                    }
                }
            }
        },
    }

}

const changeOrderStatus={
    tags:["Order"],
    summary:"getting information of order",
    description:"retrieving one order info",
    parameters:[
        {
            name:"order",
            in:"path",
            description:"order id",
            type:"string",
        }
    ],

    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        status:{
                            type:'string',
                            description:"Order status",
                            example:"Delivered",
                        },
                        
                    }
                }
            }
        }
    },

    responses:{
        404:{
            description:"Order not found",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Not found",
                            data:{
                                message:"Order not found"
                            }
                        }
                    }
                }
            }
        },
        200:{
            description:"Order status updated succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Order status updated succesfully"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Unable to update order status",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Unable to update order status"
                            }
                        }
                    }
                }
            }
        },
    }

}

const placeOrder={
    tags:["Order"],
    summary:"Adding new product",
    description:"Adding new product",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        products:{
                            type:"Array",
                            description:"Products",
                            example:[{
                                productId:"64af1db97a58279f7e609587",
                                quantity:1
                            }]
                        },
                        shippingAddress:{
                            type:"Object",
                            description:"User shipping address",
                            example:{
                                province:"Sud",
                                district:"Muhanga",
                                sector:"Nyamabuye"
                            }
                        }
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
            description:"Place order",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Your order placed succesfully"
                            }
                        }
                    }
                }
            }
        },
        409:{
            description:"Some products are no longer available",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Conflict",
                            data:{
                                message:"Some products are no longer available"
                            }
                        }
                    }
                }
            }
        },
        409:{
            description:"You can not order product with less than one quantity",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Conflict",
                            data:{
                                message:"You can not order product with less than one quantity"
                            }
                        }
                    }
                }
            }
        },
        409:{
            description:"Some products quantity exceeds available quantity",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Conflict",
                            data:{
                                message:"Some products quantity exceeds available quantity"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Unable to place order",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Unable to place order"
                            }
                        }
                    }
                }
            }
        },
    }

}




const orderDoc={
    "/api/v1/orders/{order}":{
        get:getOneOrder
    },
    "/api/v1/orders":{
        get:getAllOrders
    },
    "/api/v1/orders/myOrders":{
        get:getMyOrders
    },
    "/api/v1/orders/{order}/changeStatus":{
        patch:changeOrderStatus
    },
    "/api/v1/orders/placeOrder":{
        post:placeOrder
    },
}

module.exports=orderDoc

