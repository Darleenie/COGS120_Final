'use strict';
var data;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	//data = require("../data.json");
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// $('#add').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
	var count = 0;
	$("#webcam-record-button img").click(checkClick);
	$("#upload #check").click(finishRecord);
	$(".box").click(addFilter);
	$("#voicerecorder .voiceRecorderBtn").click(checkRecorderClick);
	$("#check1").click(addVoice);

	$(".delete-icon").click(openAlert);
	$(".download-icon").click(downloadDiary);



}

/*manage page delete icons  - delete diary*/

function openAlert(){
	document.getElementById("overlay-alert").style.display = "block";
	$("#cancel-button").click(off);
	$("#yes-button").click(deleteDiary);

}

function off() {
	document.getElementById("overlay-alert").style.display = "none";
}

function deleteDiary(){
	document.getElementById("overlay-alert").style.display = "none";
	var diaryID = $(this).closest(".each-diary").attr("id");
	console.log("id is " + diaryID);
	console.log(this);
	// var diaryToD = document.getElementById("diaryID");
	// console.log("delete" + diaryToD);
	$("#" + diaryID).remove();
	console.log("now id is" + diaryID);

}


/*click download button - download diary */

function downloadDiary(){
	
	var diaryID = $(this).closest(".each-diary").attr("id");
	console.log("id is " + diaryID);

	$("div #" + diaryID).append("<img src='/images/downloading.gif'>")
}





/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

/* open filter */
function openFilter() {
	document.getElementById("myFilter").style.width = "400px";
	document.getElementById("myFilter").style.height = "150x";
}

/* close filter */
function closeFilter() {
	document.getElementById("myFilter").style.width = "0px";
}




/* check for webcam */ 
function checkClick(){

	var imgID = $(this).attr('id') //
	console.log("now is " + imgID);

	if (imgID == "record1") {
		$(this).attr("src", "/images/r2.png");
		$(this).attr("id", "record2");
		document.getElementById("check").style.opacity = "0";
	}
	else {
		document.getElementById("check").style.opacity = "1";
		$(this).attr("src", "/images/r1.png");
		$(this).attr("id", "record1");
	}
}

/* webcam - click to open filter sections(finish recording)*/

function finishRecord(){
	document.getElementById("overlay").style.display = "block";
	$("#webcam-record-button img").attr("src", "/images/play.png");
	document.getElementById("check").style.opacity = "0"
}
  
function addFilter(){
	document.getElementById("check").style.opacity = "1";
	$("a#upload").attr('href', '/add');

	var filterID = $(this).closest("div").attr("id");
	document.getElementById(filterID).style.background = "#BB889F";
	if(filterID == "box1"){
		document.getElementById("box2").style.background = "gray";
		document.getElementById("box3").style.background = "gray";
	}
	if(filterID == "box2"){
		document.getElementById("box1").style.background = "gray";
		document.getElementById("box3").style.background = "gray";
	}
	if(filterID == "box3"){
		document.getElementById("box1").style.background = "gray";
		document.getElementById("box2").style.background = "gray";
	}
}





/* voice recorder */

function checkRecorderClick(){

	var imgID = $(this).attr('id') 
	console.log("now is " + imgID +". It is recording voice now.");

	if (imgID == "recordvoice1") {
		$(this).attr("src", "/images/r2.png");
		$(this).attr("id", "recordvoice2");
		$("#waveform").attr("src", "/images/recordvoice_active.gif");
		document.getElementById("check1").style.opacity = "0";
	}
	else {
		document.getElementById("check1").style.opacity = "1";
		$(this).attr("src", "/images/r1.png");
		$(this).attr("id", "recordvoice1");
		$("#waveform").attr("src", "/images/recordvoice_default.png");
	}
}

function addVoice(){
	document.getElementById("check1").style.opacity = "1";
	$("a#uploadVoice").attr('href', '/addvoice');
}





/* Login */

// $(      //页面加载完执行
$("#ajaxForm").on("submit",function () {    //表单提交时监听提交事件
    $(this).ajaxSubmit(options);    //当前表单执行异步提交，optons 是配置提交时、提交后的相关选项
    return false;   //  必须返回false，才能跳到想要的页面
})
// )
//配置 options 选项
var options = {
    url: "/index",       //提交地址：默认是form的action,如果申明,则会覆盖
    type: "get",           //默认是form的method（get or post），如果申明，则会覆盖
    success: successFun,    //提交成功后的回调函数，即成功后可以定页面跳到哪里
    dataType: "json",       //接受服务端返回的类型
    clearForm: true,        //成功提交后，清除所有表单元素的值
    resetForm: true,        //成功提交后，重置所有表单元素的值
    timeout: 3000           //设置请求时间，超过该时间后，自动退出请求，单位(毫秒)
}
//设置提交成功后返回的页面
function successFun(data,status) {
    $("index").html(data.msg);     //提交表单后从后台接收到的返回来的数据，我保存到了msg里
    // $("#showForm").html("或者这里可以直接写想要显示的内容")
}