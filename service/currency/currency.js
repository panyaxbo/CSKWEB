var express = require('express');
//var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
var router = express.Router();
var Q = require('q');
var http = require('http');
var https = require('https');
var fx = require('yahoo-currency')

router.get('/GetRateCurrency/:CurrencyCode', function(req, res) {
	var CurrencyCode = req.params.CurrencyCode;
	fx.fullRate().then(console.log);
})

module.exports = router;