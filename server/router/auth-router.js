const express = require("express");
const router = express.Router();
const authControllerAllPage = require("../controllers/auth.controller");
const validateMiddleware = require("../middleware/validate.middleware");
const signUpSchema = require("../validators/auth.validator");
const authMiddleware = require("../middleware/auth.middleware");

router.route("/").get(authControllerAllPage.homePage);

router
  .route("/register")
  .post(validateMiddleware(signUpSchema), authControllerAllPage.registerPage);

router.route("/login").post(authControllerAllPage.loginPage);

router.route("/user").get(authMiddleware, authControllerAllPage.user);

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/auth.controller");
// const validateMiddleware = require("../middleware/validate.middleware");
// const signUpSchema = require("../validators/auth.validator");
// const authMiddleware = require("../middleware/auth.middleware");

// router.route("/").get(authController.homePage);

// router
//   .route("/register")
//   .post(validateMiddleware(signUpSchema), authController.registerPage);

// router.route("/login").post(authController.loginPage);

// router.route("/user").get(authMiddleware, async (req, res) => {
//   try {
//     const userData = req.user;

//     if (!userData) {
//       return res
//         .status(401)
//         .json({ msg: "User data not available, Unauthorized" });
//     }

//     console.log(userData);
//     res.status(200).json({ msg: "Hi User" });
//   } catch (error) {
//     console.error(`Error in userPage: ${error}`);
//     res.status(500).json({ msg: "Internal Server Error" });
//   }
// });

// module.exports = router;
