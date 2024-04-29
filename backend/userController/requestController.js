const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require ("../middleware/catchAsyncErros.js") ;
const PendingRequest = require("../models/pendingRequestsModel.js");
const CompletedRequest = require("../models/completedRequestsModel.js");

exports.addPendingRequest = catchAsyncErrors( async (req , res ,next)=> {

    const {patientName , symptoms , age , gender} = req.body;

    const pendingRequest = await PendingRequest.create(
        {
            patientName,
            age,
            symptoms,
            gender
        }
    )

    res.status(200).json({
        success : true ,
        pendingRequest
    })

})

exports.getAllRequests = catchAsyncErrors( async (req , res ,next)=> {


    const pendingRequest = await PendingRequest.find();

    res.status(200).json({
        success : true ,
        pendingRequest
    })

})

exports.getSingleRequest = catchAsyncErrors( async (req , res ,next)=> {

    const prescriptionId = req.params.prescriptionId;

    const pendingRequest = await PendingRequest.findById(
        {
            _id:prescriptionId
        }
    )

    res.status(200).json({
        success : true ,
        pendingRequest
    })

})

exports.completeRequest = catchAsyncErrors( async (req , res ,next)=> {

    const {requestId , predictedDisease , predictedPrescription} = req.body;

    const pendingRequest = await PendingRequest.find(
        {
            _id:requestId
        }
    )

    if (!pendingRequest) {
        return next(new ErrorHandler("request not found" , 404));
    }

    delete pendingRequest[0]._id;

    const completedRequest= await CompletedRequest.create(
        {
            patientName:pendingRequest[0].patientName,
            symptoms :pendingRequest[0].symptoms,
            predictedDisease,
            predictedPrescription,
            age:pendingRequest[0].age,
            gender:pendingRequest[0].gender
        }
    );


    await PendingRequest.deleteOne({
        _id:requestId
    })

    res.status(200).json({
        success : true ,
        completedRequest
    })

})

exports.getAllCompletedRequests = catchAsyncErrors( async (req , res ,next)=> {


    const completedRequests = await CompletedRequest.find();

    res.status(200).json({
        success : true ,
        completedRequests
    })

})