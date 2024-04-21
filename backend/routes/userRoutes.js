const express = require ("express") ;
const { registerUser, loginUser, getUserDetails } = require("../userController/userController");
const { isAuthenticatedUser, autherizeRoles } = require("../middleware/auth");
const { logout } = require("../userController/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get( isAuthenticatedUser , getUserDetails);


module.exports = router