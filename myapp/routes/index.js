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




/* GET ALTERAR */
router.get('/alterar', function(req, res, next) {
resultado = "nada"

cpfalterar = req.query.cpf
fs = require('fs')
fs.readFile(BANCO_ARQUIVO, pessoas, function (err,data) {
  if (err) {
    return console.log(err);
  }
  pessoas = JSON.parse(data)

  for(i=0;i<pessoas.length;i++){
  	if(cpfalterar==pessoas[i].cpf){
  		pessoaalterar=pessoas[i]
  		break;
  	}
  }
res.render('alterar', { title:'Alterar', 'pessoaalterar': pessoaalterar });
});
});




/* POST ALTERAR(2) */
router.post('/alterar-pessoa', function(req, res, next) {
resultado ="nada"
fs = require('fs')
fs.readFile(BANCO_ARQUIVO, pessoas, function (err,data) {
  if (err) {
    return console.log(err);
  }
  pessoas = JSON.parse(data)
  for(x=0;x<pessoas.length;x++){
  	if(req.query.cpf == pessoas[x].cpf){
  		pessoas[x].nome=req.body.nome
  		pessoas[x].sobrenome=req.body.sobrenome
  		pessoas[x].telefone=req.body.telefone
  		pessoas[x].cpf=req.body.cpf
  		break;
  	}
  }

const fs = require('fs');
	fs.writeFile(BANCO_ARQUIVO, JSON.stringify(pessoas), function(err) {
    	if(err) {
     	   return console.log(err);
   	 }
    res.render('index', { title: 'Express', pessoas: pessoas, resultado: resultado });	
    	});
});
});











/* GET EXCLUIR */
router.get('/excluir', function(req, res, next) {
resultado ="nada"
cpfexcluir = req.query.cpf
fs = require('fs')
fs.readFile(BANCO_ARQUIVO, pessoas, function (err,data) {
  if (err) {
    return console.log(err);
  }
  pessoas = JSON.parse(data)
  for(x=0;x<pessoas.length;x++){
  	if(cpfexcluir == pessoas[x].cpf){
  		pessoaexcluir = pessoas[x]
  		pessoas.pop(pessoaexcluir)
  	}
  }

const fs = require('fs');
	fs.writeFile(BANCO_ARQUIVO, JSON.stringify(pessoas), function(err) {
    	if(err) {
     	   return console.log(err);
   	 }


    res.render('index', { title: 'Express', pessoas: pessoas, resultado: resultado });	

    	});
});
});












/* POST CADASTRAR PESSOA */


router.post('/cadastrar-pessoa', function(req, res, next) {
	pessoaslidas = []

fs = require('fs')
fs.readFile(BANCO_ARQUIVO, pessoaslidas, function (err,data) {
  if (err) {
    return console.log(err);
  }
  pessoaslidas = JSON.parse(data)




	resultado ="nada"
	pessoa = {
		nome: req.body.nome,
		sobrenome: req.body.sobrenome,
		telefone: req.body.telefone,
		cpf: req.body.cpf
	}
	pessoas.push(pessoa)
	for(y=0;y<pessoaslidas.length;y++){
		if(pessoa.cpf == pessoaslidas[y].cpf){
			pessoas.pop(pessoa)
		}
	}
	
	console.log(pessoa)




	const fs = require('fs');
	fs.writeFile(BANCO_ARQUIVO, JSON.stringify(pessoas), function(err) {
    	if(err) {
     	   return console.log(err);
   	 }
    	console.log("The file was saved!");


    	 res.render('index', { title: 'cadastrar-pessoa',pessoas: pessoas, resultado:resultado });

    	});
	}); 

 
});

/* FIM POST CADASTRAR PESSOA */





router.get('/pesquisar', function(req, res, next) {
	resultado = []
	conteudo = req.query.conteudo

fs = require('fs')
fs.readFile(BANCO_ARQUIVO, pessoas, function (err,data) {
  if (err) {
    return console.log(err);
  }
  pessoas = JSON.parse(data)
  for(var i=0;i<pessoas.length;i++){
  	if(pessoas[i].nome.toLowerCase()==conteudo.toLowerCase()){
  		resultado.push(pessoas[i])
  	}
  }


  res.render('index', { title: 'Express', pessoas: pessoas , resultado: resultado });
});
});











module.exports = router;
