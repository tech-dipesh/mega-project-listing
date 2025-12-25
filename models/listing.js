import mongoose from "mongoose";
const Schema = mongoose.Schema;
import Review from "./reviews.js"
import user from "./user.js";
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    // type: String,
    // set: (v) =>
    //   v === ""
    //     ? "https://images.unsplash.com/photo-1554710869-95f3df6a3197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmVwYWx8ZW58MHx8MHx8fDA%3D"
    //     : v,
    url: String,
    filename: String,  
  },
  price: Number,
  location: String,
  country: String,
  reviews:[
    {
      type: Schema.Types.ObjectId,
      ref:"Review"
  }
],
owner: {
  type: Schema.Types.ObjectId,
  ref: "User"
},

geometry:{
  type: {
    type: String,
    enum: ['Point'],
    required: false
  },
  coordinates: {
    type: [Number],
    required: false
  }
}


});
listingSchema.post("findOneAndDelete", async (listing)=>{
  if(listing){
    await Review.deleteMany({_id: {$in: listing.reviews}})
  }
});

export default mongoose.model("Listing", listingSchema);