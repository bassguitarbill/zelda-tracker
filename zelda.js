var DEFAULT_NAME = 'LUNK';

var gui, win;
if(typeof require != 'undefined'){
	gui = require('nw.gui');
	win = gui.Window.get();
	win.setResizable(false);
} else {
	win = {
		resizeBy: function(){}
	}
}

$(document).ready(function(){
	addClickHandlers();
	cacheImages();
});

cacheImages();

function addClickHandlers(){

	$(".triforce").off("click");
	$(".triforce").click(function(ev){
		if(ev.toElement.src.includes("triforce-hover.png")){
			ev.toElement.src = "images/triforce.png";
		} else {
			ev.toElement.src = "images/triforce-hover.png";
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
	
	$(".name").off("click");
	$(".name").click(function(ev){
		$(ev.target.parentNode).remove();
		win.resizeBy(0, -44);
	});
	
	$(".item").off("click");
	$(".item").click(function(ev){
		if(ev.toElement.src.includes("-off.png")){
			ev.toElement.src = ev.toElement.src.replace("-off.png",".png");
		} else {
			ev.toElement.src = ev.toElement.src.replace(".png","-off.png");
		}
	});
	
	$("#addRowButton").off("click");
	$("#addRowButton").click(function(ev){
		var name = $("#newRowName").val();
		makeRaceRow(name);
		$("#newRowName").val("");
		win.resizeBy(0, 44);
	});
};

function makeRaceRow(name) {
	var row = document.createElement('div');
	$(row).addClass('raceRow').appendTo($('.tracker'));
	var nameElement = document.createElement('span');
	$(nameElement).addClass('name');
	$(nameElement).text(name || DEFAULT_NAME);
	$(row).append(nameElement);
	for(var i=0; i<8; i++){
		var triforce = document.createElement('span');
		$(triforce).addClass('triforce')
			.append($(document.createElement('img'))
			.attr('src','images/empty.png'));
		$(row).append(triforce);
	}
	appendItem(row, "blue-candle");
	appendItem(row, "magic-sword");
	appendItem(row, "bow");
	appendItem(row, "raft");
	appendItem(row, "ladder");
	appendItem(row, "flute");
	appendItem(row, "silver-arrow");
	addClickHandlers();
}

function appendItem(row, itemName) {
	var itemSpan = document.createElement('span');
	$(itemSpan).addClass(itemName)
		.addClass('item')
		.append($(document.createElement('img'))
			.attr('src','images/' + itemName + '-off.png'));
	$(row).append(itemSpan);
	
}

function cacheImages() {
	new Image().src = "images/blue-candle.png";
	new Image().src = "images/magic-sword.png";
	new Image().src = "images/bow.png";
	new Image().src = "images/raft.png";
	new Image().src = "images/ladder.png";
	new Image().src = "images/flute.png";
	new Image().src = "images/silver-arrow.png";
	new Image().src = "images/blue-candle-off.png";
	new Image().src = "images/magic-sword-off.png";
	new Image().src = "images/bow-off.png";
	new Image().src = "images/raft-off.png";
	new Image().src = "images/ladder-off.png";
	new Image().src = "images/flute-off.png";
	new Image().src = "images/silver-arrow-off.png";
	new Image().src = "images/triforce.png";
	new Image().src = "images/triforce-hover.png";
	new Image().src = "images/empty.png";
}