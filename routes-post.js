var express = require("express");
var router = express.Router();
var fs = require("fs");
//Conexion
var Connect = require("./models/connection").Connect;
/**/
router.get("/",function(request,response){
	//consulta de perfiles para el select
	var query = Connect.query('SELECT cve_profile, name_profile, lastname_profile from profile',[],function(error, result, fields){
		if(error){
			throw error;
		}else{
			var resultado = result;
				if(resultado.length > 0){
					response.render("post/new.pug",{ line: result});
				}else{
					console.log('Registro no encontrado');
				}
			}
	});

	//response.render("post/new.pug");
});

router.post("/",function(request,response){
	//console.log(request.fields.title);
	//console.log(request.fields.profile);
	//console.log(request.fields.description);
	/**/
	var query = Connect.query('INSERT INTO post (title_post, description_post, cve_profile) VALUES (?, ?, ?)', [request.fields.title, request.fields.description, request.fields.profile], function(error, result, fields){
		if(error){
			throw error;
		}else{
			response.redirect("/");
		}
	});
	/**/
});

router.get("/:id",function(request,response){
	//response.render("post/show.pug");
	var query = Connect.query('SELECT post.cve_post, post.title_post, post.description_post, post.cve_profile, profile.name_profile, profile.lastname_profile from post inner join profile on (post.cve_profile = profile.cve_profile) where post.cve_profile = ?',[request.params.id],function(error, result, fields){
		if(error){
			throw error;
		}else{
			var resultado = result;
				if(resultado.length > 0){
					response.render("post/show.pug",{ line: result});
				}else{
					///console.log('Registro no encontrado');
					response.render("post/show.pug",{ line: result});
				}
			}
	});
});

router.get("/edit/:id",function(request,response){
	var query = Connect.query('SELECT cve_profile, name_profile, lastname_profile from profile ; SELECT cve_post,title_post,description_post,cve_profile FROM post where cve_post = ?',[request.params.id],function(error, result, fields){
		if(error){
			throw error;
		}else{
			var list_profile = result[0];
			var data_post = result[1];
				if(list_profile.length > 0){
					response.render("post/edit.pug",{ list_profile: list_profile, data_post: data_post});
				}else{
					console.log('Registro no encontrado');
				}
			}
	});
});

router.post("/edit/:id",function(request,response){
	//console.log(request.fields.clave);
	//console.log(request.fields.title);
	//console.log(request.fields.description);
	//console.log(request.fields.profile);
	/**/ 
	var query = Connect.query('UPDATE post SET title_post = ?, description_post = ?, cve_profile = ? WHERE cve_post = ?', [request.fields.title ,request.fields.description ,request.fields.profile, request.fields.clave], function(error, result, fields){
		if(error){
			throw error;
		}
		else{
			response.redirect("/post/"+request.fields.profile);
		}
	});
	/**/

});

router.get("/delete/:id:profile",function(request,response){
	//console.log(request.params.id);
	//console.log(request.params.profile);
	/**/
	var query = Connect.query('DELETE FROM post WHERE cve_post = ?', [request.params.id], function(error, result, fields){
		if(error){
			throw error;
		}
		else{
			response.redirect("/post/"+request.params.profile);
		}
	});
	/**/
	
});

module.exports = router;