var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodejs com framework express' });
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
    console.log("1 record inserted");
    res.render('index', { title: 'Nodejs com framework express' });
		});
	});
});

module.exports = router;
