const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// HOME PAGE
const homePage = async (req, res) => {
  try {
    res.status(200).send("Wellcome to codebyAbhishek new tutorial");
  } catch (error) {
    console.log(error, "homePage error..");
  }
};

// REGISTRATION PAGE
const registerPage = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email }); // exist or not
    if (userExist) {
      return res.status(400).json({ msg: "Email allready exist.." });
    }

    // const hashSaltRound = 10;
    // const hashPassword = await bcrypt.hash(user.password, hashSaltRound);

    const userCreatedData = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({
      msg: "Registration Successfully Done..",
      token: await userCreatedData.generateToken(), // jwt
      userId: userCreatedData._id.toString(),
    });
  } catch (error) {
    console.log(error, "registratinPage error");
  }
};

// LOGIN PAGE
const loginPage = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    // console.log(userExist);
    if (!userExist) {
      res.status(400).json({ message: "Invalid credential..!" });
    }

    const isMatchedPassword = await bcrypt.compare(
      password,
      userExist.password
    );

    if (isMatchedPassword) {
      res.status(200).json({
        message: "Login Successfull..",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(400).json({ message: "Invalid id or Password..!" });
    }
  } catch (error) {
    console.log("Login page Error", error);
  }
};

// USER PAGE LOGIC
const userPage = async (req, res) => {
  try {
    res.status(200).json({ msg: "Hi User" });
  } catch (error) {
    console.log(`Error in userPage ${error}`);
  }
};

module.exports = { homePage, registerPage, loginPage, userPage };
