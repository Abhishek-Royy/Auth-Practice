const express = require("express");
const router = express.Router();
const authControllerAllPage = require("../controllers/auth.controller");
const validateMiddleware = require("../middleware/validate.middleware");
const signUpSchema = require("../validators/auth.validator");

router.route("/").get(authControllerAllPage.homePage);

router
  .route("/register")
  .post(validateMiddleware(signUpSchema), authControllerAllPage.registerPage);

router.route("/login").post(authControllerAllPage.loginPage);

module.exports = router;
