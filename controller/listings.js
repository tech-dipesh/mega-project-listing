// // mapbox maptoken

// const mbxGeoCoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
// // const geocodingClient = mbxGeoCoding({ accessToken: mapToken });
// const maptiler = require('@maptiler/sdk').default;
// const mapboxgl = require('@mapbox/mapbox-sdk');
// const geocoding = require('@mapbox/mapbox-sdk/services/geocoding');

// const geocodingClient = geocoding({ accessToken: process.env.MAP_TOKEN });


  const Listing = require("../models/listing")
  //list of require models that i use on listing
  const {isL, isLoggedIn}=require("../middleware.js");
  const validateListings = require("../utils/validateListings.js");
  const wrapAsync=require("../utils/wrapAsync.js");
const { query } = require('express');


// module.exports.postListing= async(req, res, next)=>{
//   //   // let{title, description, price, location, country}=req.body;
//   //   // let listing=req.body.listing;
//   //   // new Listing(listing);
//   //   // if(!req.body.listing){
//     //   //   throw new expressError(404, "listings is not valid")  
//     //   // }
//     //   // this is the longer routerroach with code repeatable we can use the joi package to handle this required logic
//     const response = await geocodingClient.forwardGeocode({
//   query: 'Paris, France',  // You can replace this with dynamic i  nput
//   limit: 1
// })
// .send();

// console.log(response.body.features);
// let url=req.file.path;
//           let filename=req.file.filename;
//           const newListing=new Listing(req.body.listing);
//           newListing.owner=req.user._id;
//           newListing.image={url, filename};
//           await newListing.save();
//           req.flash("success", "New listings is added")
//           res.redirect("/listings");
//         };
        
        









// Remove Mapbox requires
// const mapboxgl = require('@mapbox/mapbox-sdk');
// const geocoding = require('@mapbox/mapbox-sdk/services/geocoding');

// Add axios for HTTP requests
const axios = require('axios');

// In your postListing route, replace the geocoding code:





// this is my second last code
// module.exports.postListing = async(req, res, next) => {
//   try {
//     // Geocoding with MapTiler
//     const query = req.body.listing.location; // Use user input from form
//     const response = await axios.get(
//       `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json`,
//       {
//         params: {
//           // params: { key: process.env.MAP_TOKEN },
//           key: process.env.MAP_TOKEN,
//           timeout: 300
//         }
//       }
//     );

//     const coordinates = response.data.features[0].geometry.coordinates;
    
//     const newListing = new Listing(req.body.listing);
//     newListing.geometry = {
//       type: "Point",
//       coordinates: coordinates
//     };
    
//     // Rest of your existing code...
//     newListing.owner = req.user._id;
//     console.log(response.body.features);

//     newListing.image = { url: req.file.path, filename: req.file.filename };
    
//     await newListing.save();
//     req.flash("success", "New listing added");
//     res.redirect("/listings");
//   } catch (error) {
//     console.error("Geocoding failed:", error);
//     req.flash("error", "Could not determine location coordinates");
//     return res.redirect("/listings/new");
//   }
//   // console.log(process.env.MAP_TOKEN)
// };

module.exports.contactForm=(req, res)=>{
  req.flash("error", "sorry for the inconvinance, i will deploy contact form asap, contact me at @dipeshacademy linkedin")
  res.redirect("/listings")
  // res.render("listings/contact.ejs");
}






module.exports.postListing = async (req, res, next) => {
  try {
    const query = req.body.listing.location;
    const response = await axios.get(
      `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json`,
      {
        params: {
          key: process.env.MAP_TILER_KEY,
          limit: 1
        },
      }
    );
    const feature = response.data.features[0];
    const geometry = {
      type: "Point",
      coordinates: feature.geometry.coordinates,
    };


    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url: req.file.path, filename: req.file.filename };

    // newListing.geometry= response.data.features[0].geometry.coordinates;
        // Create a geometry object as expected by the schema
   newListing.geometry=geometry;
    let saveListing=await newListing.save();
    console.log(saveListing);
    
    req.flash("success", "New listing added!");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};








module.exports.index= async (req, res) => {
 
          const allListings = await Listing.find({});
        // res.send("router is running now");
        req.flash("success", "New listing added");
        res.render("listings/index.ejs", { allListings });
        };
        
        module.exports.editListings=async(req, res)=>{
          let {id}=req.params;
  const listing=await Listing.findById(id)
  if(!listing){
    req.flash("error", "Listing you requested is doesn't exist");
    req.redirect("/listings");
  }
  let originalImage=listing.image.url
  originalImage.replace("/upload", "/upload/h_300,w_250");
  res.render("listings/edit.ejs", {listing, originalImage})
}

//update route
module.exports.updateRoute=async(req, res)=>{
  
  let {id}=req.params;
  // let listing=await Listing.findById(id);
  // if(!listing.owner.equals(req.user)){
  //   req.flash("error", "you don't have the right to edit the ")
  // }
  let listing= await Listing.findByIdAndUpdate(id, {...req.body.listing})
  if(typeof req.file !== "undefined"){
  let url=req.file.path;
  let filename=req.file.filename;
  listing.image={url, filename};
  await listing.save();
}
  req.flash("success", "Your Listing is updated")
  res.redirect(`/listings/${id}`)
  // res.redirect("index.ejs");
}

//delete route
module.exports.deleteRoute=async(req, res)=>{
  let {id}=req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Your listing is deleted")
  res.redirect("/listings");
};

// show review id
module.exports.reviewId=async(req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id).populate({
    path: "reviews",
    populate: { path: "author" }
  })
  .populate("owner");
  // .populate("reviews").populate("author");
  
  if (!listing) {
    // instead throw the message we can send the flash message
    
    req.flash("error", "Listing you are trying to access is deleted or does not exist. ")
    res.redirect("/listings")
    // throw new expressError(404, "Listing not found");
  }
  
  res.render("listings/show.ejs", {listing, currUser: req.user});
}

