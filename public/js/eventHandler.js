// 'use strict';
var data;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	data = require("../data.json");
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

/* apply filter */
function applyFilter(type) {
	var videoColor = jQuery('#videoFilter').css("background-color");
	var audioColor = jQuery('#audioFilter').css("background-color");
	
	if (type == "video") {
		if (videoColor == "rgb(243, 240, 231)") {
			document.getElementById("videoFilter").style.backgroundColor = "";
			document.getElementById("videoFilter-text").style.color = "#F3F0E7";
			var index = data.type.find(type => type === "video");
			if (index !=-1){
				data.type.splice(index,1);
			}
		}else{
			document.getElementById("videoFilter").style.backgroundColor = "#F3F0E7";
			document.getElementById("videoFilter-text").style.color = "#554E3B";
			var index = data.type.find(type => type === "video");
			if (index ==-1){
				data.type.splice(0,1,"video");
			}
		}
	} else {
		if (audioColor == "rgb(243, 240, 231)") {
			document.getElementById("audioFilter").style.backgroundColor = "";
			document.getElementById("audioFilter-text").style.color = "#F3F0E7";
			var index = data.type.find(type => type === "audio");
			if (index !=-1){
				data.type.splice(index,1);
			}
		}else{
			document.getElementById("audioFilter").style.backgroundColor = "#F3F0E7";
			document.getElementById("audioFilter-text").style.color = "#554E3B";
			var index = data.type.find(type => type === "audio");
			if (index ==-1){
				data.type.splice(0,1,"audio");
			}
		}
	}
}

/* check for webcam */
function checkClick() {

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

/* click to open filter sections(finish recording)*/

function finishRecord() {
	document.getElementById("overlay").style.display = "block";
	$("#webcam-record-button img").attr("src", "/images/play.png");
	document.getElementById("check").style.opacity = "0"
}

function addFilter() {
	document.getElementById("check").style.opacity = "1";
	$("a#upload").attr('href', '/add');

}



function off() {
	document.getElementById("overlay").style.display = "none";
}


/* voice recorder */

function checkRecorderClick() {

	var imgID = $(this).attr('id')
	console.log("now is " + imgID + ". It is recording voice now.");

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

function addVoice() {
	document.getElementById("check1").style.opacity = "1";
	$("a#uploadVoice").attr('href', '/addvoice');
}



function deleteVideo() {
	$("#delete").attr("href", "/deleteV");

}


/* Login */

// $(      //页面加载完执行
$("#ajaxForm").on("submit", function () {    //表单提交时监听提交事件
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
function successFun(data, status) {
	$("index").html(data.msg);     //提交表单后从后台接收到的返回来的数据，我保存到了msg里
	// $("#showForm").html("或者这里可以直接写想要显示的内容")
}

/* World Track */
let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: new google.maps.LatLng(33.359371, -117.549959),
		zoom: 7,
	});
	const iconBase =
		"https://developers.google.com/maps/documentation/javascript/examples/full/images/";
	var icons = {
		// parking: {
		// 	icon: "/images/map_pin/bts.png",
		// },
		// library: {
		//   icon: "/images/map_pin/mamamoo.png",
		// },
		// info: {
		// 	icon: iconBase + "info-i_maps.png",
		// },
		centerhall: {
			icon: "/images/map_pin/centerhall.png",
		},
		bts: {
			icon: "/images/map_pin/feb10.jpg",
		},
		mamamoo: {
			icon: "/images/map_pin/mamamoo.png",
		},
		feb10: {
			icon: "/images/map_pin/feb10.png",
		},
		navy: {
			icon: "/images/map_pin/navy.png",
		},
		linefriends: {
			icon: "/images/map_pin/linefriends.png",
		},
	};

	const features = [
		{
			position: new google.maps.LatLng(32.878045, -117.237230),
			type: "centerhall",
		},
		{
			position: new google.maps.LatLng(33.684662, -117.818688),
			type: "bts",
		},
		{
			position: new google.maps.LatLng(34.026790, -118.394714),
			type: "mamamoo",
		},
		{
			position: new google.maps.LatLng(32.910866, -117.058875),
			type: "feb10",
		},
		{
			position: new google.maps.LatLng(32.672369, -117.161400),
			type: "navy",
		},
		{
			position: new google.maps.LatLng(34.101301, -118.331541),
			type: "linefriends",
		},
		
	];

	// Create markers.
	for (let i = 0; i < features.length; i++) {
		const marker = new google.maps.Marker({
			position: features[i].position,
			icon: icons[features[i].type].icon,
			map: map,
		});
	}
}

/* End World Track */