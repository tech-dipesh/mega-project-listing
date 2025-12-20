import express from "express"
  const router=express.Router();
  import User from "../models/user.js"
  import wrapAsync from "../utils/wrapAsync";
  import passport from "passport";
  import {saveRedirectUrl} from "../middleware.js"
  import userController from "../controller/users.js"

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

  router.get("/logout", userController.logOutGet)

  module.exports=router;