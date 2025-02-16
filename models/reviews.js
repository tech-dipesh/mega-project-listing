const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min:0,
    max:5
  },
  createdAt:{
    type: Date,
    default:new Date()
  }
});

// const Review = mongoose.model("Review", reviewSchema);
// module.exports = Review;

// shorter approach of exporting module exports.
module.exports=mongoose.model("Review", reviewSchema)


// this is we can say one to many reviews.