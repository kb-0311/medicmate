const express = require ("express") ;
const { isAuthenticatedUser, autherizeRoles } = require("../middleware/auth");
const { addPendingRequest } = require("../userController/requestController");

const router = express.Router();

router.route("/request/add").post(isAuthenticatedUser , autherizeRoles("operator") ,addPendingRequest);


module.exports = router