$( document ).ready(function() {
	console.log("ready");
	$("#page1").mousedown(function(){
		console.log("can");
		$("#constructtext").fadeIn(400);
		$(".thought").hide();
	});
	$("#page1").mouseup(function(){
		console.log("done");
		$(".thought").fadeIn(400);
		$("#constructtext").hide();
	});
	
	$("#page2").mousedown(function() {
		$("#relativetext").fadeIn(400);
		$(".thought").hide();
	});
	$("#page2").mouseup(function(){
		console.log("done");
		$(".thought").fadeIn(400);
		$("#relativetext").hide();
	});
	
	$("#page3").mousedown(function() {
		$("#absurdtext").fadeIn(400);
		$(".thought").hide();
	});
	$("#page3").mouseup(function(){
		console.log("done");
		$(".thought").fadeIn(400);
		$("#absurdtext").hide();
	});
	
   
});