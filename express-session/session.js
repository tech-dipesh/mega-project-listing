const express=require("express");
const app=express();
const session=require("express-session")


const sessionValues={secret: "secretcode", resave: false, saveUninitialized: true}
app.use(session(sessionValues));

//path route
app.listen(3000, ()=>{
  console.log("this is localhost:3000 route");
  
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
  let {name="please input your name"}=req.query;
  req.session.name=name
  console.log(req.session.name);
  res.send(name);
})

//create a hello route
app.get("/hello", (req, res)=>{
  res.send(`Hello my name is ${req.session.name}`)
})