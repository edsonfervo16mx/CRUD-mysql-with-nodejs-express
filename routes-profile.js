var express = require("express");
var router = express.Router();
var fs = require("fs");
//Conexion
var Connect = require("./models/connection").Connect;
/**/
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

module.exports = router;