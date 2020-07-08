var express = require('express');
var router = express.Router();
var mensagem = ""
var clientes =[]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { mensagem: mensagem });
});


router.get('/cliente', function(req, res, next) {
var sql = "SELECT * FROM `myapp2`.`cliente`";
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    con.query(sql, function (err, clientes) {
      if (err) throw err;
      console.log("retornando clientes");
  res.render('cliente', { clientes: clientes });
});
    });
  });







router.get('/funcionario', function(req, res, next) {
var sql = "SELECT * FROM `myapp2`.`funcionario`";
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    con.query(sql, function (err, funcionarios) {
      if (err) throw err;
      console.log("retornando funcionarios");
  res.render('funcionario', { funcionarios: funcionarios });
});
    });
  });




router.get('/produto', function(req, res, next) {
var sql = "SELECT * FROM `myapp2`.`produto`";
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    con.query(sql, function (err, produtos) {
      if (err) throw err;
      console.log("retornando produtos");
  res.render('produto', { produtos: produtos });
});
    });
  });




router.get('/compra', function(req, res, next) {
  res.render('compra', { mensagem: mensagem });
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



router.post('/cadastrar-cliente', function(req, res, next) {

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO `myapp2`.`cliente` ( `telefone`, `email`, `nome`, `endereco`) VALUES ('"+req.body.telefone+"', '"+req.body.email+"', '"+req.body.nome+"', '"+req.body.endereco+"');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserido cliente");
    var sql = "SELECT * FROM `myapp2`.`cliente`";
    con.query(sql, function (err, clientes) {
      if (err) throw err;
      console.log("retornando clientes");
      res.render('cliente', { clientes: clientes });
      });
    });
  });
});


router.get('/excluir-cliente', function(req, res, next) {
  var mysql = require('mysql');
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
      var sql = "DELETE FROM `myapp2`.`cliente` WHERE (`idcliente` = '"+req.query.idcliente+"');";
      con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("deletado pessoa");
      var sql = "SELECT * FROM `myapp2`.`cliente`";
      con.query(sql, function (err, clientes) {
      if (err) throw err;
      console.log("retornado pessoas");
      res.render('cliente', { clientes: clientes });
      });
    });
  });
});


router.post('/cadastrar-funcionario', function(req, res, next) {

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO `myapp2`.`funcionario` ( `telefone`, `email`, `nome`, `endereco`, `salario`) VALUES ('"+req.body.telefone+"', '"+req.body.email+"', '"+req.body.nome+"', '"+req.body.endereco+"', '"+req.body.salario+"');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserido funcionario");
    var sql = "SELECT * FROM `myapp2`.`funcionario`";
    con.query(sql, function (err, funcionarios) {
      if (err) throw err;
      console.log("retornando funcionarios");
      res.render('funcionario', { funcionarios: funcionarios });
      });
    });
  });
});

router.get('/excluir-funcionario', function(req, res, next) {
  var mysql = require('mysql');
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
      var sql = "DELETE FROM `myapp2`.`funcionario` WHERE (`idfuncionario` = '"+req.query.idfuncionario+"');";
      con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("deletado funcionario");
      var sql = "SELECT * FROM `myapp2`.`funcionario`";
      con.query(sql, function (err, funcionarios) {
      if (err) throw err;
      console.log("retornado funcionarios");
      res.render('funcionario', { funcionarios: funcionarios });
      });
    });
  });
});



router.post('/cadastrar-produto', function(req, res, next) {

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO `myapp2`.`produto` ( `nome`, `descricao`, `valorcompra`, `valorvenda`, `quantidade`) VALUES ('"+req.body.nome+"', '"+req.body.descricao+"', '"+req.body.valorcompra+"', '"+req.body.valorvenda+"', '"+req.body.quantidade+"');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserido produto");
    var sql = "SELECT * FROM `myapp2`.`produto`";
    con.query(sql, function (err, produtos) {
      if (err) throw err;
      console.log("retornando produtos");
      res.render('produto', { produtos: produtos });
      });
    });
  });
});


router.get('/excluir-produto', function(req, res, next) {
  var mysql = require('mysql');
  var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
      var sql = "DELETE FROM `myapp2`.`produto` WHERE (`idproduto` = '"+req.query.idproduto+"');";
      con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("deletado produto");
      var sql = "SELECT * FROM `myapp2`.`produto`";
      con.query(sql, function (err, produtos) {
      if (err) throw err;
      console.log("retornado produtos");
      res.render('produto', { produtos:produtos });
      });
    });
  });
});

module.exports = router;
