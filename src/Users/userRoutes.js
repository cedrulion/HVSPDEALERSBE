const express=require("express");

const{RegisterUser,getAllUsers,deleteUser,updateProfile,getUser,verifyAccount}=require('./userController');
const {protect,restrictTo}=require('../Middlewares/Middlewares')

const router=express.Router();

router.post('/register',RegisterUser);
router.get('/',getAllUsers);
router.delete('/:user/delete',protect,restrictTo("administrator","operator"),deleteUser)
router.get('/:user',getUser);
router.patch('/updateProfile',protect,updateProfile);
router.patch('/verifyAccount/:user',verifyAccount);

module.exports=router