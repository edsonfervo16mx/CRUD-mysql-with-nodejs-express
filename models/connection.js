var mysql = require("mysql");

//Conexión Mysql
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'personadb',
	password: 'qwerty123',
	database: 'test-nodejs',
	port: 3306,
	multipleStatements: true
});


//Verificando la conexión
connection.connect(function(error){
	if (error) {
		throw error;
	}else{
		console.log('Conexion correcta.');
	}

});

module.exports.Connect = connection;