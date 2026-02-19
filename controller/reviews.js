import expressError from "../utils/expressError.js";
import Review from "../models/reviews.js";
import Listing from "../models/listing.js";

const showReview=async(req, res, next) => {
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
    req.flash("success", "Your review is publisdhed.")
    return  res.redirect(`/listings/${req.params.id}`)
    } catch (error) {
      console.error("Review submission error:", error);
      next(error)
      }
  };

const destoryRoute=async (req, res, next) => {
  let { id, reviewId } = req.params;
  try {
    if(!req.author.equals(req.user._id)){
      req.flash("error", "you are not a owner of this review");
      return res.redirect(`/listings/${id}`);
    }
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Your review is deleted")
    return res.redirect(`/listings/${id}`);
  } catch (error) {
    next(error)
  }
  };

export default showReview;
export {destoryRoute}