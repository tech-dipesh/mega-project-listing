const methodOverride=require("method-override");

const express=require("express");
// const router=express.Router();
const router = express.Router({ mergeParams: true });
// other routes that i also have to requird from router.js to here:
const wrapAsync=require("../utils/wrapAsync.js")
const expressError=require("../utils/expressError.js")
const validateReview = require("../utils/validate.js");
let {listingSchema, reviewSchema}=require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

const { isLoggedIn}=require("../middleware.js")

const reviewController=require("../controller/reviews.js");


  router.use(methodOverride("_method"));
//post the review route:
// router.post("/", isLoggedIn, validateReview, wrapAsync(async (req, res)=>{
//   let listing=await Listing.findById(req.params.id);
//   let newReview = new Review (req.body.review);
//   newReview.author;
//   listing.reviews.push(newReview);
//   await newReview.save();
//   await listing.save;
//   req.flash("success", "New Review Created");
//   res.redirect(`/listings/${listing._id}`);
// }))

//when any thing updated it should updated on reviews as this is for the reveiews area.
// router.post("/", (reviewController.showReview));
router.post("/", isLoggedIn,  validateReview, wrapAsync(reviewController.showReview));
// Corrected delete route for reviews
// router.delete("/:reviewId", (reviewController.destoryRoute));

router.delete("/:reviewId", isLoggedIn,  wrapAsync(reviewController.destoryRoute));



module.exports=router;