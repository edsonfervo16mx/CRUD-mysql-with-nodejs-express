var express = require("express");
var app = express();

app.set("template engine", "pug");

app.get("/",function(request,response){
	response.render("index.pug");
});

app.listen(8080);