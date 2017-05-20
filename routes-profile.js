var express = require("express");
var router = express.Router();
var fs = require("fs");
//Conexion
var Connect = require("./models/connection").Connect;
/**/
router.get("/",function(request,response){
	response.render("profile/new.pug");
});

router.get("/:id",function(request,response){
	var query = Connect.query('SELECT cve_profile, name_profile, lastname_profile, email_profile, datebirth_profile FROM profile WHERE cve_profile = ? LIMIT 1', [request.params.id], function(error, result, fields){
	  	if(error){
	     	throw error;
	  	}
	  	else{
	     	var resultado = result;
		     	if(resultado.length > 0){
		     		//console.log(request.params.id);
			        response.render("profile/show.pug",{ line: result});
			    }else{
			        console.log('Registro no encontrado');
			    }
	  		}
	});
	//Connect.end();
});
/**/

router.post("/",function(request,response){
	//console.log("POST:");
	//console.log(request.fields.name);
	//console.log(request.fields.lastname);
	//console.log(request.fields.email);
	//console.log(request.fields.datebirth);

	var query = Connect.query('INSERT INTO profile (name_profile, lastname_profile, email_profile, datebirth_profile) VALUES (?, ?, ?, ?)', [request.fields.name, request.fields.lastname, request.fields.email, request.fields.datebirth], function(error, result, fields){
	  	if(error){
	     	throw error;
	  	}else{
	  		response.redirect("/");
	  	}
	});
	//Connect.end();

	//response.redirect("/");
});


router.get("/edit/:id",function(request,response){
	//response.render("profile/edit.pug");
	/**/
	var query = Connect.query('SELECT cve_profile, name_profile, lastname_profile, email_profile, datebirth_profile FROM profile WHERE cve_profile = ? LIMIT 1', [request.params.id], function(error, result, fields){
	  	if(error){
	     	throw error;
	  	}
	  	else{
	     	var resultado = result;
		     	if(resultado.length > 0){
		     		//console.log(request.params.id);
			        response.render("profile/edit.pug",{ line: result});
			    }else{
			        console.log('Registro no encontrado');
			    }
	  		}
	});
	/**/
	//Connect.end();
});


router.get("/delete/:id",function(request,response){
	var query = Connect.query('DELETE FROM profile WHERE cve_profile = ? LIMIT 1', [request.params.id], function(error, result, fields){
	  	if(error){
	     	throw error;
	  	}
	  	else{
	     	response.redirect("/");
	  	}
	});
});

module.exports = router;