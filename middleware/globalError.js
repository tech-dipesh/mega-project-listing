const globalErrorHandler=(err, req, res, next) => {
  let { statusCode = 404, message = "something went wrong" } = err;
  res.status(statusCode).render("listings/error.ejs", { message });
};
export default globalErrorHandler;