
var x = null;

	// object dragable
	$(".dragObject").draggable({
		helper:'clone',
		cursor:'move',
		tolerant:'fit',
		revert:true
	});


	$('#containerDrop').droppable({
		accept:'.dragObject',
		drop:function (e, ui){
			if($(ui.draggable)[0].id !=""){
				x = ui.helper.clone();
				ui.helper.remove();
				x.draggable({
					helper:'original',
					cursor:'move',
					tolerant:'fit',
					drop:function(event,ui){
						$(ui.draggable).remove();
						$(this).find("p").html("Yes, dropped")

					}
				});
				x.resizable({
                    maxHeight: $('#containerDrop').height(),
                    maxWidth: $('#containerDrop').width()
                });
			}
		}
	});
	
	