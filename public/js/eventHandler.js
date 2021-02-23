'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// $('#add').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
	var count = 0;
	$("#record").click(checkClick);
}

/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

/* check for webcam */ 
function checkClick(){
	// console.log("clicked!");
	// console.log("now is " + document.querySelector("#record").style.borderRadius);
	document.getElementById("record").style.borderRadius = 0;
	document.getElementById("record").style.width = 60;
	document.getElementById("record").style.height = 60;
	document.getElementById("record").style.borderWidth = 8;
	document.getElementById("check").style.opacity = "1";

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