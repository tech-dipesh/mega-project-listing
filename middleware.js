export const isLoggedIn=(req, res, next)=>{
  
  if(!req.isAuthenticated()){
    // `req.session` helps store data between requests since HTTP can't "remember" past ones. It saves `req.originalUrl` to track where the user was heading before logging in, allowing them to be redirected back to the saved URL afterward.
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must logged in before create a listing.")
    return res.redirect("/login")
  }
  next()
}

export const saveRedirectUrl=(req, res, next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl;
    delete req.session.redirectUrl;
  }
  next();
}