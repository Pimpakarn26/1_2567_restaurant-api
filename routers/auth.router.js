const express = require("express");
const router = express.Router();
const authController = require("../controlles/auth.controller");
const { verifySignUp } = require("../middlewares");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Header",
    "X-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolsExisted],
  authController.signup
);
router.post("/signin", authController.signin);

//router.post("/signup", authController.signup);
//router.post("/signin", authController.signin);

module.exports = router;
