export const isLoggedIn=(req, res, next)=>{
  if(!req.isAuthenticated()){
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must logged in before create a listing.")
    return res.redirect("/login")
  }
  next()
}