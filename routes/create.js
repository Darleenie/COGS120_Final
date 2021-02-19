// var data = require('../data.json');
/*
 * GET home page.
 */

const { create } = require("express3-handlebars");



exports.view = function(req, res){
  res.render('create');
};
