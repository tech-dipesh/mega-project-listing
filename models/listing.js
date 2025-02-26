const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review=require("./reviews.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1554710869-95f3df6a3197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmVwYWx8ZW58MHx8MHx8fDA%3D"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews:[
    {
      type: Schema.Types.ObjectId,
      ref:"Review"
  }
]
});
listingSchema.post("findOneAndDelete", async (listing)=>{
  if(listing){
    await Review.deleteMany({_id: {$in: listing.reviews}})
  }
});

const listing = mongoose.model("Listing", listingSchema);
module.exports = listing;


