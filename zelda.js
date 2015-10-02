$(document).ready(function(){
	$(".triforce").click(function(ev){
		if(ev.toElement.src.includes("triforce-hover.png")){
			ev.toElement.src = "images/triforce.png";
		} else {
			ev.toElement.src = "images/empty.png";
		}	
	});
	$(".triforce").mouseenter(function(ev){
		if(ev.toElement.src.includes("empty.png")){
			ev.toElement.src = "images/triforce-hover.png";
		} 	
	}).mouseleave(function(ev){
		if(ev.target.src.includes("triforce-hover.png")){
			ev.target.src = "images/empty.png";
		} 	
	});
	console.log("done");
});