var data = require("../data.json");

exports.addDiary = function(request, response) {   
	
    var d = new Date()
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var currentDate = months[d.getMonth()] + ' ' + d.getDate() + ', ' + '2021'

    var newDiary = {
            "id": 7,
            "date": currentDate,
            "description": "Has awesome pet mice",
            "imageURL": "http://lorempixel.com/400/400/people",
        }

        data.diaries.unshift(newDiary);
        response.render('index', data);

}