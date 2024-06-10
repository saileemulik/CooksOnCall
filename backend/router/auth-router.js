const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-Middleware");
const errorMiddleware = require("../middlewares/error-middleware");
const validate = require("../middlewares/validate-middleware")
const { signupSchema, loginSchema, cookSchema , regSchema, teamSchema, listingSchema} = require("../validators/auth-validator");
router.use(express.json());
// router.use(express.json());
router.get("/",auth.home);

router
.route("/signup")
.post(validate(signupSchema), auth.signup);

router
.route("/reg")
.post(validate(regSchema), auth.reg);

router
.route("/login")
.post(validate(loginSchema), auth.login);

router
.route("/cook")
.post(validate(cookSchema), auth.cook);

router
.route("/team")
.post(validate(teamSchema), auth.team);


router.route("/user").get(authMiddleware, auth.user);
router.use(errorMiddleware);

module.exports = router;