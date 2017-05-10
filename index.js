var express = require("express");
var app = express();
//Models
var Connect = require("./models/connection").Connect;

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
			        console.log(resultado[0].cve_profile + ' ' + resultado[0].name_profile + ' / ' + resultado[0].lastname_profile +' ' + resultado[0].email_profile + ' ' + resultado[0].datebirth_profile);
			        response.render("index.pug",{ line: result});
			    }else{
			        console.log('Registro no encontrado');
			    }
	  		}
	});

	//Connect.end();
});

app.listen(8080);