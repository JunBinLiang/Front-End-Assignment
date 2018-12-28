var lose=true;
var sequence=[];
var userAction=0;
var indicator=0;
var level=1;

function wrong(){
	 var wrongAudio=new Audio("sounds/wrong.mp3");
     wrongAudio.play();
	 $("body").addClass("game-over");
	 $("#level-title").text("Game-over, Press Any Key to Restart");
}


function addSound()
{
	
	
//yellow
   $(".yellow").on("click",function(){
	   userAction=3;
   if(sequence.length===0)
	{
		 
		 wrong();
		
	}
  
	   
	   
if(userAction===sequence[indicator])
   {
		console.log("ok");
	   indicator++;
	   if(indicator===sequence.length)
	   {
		   level++;
		   indicator=0;
		   userAction=0;
		   setTimeout(gaming,500);
	   }
	  
   }
else
   {
	   
	   console.log("wrong");
	   console.log(sequence[indicator]);
	   wrong();
	   lose=true;
	   indicator=0;
	   sequence.length=0;
	   userAction=0;
	   level=1;
   }	 
   console.log("userAction  "+userAction);
   var audio=new Audio("sounds/yellow.mp3");
   audio.play();
   $(".yellow").addClass("pressed");
   setTimeout(function(){$(".yellow").removeClass("pressed");},100);
                                     });
	
	
	
	
//red
	
	
   $(".red").on("click",function(){
	    userAction=2;
	  if(sequence.length===0)
	{
		 wrong();
	}
	   
if(userAction===sequence[indicator])
   {
		  console.log("ok");
	   indicator++;
	   if(indicator===sequence.length)
	   {
		   level++;
		   indicator=0;
		   userAction=0;
		    setTimeout(gaming,500);
	   }
	   
   }
else
   {
	   console.log("wrong");
	   console.log(sequence[indicator]);
	   wrong();
	   lose=true;
	   indicator=0;
	   sequence.length=0;
	   userAction=0;
	   level=1;
   }
   console.log("userAction  "+userAction);
   var audio1=new Audio("sounds/red.mp3");
   audio1.play();
   $(".red").addClass("pressed");
   setTimeout(function(){$(".red").removeClass("pressed");},100);
                                     });	
	
	
	
	
	
	
//green
   $(".green").on("click",function(){
	     userAction=1;
	   if(sequence.length===0)
	{
		 wrong();
	}
	     
	   
if(userAction===sequence[indicator])
   {
		  console.log("ok");
	      indicator++;
	   if(indicator===sequence.length)
	   {
		   level++;
		   indicator=0;
		   userAction=0;
		    setTimeout(gaming,500);
	   }
	  
   }
else
   {
	   console.log("wrong");
	   console.log(sequence[indicator]);
	   wrong();
	   lose=true;
	   indicator=0;
	   sequence.length=0;
	   userAction=0;
	   level=1;
   }
 
   console.log("userAction  "+userAction);
   var audio2=new Audio("sounds/green.mp3");
   audio2.play();
   $(".green").addClass("pressed");
   setTimeout(function(){$(".green").removeClass("pressed");},100);
                                     });
	
	
	
	
	
	
//blue
	$(".blue").on("click",function(){
		userAction=4;
		if(sequence.length===0)
	{
		 wrong();
	}
		
if(userAction===sequence[indicator])
   {
		  console.log("ok");
	   indicator++;
	   if(indicator===sequence.length)
	   {
		   level++;
		   indicator=0;
		   userAction=0;
		    setTimeout(gaming,500);
	   }
	   
   }
else
   {
	   console.log("wrong");
	   console.log(sequence[indicator]);
	   wrong();
	   lose=true;
	   indicator=0;
	   sequence.length=0;
	   userAction=0;
	   level=1;
   }
	console.log("userAction  "+userAction);
	var audio3=new Audio("sounds/blue.mp3");
	audio3.play();
	$(this).addClass("pressed");
	console.log(this); //button
	setTimeout(function(){
	console.log(this); //window
		$(".blue").removeClass("pressed");},100);
                                     });
}


function gaming()   //changing title,background    random bottom and add
{
	
	var num=Math.random()*4+1;
			var ranButton=Math.floor(num);
			console.log("rannum  "+ ranButton);
			
			$("body").removeClass("game-over");
			
			$("#level-title").text("Level "+level);
			
			//play automatically
			if(ranButton==1)
			{
				 var audio1=new Audio("sounds/green.mp3");
                     audio1.play();
				$(".green").addClass("pressed");
                setTimeout(function(){$(".green").removeClass("pressed");},100);
                                     
			}
			if(ranButton==2)
			{
				var audio2=new Audio("sounds/red.mp3");
                audio2.play();
				$(".red").addClass("pressed");
                setTimeout(function(){$(".red").removeClass("pressed");},100);
                                    
			}
			if(ranButton==3)
			{
				var audio3=new Audio("sounds/yellow.mp3");
                 audio3.play();	
				$(".yellow").addClass("pressed");
                setTimeout(function(){$(".yellow").removeClass("pressed");},100);
                                    
			}
			if(ranButton==4)
			{
				 var audio4=new Audio("sounds/blue.mp3");
                 audio4.play();
				 $(".blue").addClass("pressed");
                 setTimeout(function(){$(".blue").removeClass("pressed");},100);
                                    
			}
			
			
			sequence.push(ranButton);  //remember the sequence
			var length=sequence.length;
			//below :    user action
		    //then compare the sequence
			 console.log("length  "+length);
}




function mainF()
{   
	addSound();
	
	$(document).on("keypress",function(){   //document does not require quotation 
		
		if(lose)  //start as lose, otherwise frozen the action
		{
		     //initialize the level
		    gaming();
			lose=false;
			 
		}
			
		
		
		
	                                      });
}


mainF();
