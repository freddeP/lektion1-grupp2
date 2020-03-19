const express = require("express");

const app = express();

app.use(express.static(process.cwd() + "/public"));


app.get("/",function(req,res){

res.send("Hello web developers...");

});

app.listen(3500, function(){

  console.log(3500);

});