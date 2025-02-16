//posssible routes that we can create //users, /users:id, /users/new and //posts router.

  const express = require("express");
  const app = express();
  const users=require("./routes/user.js");
  const posts=require("./routes/post.js");
  const cookieParser=require("cookie-parser");

app.use(cookieParser("secretCode"));


  app.listen(3000, ()=>{
    console.log("yes 3000 port is working now")
  })
  app.use("/users", users);
  app.use("/posts", posts);

app.get("/setCookies", (req, res)=>{
  res.cookie("name", "Dipesh");
  res.cookie("country", "Nepal");
  res.send("i store your cookies, can you do that.");
});
//greet route
app.get("/greet", (req, res)=>{
  let {country="masters"}=req.cookies; 
  res.send(`Hi, ${country}`);
  
})
//homepage route
app.get("/", (req, res)=>{
  console.dir(req.cookies)
  res.send("hi i am root this is working now.");
})


//signed cookies example
app.get("/signCookies", (req, res)=>{
  res.cookie("language", "javaScript", {signed: true});
  res.cookie("library", "nextJs", {signed: true});
  res.send("i am sending you the cookies, in signed cookies form. ")
})

//verify our cookies.
app.get("/verify", (req, res)=>{
  console.log(req.cookies)
  console.log(req.signedCookies)
  res.send("verify our cookies")
})

