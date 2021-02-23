var data = require('../data.json');
exports.viewPrev = function(req, res){
    var id = req.params.id;
    console.log("params " + req.params)
    console.log("The project id is: " + id);
    console.log("The project is "+ data);
    // var imageURL = data[id-1].imageURL;
    // console.log("The project img is: " + imageURL);
    res.render("content",{
        "id":id
    });
};