const express = require("express");


const app = express();

app.use(express.static(process.cwd() + "/public"));


app.listen(3500, function(){

  console.log(3500);

});