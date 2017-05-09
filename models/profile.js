/*
var query = Connect.query('SELECT cve_profile,name_profile, lastname_profile,email_profile,datebirth_profile FROM profile WHERE cve_profile = ?', [1], function(error, result){
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

	Connect.end();
/**/
//falta