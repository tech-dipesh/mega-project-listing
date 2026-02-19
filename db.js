import dotenv from "dotenv/config"
import mongoose from "mongoose";
// dotenv.config();

const dbUrl=process.env.ATLASDB_URL
async function main(){
    await mongoose.connect(dbUrl)
};

try {
    if(!dbUrl){
        throw new Error("Db Url Doesn't Exist")
    }
    await main();
    console.log("succesfully connected to the airbnb database");
} catch (err) {
    console.log(err);
}