var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});
var sql = "SELECT * FROM `myapp3`.`texto`";
    con.query(sql, function (err, textos) {
    	if (err) throw err;
    	console.log("retornado textos");
  res.render('index', { title: 'Express',textos:textos });
  		});
	});


router.post('/cadastrar-texto', function(req, res, next) {
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO `myapp3`.`texto` (`texto`) VALUES ('"+req.body.texto+"');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserido texto");
    var sql = "SELECT * FROM `myapp3`.`texto`";
    con.query(sql, function (err, textos) {
    	if (err) throw err;
  res.render('index', { title: 'Express', textos: textos });
  			});
		});
	});
});













module.exports = router;
