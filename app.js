import dotenv from "dotenv"
if (process.env.NODE_ENV != "production") {
  dotenv.config();
  // console.log(process.env);
}



//for the avoidng any deprecration warning on terminal
process.env.NODE_NO_WARNINGS = "1";

import methodOverride from "method-override"
import express from "express"
import path from "path"
import mongoose from "mongoose";
import ejs from "ejs"
import engine from "ejs-mate"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 8080;

import {router as listingsRouter} from "./routes/listing.js"
import reviewsRouter from "./routes/review.js"
import userRouter from "./routes/user.js"
import wrapAsync from "./utils/wrapAsync.js";
import expressError from "./utils/expressError.js";


//using the authentication method
import passport from "passport";
import localStrategy from "passport-local"
import User from "./models/user.js"

//require the express session
import flash from "connect-flash"
import session from "express-session";
import mongoStore from "connect-mongo";

// for showing the listing propery using express
app.use(express.urlencoded({ extended: true }));



// const MONGO_URL = "mongodb://127.0.0.1:27017/airbnb";
const dbUrl=process.env.ATLASDB_URL

main()
  .then(() => {
    console.log("succesfully connected to the airbnb database");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(dbUrl);
  // await mongoose.connect(dbUrl);
}

// session store using connect-mongo
const store= mongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.CONNECT_MONGO
  },
  touchAfter: 24*60*60
})
//for mongo error
store.on("error", ()=>{
  console.log("Error in mongo store", err);
  
})

//creating a secret code with value of it:
const sessionOptions = {
  store,
  secret: process.env.CONNECT_MONGO,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  }
};



app.use(session(sessionOptions));
app.use(flash());
app.engine('ejs', engine);

// use the passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
// app.use("public/css", express.static(path.join(__dirname, "public/css")));




//this is for the listings that i moved to the app method to the listing: import the listings
//redirect those listings to what i have made logic inside the listing.js . mount the listings router. i have to use after the app.use urlencoded code for any potential error.
app.use("/listings", listingsRouter);

app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
// app.use("/listings/:id/reviews", reviews)


app.listen(8080, (err) => {
  if (err) console.error("Server start error:", err);
  console.log("Server running on port 8080");
});


app.use((err, req, res, next) => {
  let { statusCode = 404, message = "something went wrong" } = err;
  res.status(statusCode).render("listings/error.ejs", { err });
  // res.status(statusCode).send(message);
});


// Note needed
// app.get((req, res)=>{
//   res.redirect("/listings");
// })

app.all("/", (req, res, next)=>{
  // next( new expressError(404, "Chat Not found you are looking forward to!"))
  req.flash("success", "Congratulations! You now have access to view my portfolio website project.");
  res.redirect("/listings");
      })
