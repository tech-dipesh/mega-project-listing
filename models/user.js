import mongoose from "mongoose"
const Schema = mongoose.Schema;

import passportLocalMongoose from "passport-local-mongoose"

const userSchema=new Schema({
  email:{
    type: String,
    required: true,
  }
});

//it will automatically creates a username and password. 
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model('User', userSchema)