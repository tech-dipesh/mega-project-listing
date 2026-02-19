  import methodOverride from "method-override"
  import express from "express"
  import wrapAsync from "../utils/wrapAsync.js";
  import { validateListings } from "../utils/validateListings.js";
  import { isLoggedIn } from "../middleware/isLoggedIn.js";
  
  const router=express.Router();
  router.use(methodOverride("_method"));

  import {getListing, contactForm, postListing, editListings, updateRoute, deleteRoute, reviewId} from "../controller/listings.js"

  import multer from "multer"
  import { storage } from "../cloudConfig.js";
  const upload=multer({storage})

  router.get("/new", isLoggedIn, (req, res)=>{
    res.render("listings/new.ejs");
  })  
  router.get("/contact", contactForm)


  router.route("/")
  .get( wrapAsync(getListing))
  // .post(isLoggedIn, upload.single("listing[image]"), validateListings, wrapAsync(postListing));
  .post( postListing);


  router.get("/:id", reviewId);
  router.get("/:id/edit", isLoggedIn, wrapAsync (editListings));


  router.route("/:id")
  .put(isLoggedIn, upload.single("listing[image]"), validateListings,  wrapAsync(updateRoute))
  .delete(isLoggedIn, wrapAsync(deleteRoute));



  router.get("/donate", async (req, res) => {
    res.render("listings/donate.ejs");
  });
  

  export {router};