$(document).ready(function(){

	var clicked = false;
    $("h1").click(function(){
    	if (clicked){
    		$(this).css("background-color", "red");
    		clicked = false;
    	} else{
    		$(this).css("background-color", "blue");
    		clicked = true;
    	}
    	
    });

    $("#firstBox").hide();
	$("#secondBox").hide();
	$("#thirdBox").hide(); 
    var box = -1;

    $("p").click(function(){
    	box++;
    	if (box % 3 == 0){
    		$("#firstBox").show();
    		$("#secondBox").hide();
    		$("#thirdBox").hide();   
    		
    	} else if(box % 3 == 1){
    		$("#firstBox").hide();
    		$("#secondBox").show();
    		$("#thirdBox").hide();

    	} else if (box % 3 == 2){
    		$("#firstBox").hide();
    		$("#secondBox").hide();
    		$("#thirdBox").show();

    	}
    });
});