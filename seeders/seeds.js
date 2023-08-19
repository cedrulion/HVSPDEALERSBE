const bcrypt = require("bcryptjs");
const { User }=require("../models/users");
const { connect }=require("../config/config.js");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const seedUser=async()=>{
    const adminUser=[{
        firstName: "Admin",
        lastName:"User",
        gender:"Male",
        email: process.env.USER_EMAIL,
        telNumber:"070000000",
        role:"administrator",
        password:await bcrypt.hash(process.env.USER_PASSWORD, 12),
        passwordResetToken:"",
        createdAt:Date.now(),
        isActive:true
    }]

    try {
        await User.deleteMany({email:process.env.USER_EMAIL});
        await User.insertMany(adminUser);
        console.log("Default user created succesfully")
    } catch (error) {

        console.log("Creating default user failed\n",error);
        
    }

}

connect().then(() => {
    console.log("Database connected!");
    seedUser().then(()=>{
        mongoose.connection.close();
    });
})

