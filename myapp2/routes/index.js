var express = require('express');
var router = express.Router();
var mensagem = ""
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { mensagem: mensagem });
});



router.post('/home', function(req, res, next) {
	var mysql = require('mysql');
	var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	});
	con.connect(function(err) {
 		if (err) throw err;
 		console.log("Conectado com o banco.");
  		var sql = "SELECT * FROM `myapp2`.`usuario`";
    	con.query(sql, function (err, usuarios) {
    	if (err) throw err;
    	console.log("Retornei usuarios.");
    	for(var i=0;i<usuarios.length;i++){
    		if(usuarios[i].login==req.body.login && usuarios[i].senha==req.body.senha){
    			res.render('home', {  });
    		}
    	}
    	res.render('index', {  mensagem: "Usuario ou senha incorretos!" });
	});
  });
});


module.exports = router;
