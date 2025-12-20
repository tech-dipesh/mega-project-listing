const cloudinary=require("cloudinary").v2
import CloudinaryStorage from "multer-storage-cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const storage=new CloudinaryStorage({
  cloudinary: cloudinary,
  params:{
    folder: "air-bnb-clone",
    allowedFormat:["png", "jpg", "jpeg"],
    // public_id: (req, file)=> "computed-file"
  }
});

export {cloudinary, storage}