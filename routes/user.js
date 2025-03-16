  const express=require("express");
  const router=express.Router();
  const User=require("../models/user.js");
  const wrapAsync = require("../utils/wrapAsync");
  const passport=require("passport");
  const { saveRedirectUrl } = require("../middleware.js");
  const userController=require("../controller/users.js")

  router.route("/signup")
  .get( async (req, res)=>{
    res.render("users/signup.ejs")
  })
  .post( wrapAsync(userController.signupPost));

  router.route("/login")
  .get(async (req, res)=>res.render("users/login.ejs"))
  .post( saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginPost
  );

  router.get("/logout", (userController.logOutGet))

  module.exports=router;