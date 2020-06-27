var express = require('express');
var router = express.Router();
pessoas = []
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', pessoas: pessoas });
});

router.post('/cadastrar-pessoa', function(req, res, next) {
	pessoa = {
		nome: req.body.nome,
		sobrenome: req.body.sobrenome,
		telefone: req.body.telefone
	}
	pessoas.push(pessoa)
	console.log(pessoa)

	const fs = require('fs');
	fs.writeFile("/tmp/bancoArquivo.js", JSON.stringify(pessoas), function(err) {
    	if(err) {
     	   return console.log(err);
   	 }
    	console.log("The file was saved!");
	}); 



  res.render('index', { title: 'cadastrar-pessoa',pessoas: pessoas });
});


module.exports = router;
