const mongoose = require("mongoose");

const completedRequestSchema = new mongoose.Schema({
    patientName : {
        type : String , 
        required : [true , "Please enter valid  name"] ,

    } ,
    symptoms : {
        type:String,
        required: true
    } ,
    age : {
        type: Number,
    } ,
    predictedDisease : {
        type: String,
    } ,
    predictedPrescription : {
        type: String
    }
})



module.exports = mongoose.model("CompletedRequest" , completedRequestSchema);