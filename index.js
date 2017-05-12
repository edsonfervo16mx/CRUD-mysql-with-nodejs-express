var express = require("express");
var app = express();
//Models
var Connect = require("./models/connection").Connect;
//Routes
var router_profile = require("./routes-profile")

app.use("/files",express.static("public"));

app.set("template engine", "pug");

app.get("/",function(request,response){
	var query = Connect.query('SELECT cve_profile,name_profile, lastname_profile,email_profile,datebirth_profile FROM profile', [], function(error, result){
	  	if(error){
	     	throw error;
	  	}
	  	else{
	     	var resultado = result;
		     	if(resultado.length > 0){
			        response.render("index.pug",{ line: result});
			    }else{
			        console.log('Registro no encontrado');
			    }
	  		}
	});

	//Connect.end();
});


// aplicando routes
app.use("/profile",router_profile);
app.listen(8080);