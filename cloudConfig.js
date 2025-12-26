import cloudinary from "cloudinary"
import dotenv, { configDotenv } from "dotenv";
// load all env fil
dotenv.config();
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