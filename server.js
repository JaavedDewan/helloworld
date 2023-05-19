/*********************************************************************************
*  WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
*
*  Name: Jaaved Dewan Student ID: 126045178 Date: 05/19/23
*
*  Online (Cyclic) URL: _______________________________________________________
********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    var output = "Jaaved Dewan - 126045178<br>My favorite movie of 2023 is Mario Bros.";
    res.send(output);
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

