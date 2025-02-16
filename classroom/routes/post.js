const express=require("express");
const router=express.Router();


// post routes
// posts route
router.get("/", (req, res)=>{
  res.send("hi this is users route, you can add any users on here.")
})
// show id users
router.get("/:id", (req, res)=>{
  let {id}=req.params;
  res.send(`the id you are looking forward is: ${id}`);
})
//post users route
router.post("/", (req, res)=>{
  res.send("this is post route remember that")
})

//delete users route
router.delete("/:id", (req, res)=>{
  res.send("with this way you can delete me")
})

module.exports=router;