
// module.exports.postListing= async(req, res, next)=>{
//   //   // let{title, description, price, location, country}=req.body;
//   //   // let listing=req.body.listing;
//   //   // new Listing(listing);
//   //   // if(!req.body.listing){
//     //   //   throw new expressError(404, "listings is not valid")
//     //   // }
//     //   // this is the longer routerroach wit h code repeatable we can use the joi package to handle this required logic
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