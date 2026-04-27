const globalErrorHandler=(err, req, res, next) => {
  console.log('err', err)
  let { statusCode = 404, message = "something went wrong" } = err;
  return res.status(statusCode).render("listings/error.ejs", { err });
};
export default globalErrorHandler;