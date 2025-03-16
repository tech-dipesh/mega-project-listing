const Joi=require("joi");
module.exports.listingSchema=Joi.object({
  listing:Joi.object({
    title:Joi.string().min(5).required(),
    description:Joi.string().min(5).required(),
    // url:Joi.string().allow("",),
    image: Joi.object({
      filename: Joi.string().allow(""),
      url: Joi.string().allow(""),
    }).optional(),
    price:Joi.number().min(0).required(),
    location:Joi.string().required(),
    country:Joi.string()
}).required()
});

module.exports.reviewSchema=Joi.object({
  review:Joi.object({
    rating:Joi.number().min(1).max(5),
    comment:Joi.string().required()
  }).required()
})