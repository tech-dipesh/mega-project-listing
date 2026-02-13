import dotenv from "dotenv"
if (process.env.NODE_ENV != "production") {
  dotenv.config();
}

process.env.NODE_NO_WARNINGS = "1";

import express from "express"
import path from "path"
import mongoose, { mongo } from "mongoose";
import engine from "ejs-mate"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT=process.env.PORT
import {router as listingsRouter} from "./routes/listing.js"
import reviewsRouter from "./routes/review.js"
import userRouter from "./routes/user.js"


import passport from "passport";
import localStrategy from "passport-local"
import User from "./models/user.js"

import flash from "connect-flash"
import session from "express-session";
import Mongostore from "connect-mongo";

app.use(express.urlencoded({ extended: true }));

const dbUrl=process.env.ATLASDB_URL

async function main(){
 await mongoose.connect(dbUrl)
};

try {
    await main();
      await new Promise((resolve) => {
    if (mongoose.connection.readyState === 1) {
      resolve();
    } else {
      mongoose.connection.once('open', resolve);
    }
  });
  console.log("succesfully connected to the airbnb database");
  } catch (err) {
    console.log(err);
  }

const store= Mongostore.create({
  client: mongoose.connection.getClient() ,
  dbName: 'homeFinder',
  crypto: {
    secret: process.env.CONNECT_MONGO
  },
  touchAfter: 24*60*60
})

store.on('error', (err)=>{
  console.log("Error in mongo store", err);
})

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




app.use("/listings", listingsRouter);

app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);


app.listen(8080, (err) => {
  if (err) console.error("Server start error:", err);
  console.log(`Server Running on Port: http://localhost:${PORT}`)
});


app.all("/", (req, res, next)=>{
  req.flash("success", "Congratulations! You now have access to view my portfolio website project.");
 return res.redirect("/listings");
})

app.use((err, req, res, next) => {
  let { statusCode = 404, message = "something went wrong" } = err;
  res.status(statusCode).render("listings/error.ejs", { err });
});
