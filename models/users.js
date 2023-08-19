"use strict";
const mongoose=require("mongoose");
const { Schema }=require("mongoose");
const User = mongoose.model(
  "users",
  new Schema({
    firstName: {
      type: String,
      required:true
    },
    lastName: {
      type: String,
      required:true
    },
    gender: {
      type: String,
      required:true
    },
    email: {
      type: String,
      required:true,
      unique: true
    },
    telNumber: {
      type: String,
      required:true,
    },
    role:{
      type:String,
      defaultValue:"user"
    },
    password: {
      type: String,
      required:true
    },
    passwordResetToken: {
      type: String,
      default: "",
    },
    createdAt:{
      type:String,
      defaultValue:Date.now()
    },
    isActive:{
      type:Boolean,
      defaultValue:false
    }
  })
);
module.exports= {User};