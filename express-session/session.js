const express=require("express");
const app=express();
const session=require("express-session")
//require the connect flash
const flash=require("connect-flash");
const path=require("path");
const sessionValues={secret: "secretcode", resave: false, saveUninitialized: true}

// for the ejs folder with express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(session(sessionValues));
app.use(flash())


//path route
app.listen(3000, ()=>{
  console.log("this is localhost:3000 route");
  
})
//middleware of flash message
app.use((req, res, next)=>{
  res.locals.successMsg=req.flash("success");
  res.locals.errorMsg=req.flash("error"); 
  next();
})

//homepage route
app.get("/", (req, res)=>{
  res.send("your app is working now")
})

//testing route
app.get("/test", (req, res)=>{
  res.send("test is succesfully tested. ")
})

//counting how many times we have visited there.
app.get("/count", (req, res)=>{
  if(req.session.count){
    req.session.count++;
  }
  else{
    req.session.count=1;
  }
  res.send(`you visited the website ${req.session.count} times.`)
})

//get the value on req query
app.get("/signup", (req, res)=>{
  let {name="anonymous"}=req.query;
  req.session.name=name
  if(name==="anonymous"){
    req.flash("error", "Please register first.")
  }
  else{
  req.flash("success", "User succesfully registered.")
}
  res.redirect("hello")
})

//create a hello route
app.get("/hello", (req, res)=>{
  // console.log(req.flash("success"));

  res.render("page.ejs", {name: req.session.name});
})
