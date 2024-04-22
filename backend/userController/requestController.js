const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require ("../middleware/catchAsyncErros.js") ;
const PendingRequest = require("../models/pendingRequestsModel.js");


exports.addPendingRequest = catchAsyncErrors( async (req , res ,next)=> {

    const {patientName , symptoms , age} = req.body;

    const pendingRequest = await PendingRequest.create(
        {
            patientName,
            age,
            symptoms,
        }
    )

    res.status(200).json({
        success : true ,
        pendingRequest
    })

})

exports.completeRequest = catchAsyncErrors( async (req , res ,next)=> {

    const {patientName , symptoms , age} = req.body;

    const pendingRequest = await PendingRequest.create(
        {
            patientName,
            age,
            symptoms,
        }
    )

    res.status(200).json({
        success : true ,
        pendingRequest
    })

})