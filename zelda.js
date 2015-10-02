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
	
	$(".name").click(function(ev){
		var runnerName = prompt("Enter the name");
		ev.target.innerText = runnerName || "LUNK";
	});
	
	$(".magic-sword,.candle,.bow,.raft,.ladder,.flute,.arrow").click(function(ev){
		if(ev.toElement.src.includes("-off.png")){
			ev.toElement.src = ev.toElement.src.replace("-off.png",".png");
		} else {
			ev.toElement.src = ev.toElement.src.replace(".png","-off.png");
		}
	});
});