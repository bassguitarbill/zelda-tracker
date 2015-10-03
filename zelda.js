var DEFAULT_NAME = 'LUNK';

var STATES = {
	sword:	['none', 'wooden', 'white', 'magical'],
	arrow: 	['none', 'wooden', 'silver'],
	candle:	['none', 'blue', 'red'],
	potion:	['none', 'red', 'blue'],
	bow:	['none', ''],
	flute:	['none', ''],
	ladder:	['none', ''],
	raft:	['none', '']
}

function getNextState(imageURL) {
	var matcher = /images\/(.*)\.png/;
	var imageDesignation = matcher.exec(imageURL)[1];
	var imgNameAndState = imageDesignation.split('-');
	var itemName = imgNameAndState[0];
	var currState = imgNameAndState[1] || '';
	var states = STATES[itemName];
	var currIndex = states.indexOf(currState);
	var nextState = states[(currIndex + 1) % states.length];
	var nextItemAndState = itemName + (nextState ? ("-" + nextState) : "");
	return imageURL.replace(imageDesignation, nextItemAndState);
}

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
		ev.toElement.src = getNextState(ev.toElement.src);
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
	appendItem(row, "candle");
	appendItem(row, "bow");
	appendItem(row, "raft");
	appendItem(row, "ladder");
	appendItem(row, "flute");
	appendItem(row, "arrow");
	appendItem(row, "potion");
	appendItem(row, "sword");
	addClickHandlers();
}

function appendItem(row, itemName) {
	var itemSpan = document.createElement('span');
	$(itemSpan).addClass(itemName)
		.addClass('item')
		.append($(document.createElement('img'))
			.attr('src','images/' + itemName + '-none.png'));
	$(row).append(itemSpan);
	
}

function cacheImages() {
	new Image().src = "images/arrow-none.png";
	new Image().src = "images/arrow-silver.png";
	new Image().src = "images/bow.png";
	new Image().src = "images/bow-none.png";
	new Image().src = "images/candle-blue.png";
	new Image().src = "images/candle-none.png";
	new Image().src = "images/empty.png";
	new Image().src = "images/flute.png";
	new Image().src = "images/flute-none.png";
	new Image().src = "images/ladder.png";
	new Image().src = "images/ladder-none.png";
	new Image().src = "images/sword-none.png";
	new Image().src = "images/sword-wooden.png";
	new Image().src = "images/sword-white.png";
	new Image().src = "images/sword-magical.png";
	new Image().src = "images/raft.png";
	new Image().src = "images/raft-none.png";
	new Image().src = "images/triforce.png";
	new Image().src = "images/triforce-hover.png";
}