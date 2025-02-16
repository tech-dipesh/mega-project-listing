const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const Review = require("./models/reviews.js");
const methodOverride=require("method-override");
let engine=require("ejs-mate")
const listings=require("./routes/listing.js")

let {listingSchema, reviewSchema}=require("./schema.js");

const wrapAsync=require("./utils/wrapAsync.js")
const expressError=require("./utils/expressError.js")

const path = require("path");
const { log } = require("console");
const { wrap } = require("module");


//this is for the listings that i moved to the app method to the listing: import the listings 

//redirect those listings to what i have made logic inside the listing.js . mount the listings router.
app.use("/listings", listings)


const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
main()
  .then(() => {
    console.log("succesfully connected to the airbnb database");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", engine);
app.use(express.static(path.join(__dirname, "public")));
// app.use("public/css", express.static(path.join(__dirname, "public/css")));

app.listen(8080, (err) => {
  if (err) console.error("Server start error:", err);
  console.log("Server running on port 8080");
});

// app.get("/testListings", async (req, res) => {
  //   try {
  //     let sampleListing = new Listing({
//       title: "my nepali villa on rent",
//       description:
//         "near to the beautiful mountain on the world, you can expect the best sunrise and best sunset from your room",
//       price: 599,
//       location: "Salyan, Baglung",
//       country: "Nepal",
//     });

//     await sampleListing.save();
//     res.send("test is working now and listing saved");
//   } catch (error) {
  //     res.send(error);
  //   }
  // });
  

  //this is for the validating the reviews same like listing
  let validateReview=(req, res, next)=>{
    const {error}=reviewSchema.validate(req.body);
    if(error){
      let errMsg=error.details.map((el)=>el.message).join(",");
      throw new expressError(400, errMsg)
    }  
    else{
      next()
    }
  }
  

app.use((err, req, res, next)=>{
  let {statusCode=404, message="something went wrong"}=err;
  res.status(statusCode).render("listings/error.ejs", {err})
  // res.status(statusCode).send(message);
})

//when any thing updated it should updated on reviews as this is for the reveiews area.
app.post("/listings/:id/reviews", validateReview, wrapAsync(async(req, res) => {
    try {
      const listing = await Listing.findById(req.params.id);
          if (!listing) {
              throw new expressError(404, "Listing not found");
            }
            
            const newReview = new Review({
              comment: req.body.review.comment,
              rating: req.body.review.rating
            });
          
          listing.reviews.push(newReview);
          
          await newReview.save();
          await listing.save();
          // res.send("your data is saved");
          // res.redirect(`/listings/${listing.id}`)
          // or
          res.redirect(`/listings/${req.params.id}`)
        } catch (error) {
          console.error("Review submission error:", error);
        }
      }));
      

// Corrected delete route for reviews
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
  let { id, reviewId } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/listings/${id}`);
}));


  // app.all("/", (req, res, next)=>{
  //         next( new expressError(404, "Chat Not found you are looking forward to!"))
  //       })