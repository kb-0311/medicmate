const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require ("../middleware/catchAsyncErros.js") ;
const User = require("../models/userModels.js");
const sendToken = require("../utils/jwtToken");
//Register a user

exports.registerUser = catchAsyncErrors( async (req , res ,next)=> {

      
    const {name , email , password , role} = req.body;

    const user = await User.create({
        name , 
        email ,
        password ,
        role
    })

    sendToken(user , 200 , res);

})

// Login User

exports.loginUser = catchAsyncErrors( async (req , res , next) =>{


    const {email , password , role} = req.body;

    // Checking if user has given email and body both 

    if (!email || !password) {
        return next(new ErrorHandler("please enter email and password both" , 400))
    }
    const user = await User.findOne({email}).select("+password")

    console.log(user);

    if (!user) {
        return next(new ErrorHandler("invalid email or password 1 " , 401));
    }
    
    const isPasswordMatch = await user.comparePassword(password);
    
    if (!isPasswordMatch) {
        return next(new ErrorHandler("invalid email or password 2" , 401));
    }

    const userRole = user.role;

    if (role!=userRole) {
        return next(new ErrorHandler("roles do not match" , 401));

    }

    sendToken(user , 201 , res);
    
})

// Log Out User

exports.logout = catchAsyncErrors ( async (req , res , next)=>{

    res.cookie("token" , null ,{
        expires : new Date (Date.now),
        httpOnly : true
    })

    res.status(200).json({
        success : true ,
        message : "Logged out"
    })

})