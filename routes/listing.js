const methodOverride=require("method-override");

const express=require("express");
const router=express.Router();
// other routes that i also have to requird from app.js to here:
const wrapAsync=require("../utils/wrapAsync.js")
const expressError=require("../utils/expressError.js")
const validateListings = require("../utils/validateListings.js");
const {isLoggedIn}=require("../middleware.js");


let {listingSchema, reviewSchema}=require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

router.use(methodOverride("_method"));

//import controllder route.
let listingController=require("../controller/listings.js")

//use the multer
const multer=require("multer");
const {storage}=require("../cloudConfig.js");
const upload=multer({storage})

//create a new route with create
router.get("/new", isLoggedIn, (req, res)=>{
  res.render("listings/new.ejs");
})  
//go to contact form
router.get("/contact", listingController.contactForm)


router.route("/")
//index home routing, which i will also show the flash connect 
.get( wrapAsync(listingController.index))
// create a post route to accept the newer data of create a new list
.post(isLoggedIn, upload.single("listing[image]"), validateListings, wrapAsync(listingController.postListing));
// validateListings,
// .post( listingController.postListing);  
        // router.get("/", wrapAsync(async (req, res) => {
          //   const allListings = await Listing.find({});
          // }));

// .post(upload.single("listing[image]"), (req, res)=>{
//   res.send(req.file)
// })
          

//edit any listings route
router.get("/:id/edit", isLoggedIn, wrapAsync (listingController.editListings));


router.route("/:id")
// router.put("/:id", listingController.updateRoute);
.put(isLoggedIn, upload.single("listing[image]"), validateListings,  wrapAsync(listingController.updateRoute))
.delete(isLoggedIn, wrapAsync(listingController.deleteRoute));

//destory the routes which will delete that specific listing which will delete the listings


//this is for the showing the reviews id.
router.get("/:id", listingController.reviewId);

//showing the donate router.
router.get("/donate", async (req, res) => {
  res.render("listings/donate.ejs");
});

//redirect to the user to the listing if url is mispalled.



module.exports=router;