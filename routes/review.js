import methodOverride from "method-override"
import express from "express"
// other routes that i also have to requird from router.js to here:
import wrapAsync from "../utils/wrapAsync.js";
import expressError from "../utils/expressError.js";
import validateReview from "../utils/validate.js"
import { listingSchema, reviewSchema } from "../schema.js";

// const router=express.Router();
const router = express.Router({ mergeParams: true });

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


export {router}