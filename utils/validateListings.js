// utils/validate.js
import { reviewSchema, listingSchema } from "../schema.js";
import expressError from "./expressError.js";

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