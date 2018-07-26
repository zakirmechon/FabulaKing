$(document).ready(function(){

	var i = 0;
	var ValueJSON = "";

	$.getJSON("/json/responsive.json", function(result){
		ValueJSON = result;
		console.log(ValueJSON);
	});

	$('#btn').click(function() {
		// Do something every 5 seconds
		
		i++;
		if(i>3){
			i=0;
		}
		
		//$('#device').animate({x:ValueJSON[i].device.x,y:ValueJSON[i].device.y, width:ValueJSON[i].device.width, height:ValueJSON[i].device.height, rx:ValueJSON[i].device.rx}, "1000");
		AnimateMe(i,"1000");
		console.log(i)
  });

  function AnimateMe(i,Delay){
	console.log(ValueJSON[i].device.y);
	$('#device').animate(
		{X:ValueJSON[i].device.x,Y:ValueJSON[i].device.y, W:ValueJSON[i].device.width, H:ValueJSON[i].device.height, R:ValueJSON[i].device.rx},
		{
			step: function(X,Y,W,H,R){
				 //$(this).attr("x", X );

				 $('#device').attr({x: X, y:Y, width:W, height:H, rx:R});
				//  $(this).attr('width', W);
				//  $(this).attr('height', H);
				//  $(this).attr('rx', R);
			},
			duration: Delay
		}
	);
}


// var lineDrawing = anime({
// 	targets: '#lineDrawing .lines path',
// 	strokeDashoffset: [anime.setDashoffset, 0],
// 	easing: 'easeInOutSine',
// 	duration: 1500,
// 	delay: function(el, i) { return i * 250 },
// 	direction: 'alternate',
// 	loop: true
//   });


	


	// function AnimateMe(i,Delay){
	// 	console.log(ValueJSON[i].device);
	// 	$('#device').animate(
	// 		{'X':ValueJSON[i].device.x,'Y':ValueJSON[i].device.y, 'W':ValueJSON[i].device.width, 'H':ValueJSON[i].device.height, 'R':ValueJSON[i].device.rx},
	// 		{
	// 			step: function(X,Y,W,H,R){
	// 				 $(this).attr({
	// 					"x": X,
	// 					"y": Y,
	// 					"width":W,
	// 					"height":H,
	// 					"rx":R
	// 				});

	// 				//  $(this).attr('y', Y);
	// 				//  $(this).attr('width', W);
	// 				//  $(this).attr('height', H);
	// 				//  $(this).attr('rx', R);
	// 			},
	// 			duration: Delay
	// 		}
	// 	);
	// }
	
	});