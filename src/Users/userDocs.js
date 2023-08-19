const RegisterUser={
    tags:["User"],
    summary:"Register user",
    description:"Registering a new user",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        firstName:{
                            type:'string',
                            description:"firstName of the user",
                            example:"xxxxx",
                        },
                        lastName:{
                            type:"string",
                            description:"lastName of the user",
                            example:'yyyyy'
                        },
                        gender:{
                            type:"string",
                            description:"gender of the user",
                            example:"Male"
                        },
                        email:{
                            type:"string",
                            description:"enter email of the user",
                            example:"xxxxyyyy@gmail.com"
                        },
                        telNumber:{
                            type:"string",
                            description:"Contact number of the user",
                            example:"078888888"
                        },
                        password:{
                            type:"string",
                            description:"Password of the user",
                            example:"0000"
                        },
                    }
                }
            }
        }
    },

    responses:{
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
            description:"Invalid email",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Conflict",
                            data:{
                                message:"Please provide valid email"
                            }
                        }
                    }
                }
            }
        },
        409:{
            description:"Duplicate user email",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Conflict",
                            data:{
                                message:"User email already exists!"
                            }
                        }
                    }
                }
            }
        },
        201:{
            description:"User created",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Created",
                            data:{
                                message:"User created successfully",
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Failed to created user account",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Unable to register new user",
                            }
                        }
                    }
                }
            }
        },
    }
}


const updateProfile={
    tags:["User"],
    summary:"update user profile",
    description:"update user profile",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        firstName:{
                            type:'string',
                            description:"firstName of the user",
                            example:"xxxxx",
                        },
                        lastName:{
                            type:"string",
                            description:"lastName of the user",
                            example:'yyyyy'
                        },
                        gender:{
                            type:"string",
                            description:"gender of the user",
                            example:"Male"
                        },
                        telNumber:{
                            type:"string",
                            description:"Contact number of the user",
                            example:"078888888"
                        },
                    }
                }
            }
        }
    },

    responses:{
        200:{
            description:"Profile updated succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"OK",
                            data:{
                                message:"Profile updated succesfully",
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Unable to update profile",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Unable to update profile",
                            }
                        }
                    }
                }
            }
        },
    }
}




const verifyAccount={
    tags:["User"],
    summary:"Verify email of user",
    description:"Verify account",
    parameters:[
        {
            name:"user",
            in:"path",
            description:"user account id",
            type:"string",
        }
    ],
    responses:{
        404:{
            description:"User account not found",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Not found",
                            data:{
                                message:"No such user account found"
                            }
                        }
                    }
                }
            }
        },
        200:{
            description:"Account verified",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Your account has been verified"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Failed to verify account",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Account verification failed"
                            }
                        }
                    }
                }
            }
        },
    }

}



const getOneUser={
    tags:["User"],
    summary:"getting information of user",
    description:"retrieving one user info",
    parameters:[
        {
            name:"user",
            in:"path",
            description:"user account id",
            type:"string",
        }
    ],
    responses:{
        404:{
            description:"User not found",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Not found",
                            data:{
                                message:"User not found"
                            }
                        }
                    }
                }
            }
        },
        200:{
            description:"User fetched succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"User fetched succesfully"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Error while fetching user",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Error while fetching user"
                            }
                        }
                    }
                }
            }
        },
    }

}

const getallUsers={
    tags:["User"],
    summary:"Retrieving all users",
    description:"Retrieving all users",
    
    responses:{
        200:{
            description:"getting all users",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"Users list"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Unable to retrieve users",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Unable to retrieve users"
                            }
                        }
                    }
                }
            }
        },
    }

}

const deleteUser={
    tags:["User"],
    summary:"Deleting user",
    description:"Deleting user",
    parameters:[
        {
            name:"user",
            in:"path",
            description:"user account id",
            type:"string",
        }
    ],
    responses:{
        200:{
            description:"User deleted succesfully",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Ok",
                            data:{
                                message:"User deleted succesfully"
                            }
                        }
                    }
                }
            }
        },
        500:{
            description:"Unable to delete user",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            status:"Internal server error",
                            data:{
                                message:"Unable to delete user"
                            }
                        }
                    }
                }
            }
        },
    }

}

const userDoc={
    "/api/v1/users/register":{
        post:RegisterUser
    },
    "/api/v1/users/verifyAccount/{user}":{
        patch:verifyAccount
    },
    "/api/v1/users/{user}":{
        get:getOneUser
    },
    "/api/v1/users/{user}/delete":{
        delete:deleteUser
    },
    "/api/v1/users/":{
        get:getallUsers
    },
    "/api/v1/users/updateProfile":{
        patch:updateProfile
    },
}

module.exports=userDoc;