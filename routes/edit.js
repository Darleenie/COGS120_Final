// open edit page
var tags = require('../tags.json');

exports.view = function(req, res){
    res.render('edit', tags );
  };