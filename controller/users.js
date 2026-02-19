import wrapAsync from "../utils/wrapAsync.js";
import { saveRedirectUrl } from "../middleware/saveRedirecturl.js";
import User from "../models/user.js"

const signupPost=async (req, res, next)=>{
  const {id}=req.body;
  try{
  let {username, email, password}=req.body;
  const newUser=new User({email, username})
 const registeredUser=await User.register(newUser, password);
 req.login(registeredUser, (err)=>{
     if(err){
      return next(err);
     }
  req.flash("success", "welcome to the airbnb");
  return res.redirect(`/listings/:${id}`);
 })
  }
  catch(e){
    req.flash("error", e.message);
  return  res.redirect("/signup");
  }
};



const loginPost=async (req, res)=>{
  try {
    req.flash("success", "Welcome back to our Listing site")
    let redirectUrl=res.locals.redirectUrl || "/listings";
   return res.redirect(redirectUrl)
  } 
  catch (error) {
    req.flash("error", error.message)
  }
};

const logOutGet=(req, res, next)=>{
  req.logout((err)=>{
   if(err){
     next(err);
   }
   req.flash("success", "you are logged out!")
  return res.redirect("/listings")
  })
}

export default {signupPost, loginPost, logOutGet}