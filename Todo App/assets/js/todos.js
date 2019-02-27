// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on trash icon to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		// grabbing a new todo from input field
		var todoText= $(this).val();

		if(todoText.length<40 && todoText.length!==0){
			
			$(this).val("");
		   // display the new todo
		   $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+ todoText +"</li>")
		} 
		else if(todoText.length>40){
			$(this).val("");
			 alert("Maximum 40 characters allowed");
		}
		else{
			
			alert("Please Fill Up The Field.")
		}
	}
});

$(".fa-edit").click(function(){
	$("input[type='text'").fadeToggle();
});