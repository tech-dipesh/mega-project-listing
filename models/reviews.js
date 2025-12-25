import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const reviewSchema = new Schema({
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
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

// const Review = mongoose.model("Review", reviewSchema);

// shorter approach of exporting module exports.