import axios from "axios";
import Listing from "../models/listing.js";

 const contactForm = (req, res) => {
return  res.redirect("/contact");
};


 const postListing = async (req, res, next) => {
  try {
    const query = req.body.listing?.location;
    const response = await axios.get(
      `https://api.maptiler.com/geocoding/${encodeURIComponent(query)}.json`,
      {
        params: {
          key: process.env.MAP_TILER_KEY,
          limit: 1,
        },
      }
    );
    const feature = response.data.features[0];
    const geometry = {
      type: "Point",
      coordinates: feature.geometry.coordinates,
    };
    console.log('request is', req)
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url: req.file?.path, filename: req.file.filename };

    // newListing.geometry= response.data.features[0].geometry.coordinates;
    newListing.geometry = geometry;
     await newListing.save();
    req.flash("success", "New listing added!");
   return res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};

 const getListing = async (req, res, next) => {
  try {
    // data: listing[description], title, image, price, location, country
    const allListings = await Listing.find({});
    // return res.json({allListings, curr: req.user})
  return  res.render("listings/index.ejs", { allListings, currUser: req.user });
  } catch (error) {
    next(error)
  }
};

 const editListings = async (req, res, next) => {
  let { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested is doesn't exist");
      return res.redirect("/listings");
  }
    let originalImage = listing.image.url;
    originalImage.replace("/upload", "/upload/h_300,w_250");
     return  res.render("listings/edit.ejs", { listing, originalImage, currUser: req.user  });
  } catch (error) {
    next(error)  
  }
};

//update route
const updateRoute = async (req, res, next) => {
  let { id } = req.params;
  try {
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
      let url = req.file?.path;
      let filename = req.file.filename;
      listing.image = { url, filename };
      await listing.save();
    }
    req.flash("success", "Your Listing is updated");
    // return res.json({id})
    return res.redirect(`/listings/${id}`);
  } catch (error) {
    next(error)
  }
};

const deleteRoute = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Your listing is deleted");
  // return res.json({message: "success"})
  return res.redirect("/listings");
};

 const reviewId = async (req, res, next) => {
  let { id } = req.params;
  try {
    
    const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("owner");
    // .populate("reviews").populate("author");
    
    if (!listing) {
      // instead throw the message we can send the flash message
    req.flash(
      "error",
      "Listing you are trying to access is deleted or does not exist. "
    );
    // return res.json({message: "hello"})
    return  res.redirect("/listings");
  }
  return res.render("listings/show.ejs", { listing, currUser: req.user });
} catch (error) {
  next(error)
}
};


export {contactForm, postListing, getListing, editListings, updateRoute, deleteRoute, reviewId}