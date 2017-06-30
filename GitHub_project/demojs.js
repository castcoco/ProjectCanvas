var context = document.getElementById('canvas').getContext('2d');
var iconCanvas = document.getElementById('iconMenuCanvas');
var iconContext = iconCanvas.getContext("2d");

var grid_horizonSpacing = 10;
var gridVertSpacing = 10;
var gridLineColor = 'rgb(0,0,200)';

var iconBgStyle = "#eeeeee";
var iconBorderStrokeStyle = "rgba(100,140,230,0.5)";
var iconStrokeStyle = "rgb(100,140,230)";
var iconFillStyle = "#dddddd";


var eraserIconGridColor = 'rgb(0,0,200)';
var eraserIconCircleColor = 'rgb(100,140,200,0.5)';
var eraserIconRadius = 20;

var iconRectangles = [
	{ x: 13.5, y:18.5, w:48, h:48},
	{ x: 13.5, y:78.5, w:48, h:48},
	{ x: 13.5, y:140.5, w:48, h:48},

];

var lineIcon = 0;
var rectIcon =1;
var eraserIcon =2;

var doFill = false;
var selectedRect = null;
var selectedFunction;

// var imgList = document.getElementById("controls");
// var value = imgList.options[imgList.selectedIndex].value;
// var myImage = document.getElementById("mainImage");
// var imageArray = ["images/strawberries2.png","images/blueberries.png", "images/raspberries3.png", "images/apple.png"];
// var imageIndex = 1;

//function to get the value from dropdownmenu to toolbar



// $("#categoriesSelect").change(function(){  //calling changing event
// 	Jquery(".slider").Slider().gotoSlide($(this).val());
// 	return false;
// })


//function to draw the grid background
function drawGrid(context, color, x, y){
	context.save()
	context.strokeStyle = color;
	context.lineWidth = 0.5;

	for (var i = x + 0.5; i < context.canvas.width; i +=x){
		context.beginPath();
		context.moveTo(i, 0);
		context.lineTo(i, context.canvas.height);
		context.stroke();
	}

	for (var i = y + 0.5; i < context.canvas.height; i+=y){
		context.beginPath();
		context.moveTo(0, i);
		context.lineTo(context.canvas.width, i);
		context.stroke();
	}
	context.restore();
}


//icons
//function to draw line icon
function drawLineIcon(rect){
	iconContext.beginPath();
	iconContext.moveTo(rect.x + 5, rect.y + 5);
	iconContext.lineTo(rect.x + rect.width - 5, rect.y + rect.height -5);
	iconContext.stroke();
}

//function to draw rectangle icon
function drawRecIcon(rect){
	fillIcon(rect);
	iconContext.strokeRect(rect.x + 5, rect.y + 5, rect.width - 10, rect.height -10);
}

//function eraser icon
function draweraserIcon(rect){
	var rect = iconRectangles[eraserIcon];
	iconContext.save();

	iconContext.beginPath();
	iconContext.arc(rect.x + rect.width/2, rect.y + rect.height/2, eraserIconRadius, 0, Math.PI*2, false);

	iconContext.strokeStyle = eraserIconCircleColor;
	iconContext.stroke();

	iconContext.clip(); //restrict drawgrid() to the circle

	drawGrid(iconContext, eraserIconGridColor, 5, 5);

	iconContext.restore();
}

// draw icons
function drawIcon(){
	iconContext.save();

	iconContext.strokeStyle = iconBorderStrokeStyle;
	iconContext.strokeRect(rect.x, rect.y, rect.width, rect.height);
	iconContext.strokeStyle = iconStrokeStyle;

	if (rect.y === iconRectangles[lineIcon].y) drawLineIcon(rect);
	else if (rect.y === iconRectangles[rectIcon.y]) drawRecIcon(rect);
	else if (rect.y ===iconRectangles[eraserIcon.y]) draweraserIcon(rect);
	iconContext.restore();
}

// function drawIcons(){
// 	iconContext.clearRect(0,0, iconCanvas,w, iconCanvas.h);
// 	iconRectangles.forEach(function(rect){
// 		iconContext.save();

// 		if (selectedRect === rect) setSelectedIconShadow();
// 		else setIconShadow();

// 		iconContext.fillStyle = iconBgStyle;
// 		iconContext.fillRect(rect.x, rect.y, rect.w, rect.h);

// 		iconContext.restore();

// 		drawIcon(rect);
// 	})
// }


//initialisation
drawGrid(context, 'lightblue', 10, 10);
// drawIcons();


