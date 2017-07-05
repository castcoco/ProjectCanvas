$('#containerDrop').droppable({
  accept:'.dragObject',
  drop: function(ev, ui) { 
    $(ui.draggable).clone(true).appendTo(this);
    
  } 
});

//resize the dragged item in container
$(function(){
	$("#draggable").resizable();
})


	
