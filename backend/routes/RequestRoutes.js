const express = require ("express") ;
const { isAuthenticatedUser, autherizeRoles } = require("../middleware/auth");
const { addPendingRequest, getAllRequests, completeRequest, getAllCompletedRequests } = require("../userController/requestController");

const router = express.Router();

router.route("/request/add").post(isAuthenticatedUser ,addPendingRequest);
router.route("/request/all").get(isAuthenticatedUser , getAllRequests);
router.route("/request/done").post(isAuthenticatedUser , autherizeRoles("doctor") , completeRequest);
router.route("/request/completed/all").get(isAuthenticatedUser , getAllCompletedRequests);


module.exports = router