var data = require("../data.json");
var comments = require('../comments.json');

exports.addDiary = function(request, response) {   
	
    var d = new Date()
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var currentDate = months[d.getMonth()] + ' ' + d.getDate() + ', ' + '2021'

    var newDiary = {
            "type": "video",
            "id": 7,
            "date": currentDate,
            "description": "Has awesome pet mice",
            "imageURL": "http://lorempixel.com/400/400/people",
        }

        data.diaries.unshift(newDiary);
        response.render('index', data);

}

exports.addComment = function(req, res){
    var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var time = hours+':'+minutes+ampm+", "+months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();

    newComment = {
        "date": time, 
        "description": req.query.description
    };

    comments.comments.unshift(newComment);
    console.log("after " + comments);
    // $("#comment-section").html(
    //     "{{#each comments}}<div style=\"margin-left:10%\"> <b2>{{date}}</b2> <br><div><b1>{{description}}</b1></div></div><hr>{{/each}}");
    // res.json(comments);
    // res.render();
    return;
};

exports.filter = function(req,res){
    // console.log("data: "+n.type);
    var newData = JSON.parse(JSON.stringify(data));
    var id = req.params.id;
    console.log("q: "+ req.params.id);
    newData.diaries = data.diaries.filter(function (e){
        console.log("type: "+e.type);
        if(id == 'video'){
            return e.type ==='video';
        }else{
            return e.type ==='audio';
        }
        
    });
    newData.whitespace = "Filtered! Check the result below!"
    console.log("data: "+ newData.whitespace);
    res.render('index', newData);

    // res.render('index', data);

}


exports.deleteV = function(req,res){
    
    var deleteID = req.query.id;
    delete data.diaries[deleteID - 1];
    res.render("manage", data);

}
