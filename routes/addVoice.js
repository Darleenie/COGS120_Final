var data = require("../data.json");

exports.addDiary = function(request, response) {   
	
    var d = new Date()
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var currentDate = months[d.getMonth()] + ' ' + d.getDate() + ', ' + '2021'

    var newDiary = {
            "type": "audio",
            "id": 8,
            "date": currentDate,
            "description": "Has awesome pet mice",
            "imageURL": "/images/voice_diary.png",
        }

        data.diaries.unshift(newDiary);
        response.render('index', data);

}