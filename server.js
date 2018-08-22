// ============ Express ============*
const express = require('express'); 
const app = express();
// =================================

// ============ Various Helper Libraries ============ 
const path = require('path');
// ==================================================

// ============ Static Routes ============ 
// Will use: path 
app.use(express.static(path.join(__dirname, "Angular-Weather-API/dist/Angular-Weather-API"))); 
//change angular project folder name here -- where dist is located!
// =======================================

// ============ Routes ============ 
//we don't need to set up routes for this project for now.  only static routes that serves angular
// ================================= 

// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./Angular-Weather-API/dist/Angular-Weather-API/index.html"))
  });


// ============ Server ============ 
// Will require: express/app 
app.listen(8000);
// ================================