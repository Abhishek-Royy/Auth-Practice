const express = require("express");
const router = express.Router();
const authControllerAllPage = require("../controllers/auth.controller");

router.route("/").get(authControllerAllPage.homePage);

router.route("/register").post(authControllerAllPage.registerPage);

router.route("/login").post(authControllerAllPage.loginPage);

module.exports = router;
