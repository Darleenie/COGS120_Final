var comments = require('../comments.json');
exports.viewPrev = function(req, res){
    console.log(comments);
    res.render("content",comments);
};