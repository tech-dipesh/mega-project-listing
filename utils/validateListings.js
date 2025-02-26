// utils/validate.js
const { reviewSchema, listingSchema } = require("../schema.js");
const expressError = require("./expressError.js");

// add the logic of the validateListing
//create a function for validateListing with middleware:
let validateListings=(req, res, next)=>{
  const {error}=listingSchema.validate(req.body);
  if(error){
    let errMsg=error.details.map((el)=>el.message).join(",");
    throw new expressError(400, errMsg)
  }  
  else{
    next()
  }
}

module.exports = validateListings;