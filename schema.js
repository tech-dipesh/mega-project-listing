const Joi=require("joi");
module.exports.listingSchema=Joi.object({
  listing:Joi.object({
    title:Joi.string().min(5).required(),
    description:Joi.string().min(5).required(),
    image:Joi.string().allow("", null),
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