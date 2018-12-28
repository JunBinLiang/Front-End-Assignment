/*
document.querySelectorAll(".drum")[0].addEventListener("click",function(event){
       
		 var audio=new Audio('sounds/tom-1.mp3');
		  audio.play();
	  
 });
 */

document.addEventListener("keypress",function(e1){
       
	 var result=e1.key;
	console.log(e1);
	switch(result){
		case "w":
		   var audio=new Audio("sounds/tom-1.mp3");
		   audio.play();
		   break;
		case "a":
		   var audio=new Audio("sounds/tom-2.mp3");
		   audio.play();
		   break;
		case "s":
		   var audio=new Audio("sounds/tom-2.mp3");
		   audio.play();
		   break;
		case "d":
		   var audio=new Audio("sounds/tom-2.mp3");
		   audio.play();
		   break;
		case "j":
		   var audio=new Audio("sounds/snare.mp3");
		   audio.play();
		   break;
		case "k":
		   var audio=new Audio("sounds/crash.mp3");
		   audio.play();
		   break;
		case "l":
		   var audio=new Audio("sounds/kick-bass.mp3");
		   audio.play();
		   break;
			
		default:
			console.log("");
			
	}
	  
 });