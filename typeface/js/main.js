$( document ).ready(function() {
	console.log("ready");
	
//////////CLICK HOLD
	
	$("#home").mousedown(function(){
		$("#typeface").fadeIn(400);
		$(".thought").hide();
	});
	$("#home").mouseup(function(){
		$(".thought").fadeIn(400);
		$("#typeface").hide();
	});
	$("#page1, .grid").mousedown(function(){
		$("#constructtext").fadeIn(400);
		$(".thought").hide();
	});
	$("#page1, .grid").mouseup(function(){
		$(".thought").fadeIn(400);
		$("#constructtext").hide();
	});
	
	$("#page2, .grid").mousedown(function() {
		$("#relativetext").fadeIn(400);
		$(".thought").hide();
	});
	$("#page2, .grid").mouseup(function(){
		console.log("done");
		$(".thought").fadeIn(400);
		$("#relativetext").hide();
	});
	
	$("#page3, .grid").mousedown(function() {
		$("#absurdtext").fadeIn(400);
		$(".thought").hide();
	});
	$("#page3, .grid").mouseup(function(){
		console.log("done");
		$(".thought").fadeIn(400);
		$("#absurdtext").hide();
	});
	
	$("#page4, .grid").mousedown(function() {
		$("#existentialtext").fadeIn(400);
		$(".thought").hide();
	});
	$("#page4, .grid").mouseup(function(){
		console.log("done");
		$(".thought").fadeIn(400);
		$("#existentialtext").hide();
	});
	
	$("#clickplz").delay(1200).fadeIn(1500);
	
////////////GRIDS
	
	var mq = window.matchMedia( "(max-width: 802px)" );
		if (mq.matches) {
	    $(".letter").removeClass("letter").addClass("fix");

}
		else {

		$("#grid_1").mouseenter(function(){
		console.log("hello");
		$(".N, .S, .L").fadeIn(100).css("visibility", "visible");
		$(".C, .O, .T, .R, .U, .I, .V, .M, .A, .B, .D, .E, .X").fadeIn(0).css("visibility", "hidden");
	})

	$("#grid_1").mouseleave(function(){
		console.log("goodbye");
		$(".N, .S, .L").fadeOut(100);
	})
	
	$("#grid_2").mouseenter(function(){
		console.log("hello");
		$(".T, .M").fadeIn(100).css("visibility", "visible");
		$(".C, .O, N, .R, .U, .I, .V, .S, .A, .B, .D, .E, .X, .L").fadeIn(0).css("visibility", "hidden");
	})

	$("#grid_2").mouseleave(function(){
		console.log("goodbye");
		$(".T, .M").fadeOut(200);
	})
	
	$("#grid_3").mouseenter(function(){
		console.log("hello");
		$(".C, .A, .D").fadeIn(100).css("visibility", "visible");
		$(".O, N, .R, .U, .I, .V, .S, .B, .E, .X, .L, .T, .M").fadeIn(0).css("visibility", "hidden");
	})

	$("#grid_3").mouseleave(function(){
		console.log("goodbye");
		$(".C, .A, .D").fadeOut(200);
	})
	
	$("#grid_4").mouseenter(function(){
		console.log("hello");
		$(".O, .T, .B, E").fadeIn(100).css("visibility", "visible");
		$(".C, .N, .R, .U, .I, .V, .S, .A, .D, .E, .X, .L, .M").fadeIn(0).css("visibility", "hidden");
	})

	$("#grid_4").mouseleave(function(){
		console.log("goodbye");
		$(".O, .T, .B").fadeOut(200);
	})
	
	$("#grid_5").mouseenter(function(){
		console.log("hello");
		$(".R, .S").fadeIn(100).css("visibility", "visible");
		$(".C, .O, N, .U, .I, .V, .A, .B, .D, .E, .X, .L, .T, .M").fadeIn(0).css("visibility", "hidden");
	})

	$("#grid_5").mouseleave(function(){
		console.log("goodbye");
		$(".R, .S").fadeOut(200);
	})
	
	$("#grid_6").mouseenter(function(){
		console.log("hello");
		$(".U, .N, .M").fadeIn(100).css("visibility", "visible");
		$(".C, .O, .R, .I, .V, .S, .A, .B, .D, .E, .X, .L, .T").fadeIn(0).css("visibility", "hidden");
	})

	$("#grid_6").mouseleave(function(){
		console.log("goodbye");
		$(".U, .N, .M").fadeOut(200);
	})
	
	$("#grid_7").mouseenter(function(){
		console.log("hello");
		$(".I, .S, .E").fadeIn(100).css("visibility", "visible");
		$(".C, .O, N, .R, .U, .V, .A, .B, .D, .X, .L, .T, .M").fadeIn(0).css("visibility", "hidden");
	})

	$("#grid_7").mouseleave(function(){
		console.log("goodbye");
		$(".I, .S, .E").fadeOut(200);
	})
	
	$("#grid_8").mouseenter(function(){
		console.log("hello");
		$(".V, .X").fadeIn(00).css("visibility", "visible");
		$(".C, .O, N, .R, .U, .I, .S, .A, .B, .D, .E, .L, .T, .M").fadeIn(0).css("visibility", "hidden");
	})

	$("#grid_8").mouseleave(function(){
		console.log("goodbye");
		$(".V, .X").fadeOut(200);
	})
}   
	});