$( document ).ready(function() {
	console.log("ready");
	$("#page1").mousedown(function(){
		console.log("can");
		$("#constructtext").fadeIn(400);
		$("#constructivism").hide();
	});
	$("#page1").mouseup(function(){
		console.log("done");
		$("#constructivism").fadeIn(400);
		$("#constructtext").hide();
	});
   
});