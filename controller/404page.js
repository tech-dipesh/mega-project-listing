const Page404=async (req, res)=>{
  const {url}=req;
  return res.render("listings/index.ejs");
}
export default Page404;