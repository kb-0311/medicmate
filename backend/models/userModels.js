const mongoose = require("mongoose");
const validators = require ("validator") ;
const bcrypt = require ("bcryptjs") ;
const jwt = require ("jsonwebtoken");
const crypto = require ("crypto");

const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : [true , "Please enter valid  name"] ,
    } ,
    email : {
        type : String , 
        required : [true , "Please enter valid  email"] ,
        unique : true , 
        validate : [validators.isEmail , "please enter a valid email"]
    } ,
    password : {
        type : String ,
        required : [true , "Please enter valid password"] ,
        minLength : [8, "name cannot be less than 8 characters"],
        select : false
    } ,
    
    role : {
        type :String ,
        enum :["doctor" , "operator" , "patient"],
        required:true

    } ,
    uuid: {
        type:String , 
        // required:true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    } ,

})

userSchema.pre("save" , async function (next) {
    if(this.isModified("password")) {
        this.password=await bcrypt.hash(this.password , 10);
    } else {
        next();
    }
})

//JWT Token 

userSchema.methods.getJWTToken = function() {
    return jwt.sign( {id : this._id} , process.env.JWT_SECRET , {
        expiresIn : process.env.JWT_EXPIRE ,
    })
}

//comparing the password

userSchema.methods.comparePassword = async function (enterPassword) {

    return await bcrypt.compare(enterPassword , this.password)

}






module.exports = mongoose.model("User" , userSchema);