var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teste-500', (req, res) => {
  res.status(500).send('Erro 500 simulado');
});

module.exports = router;
