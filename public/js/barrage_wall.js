'use strict';
//Barrage timer
var timers = [];
//Controlling the explicit and hidden variables of barrage
var isShow = true;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	
    //Listen to send button
    $(".send").on("click", function () {
        //Create barrage
        var val = $("#screenBulletText").val();
        var jqueryDom = createScreenbullet(val);
        //Add scheduled task
        addInterval(jqueryDom);
        // var info = $(".comment-section").text();
        // console.log("here" + info);
        // $(".comment-section").html("{{#each comments}}<div><b2>{{date}}</b2><br><div><b1>{{description}}</b1></div></div><hr>{{/each}}");
        // $("#comment-section").load("content"+" #comment-section")
        var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var time = hours+':'+minutes+ampm+", "+months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();
        $("#new-comment").html("<div style='margin-left:10%'><b2>"+time+"</b2><br><div><b1>"+val+"</b1></div></div><hr>");
    //Monitor close button
    // $(".clear").on("click", function () {
    //     if (isShow) {
    //         $(".bullet").css("opacity", 0);
    //         isShow = false;
    //     } else {
    //         $(".bullet").css("opacity", 1);
    //         isShow = true;
    //     }   
    // });
    });
}

//Create a new barrage
function createScreenbullet(text) {
    var jqueryDom = $("<div class='bullet'>" + text + "</div>");
    var fontColor = "white"; //"rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()) + ")";
    var fontSize = "12px"; //Math.floor((Math.random() + 1) * 24) + "px";
    var left = $(".screen_container").width() + "px";
    var top = "10px"; //Math.floor(Math.random() * 400) + "px";
    // top = parseInt(top) > 352 ? "352px" : top;
    jqueryDom.css({
        "position": 'absolute',
        "color": fontColor,
        "font-size": fontSize,
        "left": left,
        "top": top
    });
    $(".screen_container").append(jqueryDom);
    // console.log("barrage created");
    return jqueryDom;
}
//Add timed task to barrage
function addInterval(jqueryDom) {
    var left = jqueryDom.offset().left - $(".screen_container").offset().left;
    var timer = setInterval(function () {
        left--;
        jqueryDom.css("left", left + "px");
        if (jqueryDom.offset().left + jqueryDom.width() < $(".screen_container").offset().left) {
            jqueryDom.remove();
            clearInterval(timer);
        }
    }, 10);
    timers.push(timer);
}
