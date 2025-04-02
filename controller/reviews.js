const expressError=require("../utils/expressError.js")
const Review=require("../models/reviews.js")

const Listing = require("../models/listing")
//list of require models that i use on listing

module.exports.showReview=async(req, res) => {
  try {

    const listing = await Listing.findById(req.params.id);
        if (!listing) {
            throw new expressError(404, "Listing not found");
          }
          const newReview = new Review({
            comment: req.body.review.comment,
            rating: req.body.review.rating,
            author: req.user._id
          });
        
        listing.reviews.push(newReview);
        
        await newReview.save();
        await listing.save();
        // res.send("your data is saved");
        req.flash("success", "Your review is publisdhed.")
        // res.redirect(`/listings/${listing.id}`)
        // or
        res.redirect(`/listings/${req.params.id}`)
      } catch (error) {
        console.error("Review submission error:", error);
      }
    };

module.exports.destoryRoute=async (req, res) => {
  let { id, reviewId } = req.params;
  if(!req.author.equals(req.user._id)){
    req.flash("error", "you are not a owner of this review");
    res.redirect(`/listings/${id}`);
  }
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  req.flash("success", "Your review is deleted")
  res.redirect(`/listings/${id}`);
  };
