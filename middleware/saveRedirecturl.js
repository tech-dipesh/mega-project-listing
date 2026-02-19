
export const saveRedirectUrl=(req, res, next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl;
    delete req.session.redirectUrl;
  }
  next()
}