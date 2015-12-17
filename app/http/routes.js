var express = require('express');
var router = express.Router();
var apiRouter = express.Router();
var oauth = require('../oauth');

var resources = require('auto-loader').load(__dirname + '/resources');

router.use(apiRouter);

// All of our API routes are grouped together
apiRouter.use('/register', resources.register);
apiRouter.use('/books', oauth.authorise(), resources.books);
apiRouter.use('/budgets', resources.budgets);

module.exports = router;
