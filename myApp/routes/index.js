var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = req.query
  res.status(201).send({
    data: 'test',
    message: 'success',
  });
  // res.send('Hello api get');
});

router.get('/:id', function(eqr, res, next){
  let params = req.params
  res.send({
    params
  });
});

router.post('/', function(req, res, next) {
  let body = req.body
  res.send(body);
});

router.put('/', function(req, res, next) {
  res.send('Hello api put');
});

router.delete('/', function(req, res, next) {
  res.send('Hello api delete');
});

module.exports = router;
