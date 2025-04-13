// normal way to write the wrapasync which is doing the repetiteve things to once on the then and catch error

//witht this we also have to module exports
function wrapAsync(fn){
  return function(req, res, next){
    fn(req, res, next).catch(next);
  }
}
//shorter way to write thre code with arrow function
module.exports=(fn)=>{
  return (req, res, next)=>{
    fn(req, res, next).catch(next);
  }
}