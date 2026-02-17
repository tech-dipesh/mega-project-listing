import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

const dbUrl=process.env.ATLASDB_URL

async function main(){
 await mongoose.connect(dbUrl)
};

try {
    await main();
    console.log("succesfully connected to the airbnb database");
} catch (err) {
    console.log(err);
}