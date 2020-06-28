var express = require('express');
var router = express.Router();
pessoas = []
var BANCO_ARQUIVO = 'dados/bancoArquivo.js'

/* GET home page. */
router.get('/', function(req, res, next) {
resultado = "nada"

fs = require('fs')
fs.readFile(BANCO_ARQUIVO, pessoas, function (err,data) {
  if (err) {
    return console.log(err);
  }
  pessoas = JSON.parse(data)
  res.render('index', { title: 'Express', pessoas: pessoas, resultado: resultado });
});
});


router.post('/cadastrar-pessoa', function(req, res, next) {
	resultado ="nada"
	pessoa = {
		nome: req.body.nome,
		sobrenome: req.body.sobrenome,
		telefone: req.body.telefone
	}
	pessoas.push(pessoa)
	console.log(pessoa)

	const fs = require('fs');
	fs.writeFile(BANCO_ARQUIVO, JSON.stringify(pessoas), function(err) {
    	if(err) {
     	   return console.log(err);
   	 }
    	console.log("The file was saved!");
	}); 



  res.render('index', { title: 'cadastrar-pessoa',pessoas: pessoas, resultado:resultado });
});







router.get('/pesquisar', function(req, res, next) {

	conteudo = req.query.conteudo

fs = require('fs')
fs.readFile(BANCO_ARQUIVO, pessoas, function (err,data) {
  if (err) {
    return console.log(err);
  }
  pessoas = JSON.parse(data)
  for(var i=0;i<pessoas.length;i++){
  	if(pessoas[i].nome==conteudo){
  		resultado = pessoas[i]
  	}
  }


  res.render('index', { title: 'Express', pessoas: pessoas , resultado: resultado });
});
});











module.exports = router;
