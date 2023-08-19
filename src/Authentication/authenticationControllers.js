const {User}=require("../../models/users");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/Email");
const bcrypt = require("bcryptjs");
const { generateToken } = require("./../utils/GenerateToken");
const dotenv = require("dotenv");

dotenv.config();

const signToken = (uuid) => {
  return jwt.sign({ uuid }, process.env.JWT_SECRETE, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(409).json({
          message:"Email and password must not be empty",
        });
      }
  
      const user= await User.findOne({email:email });

      if (!user|| !(await bcrypt.compare(password, user.password))) {
        return res.status(409).json({
          message:"email or password don't match",
        });
      }
  
      const token = signToken(user._id);
      res.status(200).json({
        message: `You are logged in as ${user.firstName} ${user.lastName}`,
        token,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server Error",
        err: error.stack,
      });
    }
  };
  
  const forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
      //1) Get Userbased on posted email
      const user= await User.findOne({email:email});
  
      if (!user) {
        return res.status(404).json({
          message: "There is no User with that email address",
        });
      }
  
      //2) Generate random reset token
  
      const Token = generateToken();
  
      user.passwordResetToken = Token;
      await user.save();      
  
      //3) send email

        const URL = `<div style="width:50%;margin-left:auto;margin-right:auto"><a href='${process.env.BACKEND_URL}/api/v1/users/resetpassword/${Token}' style='padding:10px 30px;color:#fff;text-decoration:none; background-color:#ef4444; font-weight:700; border-radius:10px;'>Reset password</a></div>`;
        
        const message = `
        <div>
            <div style="font-weight:700"><h1>Password Reset Link</h1></div>
            <p>Please click on link below to reset your password.\n <strong>ignore this email if you did not request to reset password</strong><br/><br/>${URL}</p>
        </div>
        
        `;
  
      await sendEmail({
        email: user.email,
        subject: "Reset your password",
        message,
      });
      res.status(200).json({
        message: "We have sent you an email to reset your password,check you email inbox/spam",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Unable to reset password,Try again later",
        err: error.stack,
      });
    }
  };
  
  const resetPassword = async (req, res) => {
    try {
      /**
       * Get New Password
       * Get reset Token
       */
  
      const { password } = req.body;
      const Token = req.params.token;
  
      if (!password) {
        return res.status(409).json({
          message: "Password must not be empty",
        });
      }
  
      /**
       * Check if Userbelongs to token exist in our database
       */
  
      const user= await User.findOne({passwordResetToken: Token });
  
      if (!user) {
        return res.status(409).json({
          message: "Invalid token",
        });
      }
  
      /**
       * update UserPassword
       */
  
      const hashedPass = await bcrypt.hash(password, 12);
  
      user.password = hashedPass;
      user.passwordResetToken = "";
      await user.save();
  
      /**
       * Sending Result message to User.
       */
  
      res.status(200).json({
        message: "Your password has been updated successfully 👍🏾",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        err: error,
      });
    }
  };
  
  const changePassword = async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    try {
      //3.get Userfrom token by uuid
  
      const decoded = await jwt.verify(token, process.env.JWT_SECRETE);
      const uuid = decoded.uuid;
      const user= await User.findOne({_id: uuid });
      //4.get password from reques body
      const { oldpassword, newpassword1, newpassword2 } = req.body;
  
      //5. Check passwords
      const password = await bcrypt.compare(oldpassword, user.password);
      if (!password) {
        return res
          .status(409)
          .json({ message: "The old password is wrong, correct it and try again" });
      }
      if (newpassword1 !== newpassword2) {
        return res.status(409).json({ message: "new password does not match" });
      }
  
      //6.hash password
      const hashedPass = await bcrypt.hash(newpassword1, 12);
  
      //update pass
      user.password = hashedPass;
      await user.save();
  
      res.status(200).json({ message: "your password is updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Unable to change password",error:error });
    }
  
  };
  
  module.exports = {
    login,
    forgotPassword,
    resetPassword,
    changePassword,
  };