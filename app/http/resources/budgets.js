var express = require('express');
var router = express.Router();

router.get('/', function(req) {
  return req.store.recordCollection('Budget');
});

router.get('/:id', function(req) {
  return req.store.recordItemById('Budget', req.params.id);
});

router.post('/', function(req) {
  return req.store.createRecord('Budget');
});

router.put('/:id', function(req) {
  return req.store.updateRecord('Budget', {}, req.params.id);
});

router.delete('/:id', function(req) {
  return req.store.destroyRecord('Budget', req.params.id);
});

module.exports = router;
