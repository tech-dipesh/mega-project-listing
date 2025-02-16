const express=require("express");
const router=express.Router();
// other routes that i also have to requird from app.js to here:
const wrapAsync=require("../utils/wrapAsync.js")
const expressError=require("../utils/expressError.js")
let {listingSchema, reviewSchema}=require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");



// add the logic of the validateListing
  //create a function for validateListing with middleware:
  let validateListing=(req, res, next)=>{
    const {error}=listingSchema.validate(req.body);
    if(error){
      let errMsg=error.details.map((el)=>el.message).join(",");
      throw new expressError(400, errMsg)
    }  
    else{
      next()
    }
  }


//moved the router to here: with changed the app.get to router.get:

  //showing the donate router.
  router.get("/donate", async (req, res) => {
    res.render("listings/donate.ejs");
  });
  
  //redirect to the user to the listing if url is mispalled.

  //go to contact form
  router.get("/contact", (req, res)=>{
    res.render("listings/contact.ejs");
  })
  
  


  
  //index home routing, 
  router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
  // res.send("router is running now");
  res.render("listings/index.ejs", { allListings });
}));  


//create a new route with create
router.get("/new", (req, res)=>{
  res.render("listings/new.ejs");
  
})  

// create a post route to accept the newer data of create a new list
router.post("/", validateListing, wrapAsync( async(req, res, next)=>{
//   // let{title, description, price, location, country}=req.body;
//   // let listing=req.body.listing;
//   // new Listing(listing);
//   // if(!req.body.listing){
//   //   throw new expressError(404, "listings is not valid")  
//   // }
 
  const newListing=new Listing(req.body.listing);
  
//   // this is the longer routerroach with code repeatable instead we can use the joi package to handle this required logic
//   // if(!newListing.title){
//   //   throw new expressError(404, "Title is missing here")  
//   // }
//   // if(!newListing.description){
//   //   throw new expressError(404, "Description is missing here")  
//   // }
//   // if(!newListing.price){
//   //   throw new expressError(404, "Price is missing here")  
//   // }
  await newListing.save();
//   console.log(newListing);
  res.redirect("/listings")
}));  

//edit any listings route
router.get("/:id/edit", wrapAsync( async(req, res)=>{
  let {id}=req.params;
  const listing=await Listing.findById(id)
  res.render("listings/edit.ejs", {listing})
}));

//update routing with the put request:
router.put("/:id", validateListing,  wrapAsync( async (req, res)=>{
  let {id}=req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing})
  res.redirect(`/listings/${id}`)
  // res.redirect("index.ejs");
}));


//destory the routes which will delete that specific listing which will delete the listings
router.delete("/:id", wrapAsync( async(req, res)=>{
  let {id}=req.params;
  const deletedListing=await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
}));

//this is for the showing the reviews id.
router.get("/:id", wrapAsync(async(req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  if (!listing) {
      throw new expressError(404, "Listing not found");
    }
    res.render("listings/show.ejs", {listing});
  }));


  
module.exports=router;