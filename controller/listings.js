const mapToken = process.env.MAP_TOKEN;
//list of require models that i use on listing
import { saveRedirectUrl, isLoggedIn } from "../middleware.js";
import wrapAsync from "../utils/wrapAsync.js";
import axios from "axios";


 const contactForm = (req, res) => {
  req.flash(
    "error",
    "sorry for the inconvinance, i will deploy contact form asap, contact me at @dipeshacademy linkedin"
  );
  res.redirect("/listings");
  // res.render("listings/contact.ejs");
};


 const postListing = async (req, res, next) => {
  try {
    const query = req.body.listing.location;
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

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url: req.file.path, filename: req.file.filename };

    // newListing.geometry= response.data.features[0].geometry.coordinates;
    // Create a geometry object as expected by the schema
    newListing.geometry = geometry;
    let saveListing = await newListing.save();
    console.log(saveListing);

    req.flash("success", "New listing added!");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};

 const getListing = async (req, res) => {
  const allListings = await Listing.find({});
  // res.send("router is running now");
  req.flash("success", "New listing added");
  res.render("listings/index.ejs", { allListings });
};

 const editListings = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested is doesn't exist");
    req.redirect("/listings");
  }
  let originalImage = listing.image.url;
  originalImage.replace("/upload", "/upload/h_300,w_250");
  res.render("listings/edit.ejs", { listing, originalImage });
};

//update route
const updateRoute = async (req, res) => {
  let { id } = req.params;
  // let listing=await Listing.findById(id);
  // if(!listing.owner.equals(rjeq.user)){
  //   req.flash("error", "you don't have the right to edit the ")
  // }
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Your Listing is updated");
  res.redirect(`/listings/${id}`);
  // res.redirect("index.ejs");
};

//delete route
const deleteRoute = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Your listing is deleted");
  res.redirect("/listings");
};

// show review id
 const reviewId = async (req, res) => {
  let { id } = req.params;
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
    res.redirect("/listings");
    // throw new expressError(404, "Listing not found");
  }
  res.render("listings/show.ejs", { listing, currUser: req.user });
};


export {contactForm, postListing, getListing, editListings, updateRoute, deleteRoute, reviewId}