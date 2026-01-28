import wrapAsync from "../utils/wrapAsync.js";
import { saveRedirectUrl } from "../middleware.js";
import User from "../models/user.js"
console.log(User);

const signupPost=async (req, res, next)=>{
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
     res.redirect(`/listings/:${req.body._id}`);
 })
  }
  catch(e){
    console.log(e);
    req.flash("error", e.message);
  return  res.redirect("/signup");
  }
};



const loginPost=async (req, res)=>{
  // console.log(req.user);
  try {
    console.log(`Someone named ${req.user.username} signin to my site with ${req.user.email} email.`)
    req.flash("success", "Welcome back to our Listing site")
    let redirectUrl=res.locals.redirectUrl || "/listings";
   return res.redirect(redirectUrl)
  } 
  catch (error) {
    req.flash("error", error.message)
  }
};

const logOutGet=(req, res)=>{
  req.logout((err)=>{
   if(err){
     next(err);
   }
   req.flash("success", "you are logged out!")
  return res.redirect("/listings")
  })
}

export default {signupPost, loginPost, logOutGet}