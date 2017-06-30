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

dragImage.ondragstart = function(evt){   //drag is started
	evt.dataTransfer.setData('key',evt.target.id);
	console.log("it's dragging");
}

dropLoc.ondragover = function(evt){    //drag over on canvas
	evt.preventDefault();
	console.log("it's dragging over?!");
}

dropLoc.ondrop = function(evt){    //drop the item
	var dropImage = evt.dataTransfer.getData('key'); 
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

