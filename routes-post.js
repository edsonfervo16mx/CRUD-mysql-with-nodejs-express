var express = require("express");
var router = express.Router();
var fs = require("fs");
//Conexion
var Connect = require("./models/connection").Connect;
/**/
router.get("/",function(request,response){
	response.render("post/index.pug");
});