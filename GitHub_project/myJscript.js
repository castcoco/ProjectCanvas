
// var theCanvas = document.getElementById("myCanvas");
// var ctx = theCanvas.getContext("2d");
// var widthMenu = document.getElementById("widthMenu");


//load window 

window.onload = function(){
	var Slider = document.getElementById("imageSlider");
	var theCanvasIcon = document.getElementById("canvasIcon");
	var theCanvas = document.getElementById("myCanvas");
	var sizeWidth = document.getElementById("widthMenu").value;
	var sizeLength = document.getElementById("lengthMenu").value;
	theCanvas.width = sizeWidth;
	theCanvas.height = sizeLength;
	if (theCanvas && theCanvas.getContext){
		var ctx = theCanvas.getContext("2d");  //get 2d drawing api
		if (ctx){
			ctx.fillStyle = "white";  //fill with white background
			ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);  //original drawing is 0,0
			
		}
	}
}


			


// function myFunction(){
// 	var selectedWvalue = document.getElementById("widthMenu").value;
// }
	

	// theCanvas.width = function sizeValue(){
	// 	$("#widthMenu").val()}
	// theCanvas.height = function sizeValue(){
	// 	$("#lengthMenu").val()}

//}

// var canvas = document.getElementById('myCanvas'),
// 	context = canvas.getContext('2d'),
// 	AXIS_MARGIN = 40,
//     AXIS_ORIGIN = { x: AXIS_MARGIN, y: canvas.height-AXIS_MARGIN },

//     AXIS_TOP   = AXIS_MARGIN,
//     AXIS_RIGHT = canvas.width-AXIS_MARGIN,

//     AXIS_WIDTH  = AXIS_RIGHT - AXIS_ORIGIN.x,
//     AXIS_HEIGHT = AXIS_ORIGIN.y - AXIS_TOP,

// 	AXIS_LINEWIDTH = 1.0,
//     AXIS_COLOR = 'blue';

//convas drawgrid background
// function gridbg(color, gx, gy){
// 	ctx.save();

// 	ctx.strokeStyle = color;
// 	ctx.fillStyle ="#ffffff"
// 	ctx.lineWidth = 0.5;
// 	ctx.clearRect(0,0, ctx.width, ctx.height);

// 	for (var i = gx + 0.5 ; i< ctx.canvas.width ; i += gx){
// 		ctx.beginPath();
// 		ctx.moveTo(i,0);
// 		ctx.lineTo(i, ctx.canvas.height);
// 		ctx.stroke();
// 	}

// 	for (var i = gy + 0.5; i< ctx.canvas.height; i+=gy){
// 		ctx.beginPath();
// 		ctx.moveTo(0,i);
// 		ctx(ctx.convas.width, i);
// 		ctx.stroke();

// 	}
// 	ctx.restore();
// }

// gridbg('lightgray', 10, 10);

//drawing on canvas
// function drawCanvas(){
// 	var cElem = document.getElementById("myCanvas");
// 	var ctx = cElem.getContext("2d");
// 	if (ctx !=null){
// 		//go ahead and draw 
// 	}

// }

// function sizeValue(){
// 	var a = $("#widthMenu").val()
// 	alert("value is" + a )
// 	}


// function sizeValue()
// {
// 	var noOfRows = document.getElementById("lengthMenu").value;
// 	var noOfCols = document.getElementById("widthMenu").value;
// 	var theader = "<table border ="1"> \n";
// 	var tbody = "";

// 	for (var i=0, i< noOfRows, i++)
// 	{
// 		tbody += "<tr>";
// 		for (j=0, j< noOfCols, j++)
// 		{
// 			//create cell
// 			tbody += "<td>";
// 			tbody += "Cell" + i + "," + j;
// 			tbody += "</td>"
// 		}
// 		tbody += "</tr>\n";
// 	}
// 	var tfooter ="</table>";
// 	document.getElementById ("canvasArea").innerHTML = theader + tbody + tfooter;
// }