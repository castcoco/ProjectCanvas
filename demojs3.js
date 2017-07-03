// pattern for drop event
// var $canvas = $("#canvas");
// var canvasOffset = $canvas.Offset();
// var offSetX = canvasOffset.left;
// var offSetY = canvasOffset.top;

// var pic = new Image();
// pic.src ="images/strawberries2.png";


// $(function(){
// 	$( ".dragMe" ).draggable({
// 		helper: "clone",
// 		revert:"invalid",
// 		stack:".dragMe"
// 	});
    
//     $( ".canvas" ).droppable({
//     drop: function(event, ui) {
//         $.ui.ddmanager.current.cancelHelperRemoval = true;
//     }
// }).sortable().disableSelection();   
// });


//drag and drop event --data transfer interface

var dragImage = document.getElementById("barEle");
var dropLoc = document.getElementById("container-template");
var draggable = document.getElementById("bar");


// function dragStartHandle(evt){
// 	console.log("it starts dragging");
// 	evt.dataTransfer.setData('key', evt.target.id);
// 	//evt.dataTransfer.setDragImage(img, evt.target.id);
// 	evt.dropEffect ="move"
// 	//var img = new Image();
// 	//img.src = "images/testherbslcon.png";
	
// }

dragImage.ondragstart = function(evt){   //drag is started
	evt.dataTransfer.setData('text',evt.target.id);
	console.log("it's dragging");
}

// function dragOverHandle(evt){
// 	evt.preventDefault();
// 	console.log("it's dragging over?!");
// }

dropLoc.ondragover = function(evt){    //drag over on canvas
	evt.preventDefault();
	console.log("it's dragging over?!");
}

// function dropHandler(evt){
// 	console.log("start dropping")
// 	evt.preventDefault();
// 	var element = evt.dataTransfer.getData("key");
// 	evt.target.appendChild(document.getElementById(element));
// 	evt.dataTransfer.ClearData();
// 	console.log("done");
// }

dropLoc.ondrop = function(evt){    //drop the item
	var dropImage = evt.dataTransfer.getData('text'); 
	evt.preventDefault();
	console.log("it is dropped");
	console.log(dropImage);
	var myElement = document.getElementById(dropImage);
	console.log(myElement);
	var myNewElement = document.createElement('img');
	myNewElement.src = myElement.src
	dropLoc.appendChild(myNewElement);
	console.log("done")
}

// $(function(){
// 	$("#barEle").draggable();	
// });

//dragging object

window.onLoad = addListeners();
var offX;
var offY;


function addListeners(){
	document.getElementById("barEle").addEventListener("mousedown", mouseDown, false);
	window.addEventListener("mouseup", mouseUp, false);

}


function mouseUp(){
	window.removeEventListener("mousemove", divMove, true);
}

function mouseDown(){
	window.addEventListener("mousemove", divMove, true);
}

function divMove(){
	evt = window.event || evt; 
	var div = document.getElementById("barEle");
	div.style.position = "absolute";
	div.style.top = evt.clientY + "px";
	div.style.left = evt.clientX + "px";
}


// changing the size of container
function formSaved(){
	var selWidth = $('#widthmenu').find(":selected").attr("value");
	var selLength = $('#lengthmenu').find(":selected").attr("value");
}



//change the content of toolbar
$(document).on("change", "#categoriesSelect", function(){
	var target = $(this).data("target");
	var showing = $("option:selected", this).data("show");
	$(target).children().addClass("hide");
	$(showing).remove("hide");
});

$(document).ready(function(){
	$("#categoriesSelect").trigger("change")
})