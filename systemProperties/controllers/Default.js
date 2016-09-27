'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.systemGET = function systemGET (req, res, next) {
  Default.systemGET(req.swagger.params, res, next);
};
