const User = require("../models/user.js");
const wrapAsync=require("../utils/wrapAsync.js")
const { saveRedirectUrl } = require("../middleware.js");


module.exports.signupPost=async (req, res)=>{
  try{
  let {username, email, password}=req.body;
  const newUser=new User({email, username})
 const registeredUser=await User.register(newUser, password);
//  console.log(registeredUser);
 req.login(registeredUser, (err)=>{
     if(err){
      return next(err);
     }
     req.flash("success", "welcome to the airbnb");
    //  res.redirect(`/listings/:${req.body._id}`);
 })
  }
  catch(e){
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.loginPost=async (req, res)=>{
  // console.log(req.user);
  console.log(`Someone named ${req.user.username} signin to my site with ${req.user.email} email.`)
  req.flash("success", "Welcome back to our Listing site")
  let redirectUrl=res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl)
};

module.exports.logOutGet=(req, res)=>{
  req.logout((err)=>{
   if(err){
     next(err);
   }
   req.flash("success", "you are logged out!")
   res.redirect("/listings")
  })
}