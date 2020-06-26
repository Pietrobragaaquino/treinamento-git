var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/cadastrar-pessoa', function(req, res, next) {



	var nome = req.param("nome")
	console.log(nome)

  res.render('index', { title: 'cadastrar-pessoa' });
});
module.exports = router;
