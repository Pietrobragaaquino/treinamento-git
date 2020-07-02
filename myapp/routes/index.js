var express = require('express');
var router = express.Router();
var resultadobuscanome = []
/* GET home page. */
router.get('/', function(req, res, next) {
	var mysql = require('mysql');
	var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	});
	con.connect(function(err) {
 		if (err) throw err;
 		console.log("Connected!");
  		var sql = "SELECT * FROM `banco`.`pessoa`";
    	con.query(sql, function (err, pessoas) {
    	if (err) throw err;
    	console.log("retornado pessoas");
    	res.render('index', { title: 'Nodejs com framework express', pessoas:pessoas , resultadobuscanome:resultadobuscanome });
		});
  });
});

router.post('/cadastrar-pessoa', function(req, res, next) {

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO `banco`.`pessoa` (`cpf`, `telefone`, `email`, `nomecompleto`, `endereco`) VALUES ('"+req.body.cpf+"', '"+req.body.telefone+"', '"+req.body.email+"', '"+req.body.nomecompleto+"', '"+req.body.endereco+"');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserido pessoa");
    var sql = "SELECT * FROM `banco`.`pessoa`";
    con.query(sql, function (err, pessoas) {
    	if (err) throw err;
    	console.log("retornado pessoas");
    	res.render('index', { title: 'Nodejs com framework express', pessoas:pessoas , resultadobuscanome:resultadobuscanome });
			});
		});
	});
});

router.get('/buscarnome', function(req, res, next) {
	var mysql = require('mysql');
	var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "password",
	});
	con.connect(function(err) {
 		if (err) throw err;
 		console.log("Connected!");
  		var sql = "SELECT * FROM `banco`.`pessoa`";
    	con.query(sql, function (err, pessoas) {
    	if (err) throw err;
    	console.log("retornado pessoas");


  		var sql = "SELECT * FROM banco.pessoa WHERE nomecompleto LIKE '%"+req.query.nomecompleto+"%';"
    	con.query(sql, function (err, resultadobuscanome) {
    	if (err) throw err;
    	console.log("retornado busca por nome");


    	res.render('index', { title: 'Nodejs com framework express', pessoas:pessoas , resultadobuscanome:resultadobuscanome });


   		});
		});
  });
});

router.get('/excluir-pessoa', function(req, res, next) {
  var mysql = require('mysql');
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
      var sql = "DELETE FROM `banco`.`pessoa` WHERE (`cpf` = '"+req.query.cpf+"');";
      con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("deletado pessoa");
      var sql = "SELECT * FROM `banco`.`pessoa`";
      con.query(sql, function (err, pessoas) {
      if (err) throw err;
      console.log("retornado pessoas");
      res.render('index', { title: 'Nodejs com framework express', pessoas:pessoas , resultadobuscanome:resultadobuscanome });
      });
    });
  });
});


router.get('/alterar-pessoa-um', function(req, res, next) {
  var cpfpraalterar = req.query.cpf
  res.render('alterarpessoa', { title: 'Nodejs com framework express', cpfpraalterar: cpfpraalterar });
});


router.post('/alterar-pessoa-dois', function(req, res, next) {

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DELETE FROM `banco`.`pessoa` WHERE (`cpf` = '"+req.body.cpf+"');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    var sql = "INSERT INTO `banco`.`pessoa` (`cpf`, `telefone`, `email`, `nomecompleto`, `endereco`) VALUES ('"+req.body.cpf+"', '"+req.body.telefone+"', '"+req.body.email+"', '"+req.body.nomecompleto+"', '"+req.body.endereco+"');";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Pessoa alterada");
      var sql = "SELECT * FROM `banco`.`pessoa`";
      con.query(sql, function (err, pessoas) {
        if (err) throw err;
        console.log("retornado pessoas");
       res.render('index', { title: 'Nodejs com framework express', pessoas:pessoas, resultadobuscanome:resultadobuscanome });
       });
      });
    });
  });
});


module.exports = router;
