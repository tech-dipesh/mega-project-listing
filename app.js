const dotenv=require("dotenv").config();
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
  // console.log(process.env);
}

// console.log(process.env.SECRET);

//for the avoidng any deprecration warning on terminal
process.env.NODE_NO_WARNINGS = "1";

const methodOverride = require("method-override");
const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const ejs = require("ejs");
let engine = require("ejs-mate");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/expressError.js");

//using the authentication method
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");

const path = require("path");
// for showing the listing propery using express
app.use(express.urlencoded({ extended: true }));

//require the express session
const flash = require("connect-flash");
const session = require("express-session");
const mongoStore=require("connect-mongo");



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
store= mongoStore.create({
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

// intialize passport middleware
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


//fakeUser signup
// app.get("/fakeUser", async (req, res) => {
//   let fakeUser = new User({
//     email: "dipeshsharma@gmail.com",
//     username: "newUser",
//   });
//   let newValue = await User.register(fakeUser, "password");
//   res.send(newValue);
//   // console.log(newValue);
// });

//this is for the listings that i moved to the app method to the listing: import the listings
//redirect those listings to what i have made logic inside the listing.js . mount the listings router. i have to use after the app.use urlencoded code for any potential error.
app.use("/listings", listingsRouter);

app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
// app.use("/listings/:id/reviews", reviews)

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.engine("ejs", engine);

app.use(express.static(path.join(__dirname, "public")));
// app.use("public/css", express.static(path.join(__dirname, "public/css")));

app.listen(8080, (err) => {
  if (err) console.error("Server start error:", err);
  console.log("Server running on port 8080");
});

// app.get("/testListings", async (req, res) => {
//   try {
//     let sampleListing = new Listing({
//       title: "my nepali villa on rent",
//       description:
//         "near to the beautiful mountain on the world, you can expect the best sunrise and best sunset from your room",
//       price: 599,
//       location: "Salyan, Baglung",
//       country: "Nepal",
//     });

//     await sampleListing.save();
//     res.send("test is working now and listing saved");
//   } catch (error) {
//     res.send(error);
//   }
// });

app.use((err, req, res, next) => {
  let { statusCode = 404, message = "something went wrong" } = err;
  res.status(statusCode).render("listings/error.ejs", { err });
  // res.status(statusCode).send(message);
});

app.get((req, res)=>{
  res.redirect("/listings");
})

app.all("/", (req, res, next)=>{
  // next( new expressError(404, "Chat Not found you are looking forward to!"))
  req.flash("success", "Congratulations! You now have access to view my portfolio website project.");
  res.redirect("/listings");
      })
