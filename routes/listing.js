  import methodOverride from "method-override"
  import express from "express"
  const router=express.Router();
  import wrapAsync from "../utils/wrapAsync.js";
  import expressError from "../utils/expressError.js";
  import { validateListings } from "../utils/validateListings.js";
  import { isLoggedIn } from "../middleware.js";
  import { listingSchema, reviewSchema } from "../schema.js";
  import listing  from "../models/listing.js";
  import {reviewSchema as Review} from "../models/reviews.js"
  router.use(methodOverride("_method"));

  //import controllder route.
  import {getListing, contactForm, postListing, editListings, updateRoute, deleteRoute, reviewId} from "../controller/listings.js"

  //use the multer
  import multer from "multer"
  import { storage } from "../cloudConfig.js";
  const upload=multer({storage})

  router.get("/new", isLoggedIn, (req, res)=>{
    res.render("listings/new.ejs");
  })  
  router.get("/contact", contactForm)


  router.route("/")
  .get( wrapAsync(getListing))
  .post(isLoggedIn, upload.single("listing[image]"), validateListings, wrapAsync(postListing));
  // validateListings,
  // .post( postListing);  
          // router.get("/", wrapAsync(async (req, res) => {
            //   const allListings = await Listing.find({});
            // }));

  // .post(upload.single("listing[image]"), (req, res)=>{
  //   res.send(req.file)
  // })
            

  //edit any listings route
  router.get("/:id/edit", isLoggedIn, wrapAsync (editListings));


  router.route("/:id")
  .put(isLoggedIn, upload.single("listing[image]"), validateListings,  wrapAsync(updateRoute))
  .delete(isLoggedIn, wrapAsync(deleteRoute));



  router.get("/donate", async (req, res) => {
    res.render("listings/donate.ejs");
  });
  
  router.get("/:id", reviewId);

  export {router};