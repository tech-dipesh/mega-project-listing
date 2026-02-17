  import mongoose from "mongoose";
  import initData from "./data.js"
  import listing from "../models/listing.js";

  const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
  main()
    .then(() => {
      console.log("succesfully connected to the airbnb database");
    })
    .catch((err) => {
      console.log(err);
    });
  async function main() {
    await mongoose.connect(MONGO_URL);
  }

  const initDB = async () => {
    await Listing.deleteMany({});
    // initData.data= initData.data.map((obj)=>({...obj, owner: "67b4cee58dc05bd3c54a3302"}));
    // initData.data = initData.data.map((obj) => ({
    //   ...obj,
    //   owner: "67b6bb9bfbc6b154aecbd7ae",
    // }));
    await Listing.insertMany(initData.data);
    console.log("Data succesfully connected");
  };
  initDB();
