$(".dragObject").draggable({
  	helper:'clone',
  	cursor:'move',
  	tolerant:'fit',
  	
});

//workable code
$('#containerDrop').droppable({
  accept:'.dragObject',
  drop: function(ev, ui) { 
  	if (ui.draggable[0].id) {
    $(this).append($(ui.helper).clone(true).draggable({containment:"#containerDrop", scroll: false}));
  } 
}
});

///not workable
// $("#eraseAllIcon").click(function(){
// 	$("#containerDrop .item").remove();
// })

//resize
// $(document).ready(function(){
// 	$(".dragObject").resizable({
// 		containment:"#containerDrop"
